import type { Color, Product, VariantProduct } from "../interfaces";

// Funcion para formatear el precio a dolares
export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
};

// Funcion para preparar los prductos - (CELULARES)
export const prepareProducts = (products: Product[]) => {
  return products.map((product) => {
    // Itera cada producto
    //* Agrupa las variantes por color y encuentra el precio mínimo por color
    const colors = product.variants.reduce(
      (acc: Color[], variant: VariantProduct) => {
        // Busca si el color ya fue registrado
        const existingColor = acc.find((item) => item.color === variant.color);

        if (existingColor) {
          // Si el color existe, actualiza el precio al mínimo entre el actual y el nuevo
          existingColor.price = Math.min(existingColor.price, variant.price);
        } else {
          // Si es un color nuevo, lo agrega al acumulador
          acc.push({
            color: variant.color,
            price: variant.price,
            name: variant.color_name, // Nombre legible del color (ej: "Azul marino")
          });
        }

        return acc; // Retorna el acumulador actualizado
      },
      [] // Valor inicial: array vacío
    );
    /// Obtener el precio más bajo de las variantes agrupadas
    const price = Math.min(...colors.map((item) => item.price));

    // Devolver el producto transformado
    return {
      ...product, // Copia todas las propiedades originales
      price, // Precio mínimo de las variantes
      colors: colors.map(({ name, color }) => ({ name, color })), // Solo guarda nombre y color
      variants: product.variants, // Mantiene todas las variantes originales
    };
  });
};
