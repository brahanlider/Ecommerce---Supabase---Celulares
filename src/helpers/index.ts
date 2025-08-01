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
    // Agrupar las variantes por color
    const colors = product.variants.reduce(
      (acc: Color[], variant: VariantProduct) => {
        const existingColor = acc.find((item) => item.color === variant.color);

        if (existingColor) {
          //si ya existe el color, comparamos los precios
          existingColor.price = Math.min(existingColor.price, variant.price);
        } else {
          //Mantenemos el precio minimo
          acc.push({
            color: variant.color,
            price: variant.price,
            name: variant.color_name,
          });
        }

        return acc;
      },
      []
    );
    // OBtener el precio mas bajo de las variantes agrupadas
    const price = Math.max(...colors.map((item) => item.price));

    // Devolver el producto formateado
    return {
      ...product,
      price,
      colors: colors.map(({ name, color }) => ({ name, color })),
      variants: product.variants,
    };
  });
};
