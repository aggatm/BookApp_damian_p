import { Navbar, Container } from "react-bootstrap";

export const Navigation = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/books">Books-app</Navbar.Brand>
      </Container>
    </Navbar>
  );
};
