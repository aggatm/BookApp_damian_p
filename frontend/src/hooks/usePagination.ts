import { useCallback, useEffect, useState } from "react";

export interface UsePagination {
  page: number;
  itemsPerPage: number;
  totalPages: number;
  goToNextPage: () => void;
  goToPreviousPage: () => void;
  goToPage: (page: number) => void;
  setItemsPerPage: (itemsPerPage: number) => void;
  goToFirst: () => void;
  goToLast: () => void;
  setTotalItems: (totalItems: number) => void;
}

export const usePagination = (): UsePagination => {
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    setTotalPages(Math.ceil(totalItems / itemsPerPage));
  }, [totalItems, itemsPerPage]);

  const goToNextPage = useCallback(() => {
    setPage((page) => Math.min(page + 1, totalPages));
  }, [totalPages]);

  const goToPreviousPage = useCallback(() => {
    setPage((page) => Math.max(page - 1, 1));
  }, []);

  const goToPage = useCallback(
    (page: number) => {
      const newPage = Math.max(1, Math.min(page, totalPages));
      setPage(newPage);
    },
    [totalPages]
  );
  const goToFirst = useCallback(() => {
    setPage(1);
  }, []);
  const goToLast = useCallback(() => {
    setPage(totalPages);
  }, [totalPages]);

  return {
    page,
    itemsPerPage,
    totalPages,
    goToNextPage,
    goToPreviousPage,
    goToPage,
    goToFirst,
    goToLast,
    setItemsPerPage,
    setTotalItems,
  };
};
