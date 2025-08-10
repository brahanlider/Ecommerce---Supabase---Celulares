//  Sheet - Hoja - hojas de cálculo, hojas de estilo o componentes de hoja (bottom sheet

import { useEffect, useRef } from "react";
import { useGlobalStore } from "../../store/global.store";
import { Cart } from "./Cart";
import { Search } from "./Search";

export const Sheet = () => {
  const sheetContent = useGlobalStore((state) => state.sheetContent);
  const closeSheet = useGlobalStore((state) => state.closeSheet);

  const sheetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    //Funcion para manejar clicks fuera del sheet
    const handleOutSideClick = (e: MouseEvent) => {
      if (sheetRef.current && !sheetRef.current.contains(e.target as Node)) {
        closeSheet();
      }
    };

    //Agregar event Listener
    document.addEventListener("mousedown", handleOutSideClick);

    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [closeSheet]);

  //Funcion para saber el componente a renderizar
  const renderContent = () => {
    switch (sheetContent) {
      case "cart":
        return <Cart />;
      case "search":
        return <Search />;
      default:
        break;
    }
  };

  return (
    // tailwindcss v3 bg-opacity-50 ==> v4.1 bg-black/50
    <div className="fixed inset-0 bg-black/50  z-50 flex justify-end animate-fade-in">
      <div
        ref={sheetRef}
        className="bg-white text-black h-screen w-[500px] shadow-lg animate-slide-in
        
        "
      >
        {renderContent()}
      </div>
    </div>
  );
};
