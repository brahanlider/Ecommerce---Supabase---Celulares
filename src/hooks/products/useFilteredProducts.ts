import { useQuery } from "@tanstack/react-query";
import { getFilteredProducts } from "../../actions";

export const useFilteredProducts = ({
  page,
  brands,
}: {
  page: number;
  brands: string[];
}) => {
  const { data, isLoading } = useQuery({
    queryKey: ["filteredProducts", page, brands],
    queryFn: () => getFilteredProducts({ page, brands }),
    retry: false, // intento 1 vez porque x default es 4 veces
  });

  console.log(data);
  return {
    data: data?.data,
    isLoading,
    totalProducts: data?.count ?? 0, // (Nullish Coalescing Operator)
    // => data?.count  es null o undefined =>retorna 0          -- si su valor es: 0, false, ""   lo retorna tal cual
  };
};
