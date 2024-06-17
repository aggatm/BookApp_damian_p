import { useQuery } from "@tanstack/react-query";
import { booksApi } from "api/books.api";

export const useBook = (id?: string) => {
  const book = useQuery({
    queryKey: ["book", id],
    queryFn: () => booksApi.getBook(id),
  });

  return {
    book: book.data?.data,
    isLoading: book.isLoading,
  };
};
