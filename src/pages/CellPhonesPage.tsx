import { useState } from "react";
import { CardProduct } from "../components/products/CardProduct";
import { ContainerFilter } from "../components/products/ContainerFilter";
import { prepareProducts } from "../helpers";
import { useFilteredProducts } from "../hooks";
import Pagination from "../components/shared/Pagination";

export const CellPhonesPage = () => {
  const [page, setPage] = useState(1);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]); // brands => marcas selecionadas

  const {
    data: products = [],
    isLoading,
    totalProducts,
  } = useFilteredProducts({
    page,
    brands: selectedBrands,
  });

  // if (isLoading || !products) return <p>CARGANDO ......</p>;// mal porque toda la pag taria cargando _ CUANDO debe ser 1 punto especifico

  console.log(products);
  console.log(isLoading);

  const preparedProducts = prepareProducts(products);

  return (
    <>
      <h1 className="text-5xl font-semibold text-center mb-12">Celulares</h1>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {/* FILTROS */}
        <ContainerFilter
          selectedBrands={selectedBrands}
          setSelectedBrands={setSelectedBrands}
        />

        {isLoading ? (
          <div className="col-span-2 flex items-center justify-center h-[500px]">
            <p className="text-2xl">Cargando</p>
          </div>
        ) : (
          //  --------DATA-------------
          <div className="col-span-2 lg:col-span-2 xl:col-span-4 flex flex-col gap-12">
            <div className="grid grid-cols-2 gap-3 gap-y-10 xl:grid-cols-4">
              {preparedProducts.map((product) => (
                <CardProduct
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  colors={product.colors}
                  img={product.images[0]}
                  slug={product.slug}
                  variants={product.variants}
                />
              ))}
            </div>

            {/* // TODO: Paginacion */}
            <Pagination
              totalItems={totalProducts}
              page={page}
              setPage={setPage}
            />
          </div>
        )}
      </div>
    </>
  );
};
