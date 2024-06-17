import { Book } from "interfaces/book.interface";
import { capitalizeAllWords } from "utils/book.utils";

interface Props {
  book?: Book;
}

export const BookDetails = ({ book }: Props) => {
  if (!book) return null;
  return (
    <div>
      <h1>{book.title}</h1>
      <p>{capitalizeAllWords(book.author)}</p>
      <p>{book.isbn}</p>
      <p>{book.pagesNumber} pages</p>
      <p>rate: {book.rate}</p>
    </div>
  );
};
