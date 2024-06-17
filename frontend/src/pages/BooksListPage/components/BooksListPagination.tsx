import { Pagination } from "components/Pagination";
import { useBooksContext } from "context/BooksContext";

export const BooksListPagination = () => {
  const { pagination } = useBooksContext();

  return <Pagination {...pagination} />;
};
