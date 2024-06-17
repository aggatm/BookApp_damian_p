import React from "react";
import { Spinner } from "react-bootstrap";
import { Routes, Route, Navigate } from "react-router-dom";

const AddBookPage = React.lazy(() => import("pages/AddBookPage/AddBookPage"));
const BookPage = React.lazy(() => import("pages/BookPage/BookPage"));
const BooksListPage = React.lazy(
  () => import("pages/BooksListPage/BooksListPage")
);

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/books"
        element={
          <React.Suspense fallback={<Spinner />}>
            <BooksListPage />
          </React.Suspense>
        }
      />
      <Route
        path="/books/new"
        element={
          <React.Suspense fallback={<Spinner />}>
            <AddBookPage />
          </React.Suspense>
        }
      />
      <Route
        path="/books/:bookId"
        element={
          <React.Suspense fallback={<Spinner />}>
            <BookPage />
          </React.Suspense>
        }
      />

      <Route path="*" element={<Navigate to="/books" replace />} />
    </Routes>
  );
};
