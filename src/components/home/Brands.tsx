//  Brands =>  Marcas

const brands = [
  {
    image: "/Logos-Marcas/Apple-logo.webp",
    alt: "Logo de Apple",
  },
  {
    image: "/Logos-Marcas/Samsung-logo.webp",
    alt: "Logo de Samsung",
  },
  {
    image: "/Logos-Marcas/Xiaomi-logo.webp",
    alt: "Logo de Xiaomi",
  },
  {
    image: "/Logos-Marcas/Realme-logo.webp",
    alt: "Logo de Realme",
  },
  {
    image: "/Logos-Marcas/Huawei-logo.png",
    alt: "Logo de Huawei",
  },

  {
    image: "/Logos-Marcas/Honor-logo.png",
    alt: "Logo de Honor",
  },
];
export const Brands = () => {
  return (
    <div className="flex flex-col items-center gap-3 pt-16 pb-12">
      <h2 className="font-bold text-2xl">Marcas que disponemos</h2>
      <p className="w-2/3 text-center text-sm md:text-base">
        Tenemos lo mas moderno en tecnologia y los ultimos modelos de celulares
        disponibles
      </p>

      <div className="grid grid-cols-3 gap-6 mt-8 items-center md:grid-cols-6">
        {brands.map((brand, index) => (
          <div key={index}>
            <img src={brand.image} alt={brand.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};
