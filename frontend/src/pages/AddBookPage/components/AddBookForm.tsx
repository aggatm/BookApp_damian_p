import { FieldErrors, UseFormRegister, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Alert, Button, Form } from "react-bootstrap";
import { useMutation } from "@tanstack/react-query";
import { booksApi } from "api/books.api";
import { useNavigate } from "react-router";
import { useState } from "react";
import { isString } from "lodash";
import { AxiosError } from "axios";

const isbnRegex = /^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/;

const schema = z.object({
  title: z.string().min(1, "Title is required").max(255, "Title is too long"),
  author: z
    .string()
    .min(1, "Author is required")
    .max(255, "Author is too long"),
  isbn: z
    .string()
    .regex(isbnRegex, "ISBN must be a valid 10 or 13 digit number"),
  pagesNumber: z.coerce
    .number()
    .int()
    .min(1, "Page numbers must be at least 1"),
  rate: z.coerce
    .number()
    .min(1, "Rate must be at least 1")
    .max(5, "Rate cannot be more than 5"),
});

type BookForm = z.infer<typeof schema>;

interface FormFieldProps {
  label: string;
  type: string;
  register: UseFormRegister<BookForm>;
  errors: FieldErrors<BookForm>;
  fieldName: keyof BookForm;
}

const FormField = ({
  label,
  type,
  register,
  errors,
  fieldName,
}: FormFieldProps) => (
  <Form.Group controlId={fieldName}>
    <Form.Label>{label}</Form.Label>
    <Form.Control
      type={type}
      {...register(fieldName)}
      isInvalid={!!errors[fieldName]}
    />
    <Form.Control.Feedback type="invalid">
      {errors[fieldName]?.message}
    </Form.Control.Feedback>
  </Form.Group>
);

export const AddBookForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<BookForm>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const createBook = useMutation({
    mutationKey: ["createBook"],
    mutationFn: (book: BookForm) => booksApi.createBook(book),

    onSuccess: (res) => {
      if (res.status === 201) {
        navigate(`/books/${res.data}`);
      }
    },
    onError: (error: AxiosError<{ message: string }>) => {
      console.error("Error creating book:", error);
      const errorMessage =
        error?.response?.data?.message || "Error creating book";
      if (isString(errorMessage)) setErrorMessage(errorMessage);
    },
  });

  const handleCloseError = () => {
    setErrorMessage("");
  };

  return (
    <div>
      {errorMessage && (
        <Alert variant="danger" onClose={handleCloseError} dismissible>
          {errorMessage}
        </Alert>
      )}
      <h2>Add New Book</h2>
      <Form onSubmit={handleSubmit((data) => createBook.mutateAsync(data))}>
        <FormField
          label="Title"
          type="text"
          register={register}
          errors={errors}
          fieldName="title"
        />
        <FormField
          label="Author"
          type="text"
          register={register}
          errors={errors}
          fieldName="author"
        />
        <FormField
          label="ISBN"
          type="text"
          register={register}
          errors={errors}
          fieldName="isbn"
        />
        <FormField
          label="Page Numbers"
          type="number"
          register={register}
          errors={errors}
          fieldName="pagesNumber"
        />
        <FormField
          label="Rate (1-5)"
          type="number"
          register={register}
          errors={errors}
          fieldName="rate"
        />

        <Button variant="primary" type="submit" disabled={!isValid}>
          Submit
        </Button>
      </Form>
    </div>
  );
};
