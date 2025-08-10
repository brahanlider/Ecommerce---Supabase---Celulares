//  ------- se puede decir que es axios o fetch --------

//  FUNCIONES acionen con nuestra api

import { supabase } from "../supabase/clientConfig";

export const getProducts = async () => {
  const { data: products, error } = await supabase
    .from("products") // 📦 Tabla de productos
    .select("*,variants(*)") //🔄 Relación: UNO_padre : MUCHOS_hijo
    .order("created_at", { ascending: false }); // ⏬ Ordena por fecha (más nuevos primero)

  if (error) {
    console.log(error.message);
    throw new Error(error.message);
  }

  return products;
};

export const getFilteredProducts = async ({
  page = 1,
  brands = [],
}: {
  page: number;
  brands: string[];
}) => {
  const itemsPerPage = 10;
  const from = (page - 1) * itemsPerPage; // 1-1*10 = 0
  const to = from + itemsPerPage - 1; // 0 a 9 = 10 indices

  //* count: "exact": Devuelve el número total de productos (útil para calcular páginas totales).
  let query = supabase
    .from("products")
    .select("*,variants(*)", { count: "exact" }) //count devuelve el count total de mi db
    .order("created_at", { ascending: false }) // descendente /nuevo arriba
    .range(from, to); // Paginación (rango de índices)

  //si hay algo en brands
  if (brands.length > 0) {
    query = query.in("brand", brands); // Filtra por marcas (ej: WHERE brand IN ("Apple", "Samsung"))
  } //  ====> SERIA COMO ESTO supabase.from("products").select("*").in("brand", ["Apple", "Samsung"]);

  const { data, error, count } = await query;

  if (error) {
    console.log(error);
    throw new Error(error.message);
  }

  return { data, count };
};

export const getRecentProducts = async () => {
  const { data: products, error } = await supabase
    .from("products")
    .select("*,variants(*)")
    .order("created_at", { ascending: false }) // lo nuevo arriba
    .limit(4); // Solo trae 4 registros para optimizar

  if (error) {
    console.log(error);
    throw new Error(error.message);
  }

  return products;
};

export const getRandomProducts = async () => {
  const { data: products, error } = await supabase
    .from("products")
    .select("*,variants(*)")
    .limit(20); // Solo trae 20 registros para optimizar

  if (error) {
    console.log(error);
    throw new Error(error.message);
  }

  // sort sortea y luego toma 4 productos
  const randomProducts = products.sort(() => 0.5 - Math.random()).slice(0, 4);

  return randomProducts; // Retorna 4 productos aleatorios de los 20 más recientes
};
// acceder /celulares/:id
export const getProductBySlug = async (slug: string) => {
  const { data: product, error } = await supabase
    .from("products")
    .select("*, variants(*)")
    // Column is equal to a value => filtro de igualdad en la COLUMNA
    .eq("slug", slug) // tabla="slug"  === parametro=slug
    .single(); // selecciona uno YA QUE NO DEBE SER ARRAY

  if (error) {
    console.log(error);
    throw new Error(error.message);
  }

  return product;
};

// lupa
export const searchProducts = async (searchTerm: string) => {
  const { data, error } = await supabase
    .from("products")
    .select("*,variants(*)")
    .ilike("name", `%${searchTerm}%`); //  Buscar productos cuyo nombre tengo el termino de busqueda _ //  no distingue entre mayúsculas y minúsculas

  if (error) {
    console.log(error);
    throw new Error(error.message);
  }

  return data;
};
