import { Pagination as BootstrapPagination } from "react-bootstrap";

interface Props {
  page: number;
  totalPages: number;
  goToPage: (page: number) => void;
  goToNextPage: () => void;
  goToPreviousPage: () => void;
  goToFirst: () => void;
  goToLast: () => void;
}

export const Pagination = ({
  page,
  totalPages,
  goToPage,
  goToNextPage,
  goToPreviousPage,
  goToFirst,
  goToLast,
}: Props) => {
  const pageItems = [page - 1, page, page + 1].filter(
    (item) => item && item > 1 && item < totalPages
  );

  return (
    <BootstrapPagination>
      <BootstrapPagination.Prev onClick={goToPreviousPage} />
      <BootstrapPagination.Item onClick={goToFirst} active={page === 1}>
        {1}
      </BootstrapPagination.Item>

      {page > 3 && <BootstrapPagination.Ellipsis disabled />}

      {totalPages > 1 &&
        pageItems.map((item) => (
          <BootstrapPagination.Item
            key={item}
            active={item === page}
            onClick={() => goToPage(item)}
          >
            {item}
          </BootstrapPagination.Item>
        ))}

      {page < totalPages - 2 && <BootstrapPagination.Ellipsis disabled />}

      {totalPages > 1 && (
        <BootstrapPagination.Item
          onClick={goToLast}
          active={page === totalPages}
        >
          {totalPages}
        </BootstrapPagination.Item>
      )}
      <BootstrapPagination.Next onClick={goToNextPage} />
    </BootstrapPagination>
  );
};
