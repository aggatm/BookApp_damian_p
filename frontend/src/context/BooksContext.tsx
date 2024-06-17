import { useBooks } from "hooks/useBooks";
import { useControledDebounce } from "hooks/useControlledDebounce";
import { UsePagination, usePagination } from "hooks/usePagination";
import { Book } from "interfaces/book.interface";
import { isNumber } from "lodash";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
} from "react";

interface BooksContextValue {
  books: Book[] | undefined;
  isLoading: boolean;
  searchString: string;
  setSearchString: (value: string) => void;
  pagination: Omit<UsePagination, "setTotalItems">;
}

const BooksContext = createContext<BooksContextValue | undefined>(undefined);

export const useBooksContext = () => {
  const context = useContext(BooksContext);
  if (!context) {
    throw new Error("useBooksContext must be used within a BooksProvider");
  }
  return context;
};

export const BooksProvider = ({ children }: { children: ReactNode }) => {
  const {
    value,
    debouncedValue: searchString,
    handleValue,
  } = useControledDebounce("");
  const { setTotalItems, ...pagination } = usePagination();

  const { books, totalItems, isLoading } = useBooks(
    pagination.page,
    searchString
  );

  useEffect(() => {
    pagination.goToFirst();
  }, [value]);

  useEffect(() => {
    if (isNumber(totalItems)) {
      setTotalItems(totalItems);
    }
  }, [totalItems, setTotalItems]);

  const contextValue: BooksContextValue = useMemo(
    () => ({
      books,
      isLoading,
      searchString: value,
      setSearchString: handleValue,
      pagination,
    }),
    [books, isLoading, value, handleValue, pagination]
  );
  return (
    <BooksContext.Provider value={contextValue}>
      {children}
    </BooksContext.Provider>
  );
};
