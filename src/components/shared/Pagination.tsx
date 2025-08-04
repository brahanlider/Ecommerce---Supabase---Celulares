interface Props {
  totalItems: number; // Total de productos en la DB
  page: number; // Página actual
  setPage: React.Dispatch<React.SetStateAction<number>>; // Función para cambiar página
}

export default function Pagination({ totalItems, page, setPage }: Props) {
  // 2️⃣ Navegación entre páginas
  const handleNextPage = () => {
    setPage(page + 1); // Avanzar: Se controla con isLastPage en el botón
  };

  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1)); // Retroceder: Nunca menos que 1
  };

  // 4️⃣ Lógica de paginación
  const itemsPerPage = 10; // Items por página //*(debería venir como prop)
  const totalPages = totalItems
    ? Math.ceil(totalItems / itemsPerPage) // Redondea hacia arriba (ej: 15 items /10 → 2 páginas)
    : 1;

  const isLastPage = page >= totalPages; // ¿Llegamos a la última página? => true

  const startItem = (page - 1) * itemsPerPage + 1; // Fórmula: (pg.1 -> 1, pg.2 → 11, pg.3 → 21)
  // Evita pasarse del total (ej: pg.2 con 15 items → muestra 10-15)
  const endItem = Math.min(page * itemsPerPage, totalItems); // Fórmula: (pg.1 -> 10, pg.2 → 20, pg.3 → 30)

  return (
    <div className="flex justify-between items-center">
      <p className="text-xs font-medium">
        Mostrando{" "}
        <span className="font-bold">
          {startItem} - {endItem}
        </span>{" "}
        de <span className="font-bold">{totalItems}</span> productos
      </p>

      <div className="flex gap-3">
        <button
          className="btn-paginated"
          onClick={handlePrevPage}
          disabled={page === 1}
        >
          Anterior
        </button>
        <button
          className="btn-paginated"
          onClick={handleNextPage}
          disabled={isLastPage}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}
