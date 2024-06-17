import { AddBookForm } from "./components/AddBookForm";
import { Col, Row } from "react-bootstrap";

const AddBookPage = () => {
  return (
    <Row className="py-3 justify-content-center">
      <Col xs={6}>
        <AddBookForm />
      </Col>
    </Row>
  );
};

export default AddBookPage;
