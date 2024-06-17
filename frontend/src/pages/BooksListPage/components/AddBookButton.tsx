import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

export const AddBookButton = () => {
  const navigate = useNavigate();

  const goToAddBookForm = () => {
    navigate("/books/new");
  };

  return <Button onClick={goToAddBookForm}>Add book</Button>;
};
