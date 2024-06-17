import { BooksProvider } from "context/BooksContext";
import { BooksList } from "./components/BooksList";
import { Col, Row } from "react-bootstrap";
import { BooksSearchInput } from "./components/BooksSearchInput";
import { BookListLoader } from "./components/BookListLoader";
import { BooksListPagination } from "./components/BooksListPagination";
import { AddBookButton } from "./components/AddBookButton";

const BooksListPage = () => {
  return (
    <BooksProvider>
      <Row className="py-3 justify-content-between">
        <Col>
          <AddBookButton />
        </Col>
        <Col xs={3}>
          <Row className="justify-content-end flex-nowrap">
            <BookListLoader />
            <BooksSearchInput />
          </Row>
        </Col>
      </Row>
      <Row>
        <BooksList />
      </Row>
      <Row className="py-3">
        <BooksListPagination />
      </Row>
    </BooksProvider>
  );
};

export default BooksListPage;
