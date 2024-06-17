import { useBooksContext } from "context/BooksContext";
import { FormControl } from "react-bootstrap";

export const BooksSearchInput = () => {
  const { searchString, setSearchString } = useBooksContext();

  const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
  };

  return (
    <FormControl
      value={searchString}
      onChange={handleValue}
      placeholder="Search by Title or Author"
    />
  );
};
