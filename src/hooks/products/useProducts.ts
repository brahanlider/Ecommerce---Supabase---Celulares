import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../actions";

export const useProducts = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["products"], // 🔑 Clave única => identificar esta query (como un ID)
    queryFn: () => getProducts(), // extraendo api
    staleTime: 1000 * 60 * 5, // 1 hora - Tiempo de inactividad / absoleto
  });

  console.log(data);
  console.log(isLoading);

  return { products: data, isLoading };
};
