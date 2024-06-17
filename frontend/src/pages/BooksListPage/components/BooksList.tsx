import BooksTable from "components/BooksTable";
import { useBooksContext } from "context/BooksContext";
import { useNavigate } from "react-router";

export const BooksList = () => {
  const navigate = useNavigate();
  const { books } = useBooksContext();

  const goToDetails = (id: string) => {
    navigate(`/books/${id}`);
  };

  return <BooksTable books={books} goToDetails={goToDetails} />;
};
