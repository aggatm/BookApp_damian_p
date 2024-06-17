import { useQuery } from "@tanstack/react-query";
import { booksApi } from "api/books.api";

export const useBooks = (page: number, searchString?: string) => {
  const books = useQuery({
    queryKey: ["books", searchString, page],
    queryFn: () => booksApi.getBooks({ page, perPage: 10, searchString }),
    cacheTime: 0,
  });

  return {
    books: books.data?.data.data,
    totalItems: books.data?.data.total,
    isLoading: books.isLoading,
  };
};
