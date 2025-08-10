import { create, type StateCreator } from "zustand";
import { devtools } from "zustand/middleware";
import type { ICartItem } from "../components/shared/CartItem";

export interface CartState {
  items: ICartItem[];
  totalItemsInCart: number;
  totalAmount: number;

  addItem: (item: ICartItem) => void;
  removeItem: (variantId: string) => void;
  updateQuantity: (variantId: string, quantity: number) => void;
  cleanCart: () => void;
}

const storeApi: StateCreator<CartState> = (set) => ({
  items: [],
  totalItemsInCart: 0,
  totalAmount: 0,

  //item (parametro) =>  del nuevo producto y items => producto antiguo
  addItem: (item) => {
    set((state) => {
      console.log("➡ addItem llamado con: ", item);
      console.log("Estado antes: ", state.items);
      console.log("------------------------------------------------");
      console.log("🛒 Estado anterior: ", state);

      // Buscar si ya existe en el carrito (por variantId)
      const existingItemIndex = state.items.findIndex(
        //Compara --> viejo (i.variantId) === nuevo producto (item.variantId).
        (i) => i.variantId === item.variantId // RETORNA EXISTE=> indice del array_  NO EXISTE=> -1
      );

      console.log("existingItemIndex: ", existingItemIndex);

      let updatedItems;

      if (existingItemIndex >= 0) {
        // 🔹 Ya existe → aumentar cantidad
        updatedItems = state.items.map(
          (i, index) =>
            // ejemplo existingItemIndex(0) =  index(0) de items[]
            index === existingItemIndex
              ? {
                  ...i, //* spread operator => copia todo del viejo producto => i
                  quantity: i.quantity + item.quantity, // i => viejo / item => nuevo
                }
              : i //devuelve sin cambios
        );
      } else {
        // 🔹 No existe → agregar nuevo
        updatedItems = [...state.items, item];
      }

      console.log("✅ Nuevo item o cantidad actualizada: ", updatedItems);

      // reduce agarra el array y i.quantity seran sumadas y guardadas en acc
      const newTotalItems = updatedItems.reduce(
        (acc, i) => acc + i.quantity,
        0
      );

      // reduce agarra el array luego i.price y i.quantity seran multiplicados y guardados en acc en una suma
      const newTotalAmount = updatedItems.reduce(
        (acc, i) => acc + i.price * i.quantity,
        0
      );

      console.log(
        `📦 Total unidades: ${newTotalItems} | 💵 Total : ${newTotalAmount}`
      );

      return {
        items: updatedItems, // 🛒 Lista actualizada del carrito
        totalAmount: newTotalAmount, // 💰 Total a pagar (suma de price * quantity)
        totalItemsInCart: newTotalItems, // 🔢 Cantidad total de unidades en el carrito
      };
    });
  },

  removeItem: (variantId) => {
    set((state) => {
      //filter como map es crear otro arrary nuevo
      // en este caso filter tendra todos los items NUEVO
      // __ menos el mismo (2! == 2 ) que dara FALSE
      const itemFiltered = state.items.filter((i) => i.variantId !== variantId);

      const newTotalItems = itemFiltered.reduce(
        (acc, it) => acc + it.quantity,
        0
      );

      const newTotalAmount = itemFiltered.reduce(
        (acc, it) => acc + it.price * it.quantity,
        0
      );

      return {
        items: itemFiltered,
        totalAmount: newTotalAmount,
        totalItemsInCart: newTotalItems,
      };
    });
  },

  updateQuantity: (variantId, quantity) => {
    set((state) => {
      const itemUpdateQuantity = state.items.map((i) =>
        i.variantId === variantId
          ? {
              ...i,
              quantity: quantity,
            }
          : i
      );

      const newTotalItems = itemUpdateQuantity.reduce(
        (acc, it) => acc + it.quantity,
        0
      );

      const newTotalAmount = itemUpdateQuantity.reduce(
        (acc, it) => acc + it.price * it.quantity,
        0
      );

      return {
        items: itemUpdateQuantity,
        totalAmount: newTotalAmount,
        totalItemsInCart: newTotalItems,
      };
    });
  },

  cleanCart: () => {
    set({ items: [], totalItemsInCart: 0, totalAmount: 0 });
  },
});

export const useCartStore = create<CartState>()(devtools(storeApi));
