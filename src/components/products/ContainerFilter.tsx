import { Separator } from "../shared/Separator";

// brands marcas disponibles
const availableBrands = [
  "Samsung",
  "Apple",
  "Huawei",
  "Xiaomi",
  "Realme",
  "Honor",
];

interface Props {
  selectedBrands: string[];
  setSelectedBrands: (brands: string[]) => void;
}

export const ContainerFilter = ({
  selectedBrands,
  setSelectedBrands,
}: Props) => {
  // Maneja el cambio de selección de marcas (toggle)
  const handlerBrandsChange = (brand: string) => {
    // Si la marca ya está seleccionada, la removemos del array
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    } else {
      // Si la marca no está seleccionada, la agregamos al array
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  return (
    <div className="p-5 border border-slate-500 rounded-lg h-fit col-span-2 lg:col-span-1">
      <h3 className="font-semibold text-xl mb-4">Filtros</h3>

      {/* SEPARADOR */}
      <Separator />

      <div className="flex flex-col gap-3">
        <h3 className="text-lg fontf-medium text-black">Marcas</h3>

        <div className="flex flex-col gap-2">
          {availableBrands.map((brand) => (
            <label key={brand} className="inline-flex items-center">
              <input
                type="checkbox"
                className="text-black focus:ring-black accent-black border-black"
                // Determina si el checkbox debe estar marcado (según si la marca está en selectedBrands)
                checked={selectedBrands.includes(brand)}
                // Ejecuta handlerBrandsChange cuando cambia el estado del checkbox
                onChange={() => handlerBrandsChange(brand)}
              />
              <span className="ml-2 text-black text-sm cursor-pointer">
                {brand}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};
