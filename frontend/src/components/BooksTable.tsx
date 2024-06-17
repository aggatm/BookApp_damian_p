import { Book } from "interfaces/book.interface";
import { upperFirst } from "lodash";
import { Button, Table } from "react-bootstrap";
import { capitalizeAllWords } from "utils/book.utils";

interface Props {
  books: Book[] | undefined;
  goToDetails: (id: string) => void;
}

const BooksTable = ({ books = [], goToDetails }: Props) => {
  return (
    <Table bordered striped data-testid="books-list">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>ISBN</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book.id} data-testid="books-list-row">
            <td>{upperFirst(book.title)}</td>
            <td>{capitalizeAllWords(book.author)}</td>
            <td>{book.isbn}</td>
            <td>
              <Button
                size="sm"
                onClick={() => goToDetails(book.id)}
                data-testid="show-details"
              >
                Show details
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default BooksTable;
