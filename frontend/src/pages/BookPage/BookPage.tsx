import { useBook } from "hooks/useBook";
import { Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router";
import { BookDetails } from "./components/BookDetails";

const BookPage = () => {
  const { bookId } = useParams();
  const { book, isLoading } = useBook(bookId);

  if (isLoading)
    return (
      <Row className="justify-content-center">
        <Spinner animation="border" />
      </Row>
    );

  return <BookDetails book={book} />;
};

export default BookPage;
