import { useBooksContext } from "context/BooksContext";
import { Spinner } from "react-bootstrap";

export const BookListLoader = () => {
  const { isLoading } = useBooksContext();

  if (!isLoading) return null;

  return <Spinner />;
};
