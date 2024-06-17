import axios, { AxiosResponse } from "axios";
import { PaginatedResponse } from "interfaces/api.interface";
import { Book } from "interfaces/book.interface";
import { Pagination } from "interfaces/pagination.interface";

interface SearchBooksParams extends Pagination {
  searchString?: string;
}
interface CreateBook extends Omit<Book, "id" | "createdAt" | "updatedAt"> {}

export const booksApi = {
  getBooks: async (
    params: SearchBooksParams
  ): Promise<AxiosResponse<PaginatedResponse<Book>>> => {
    return axios.get("/api/books", { params });
  },
  getBook: async (id?: string): Promise<AxiosResponse<Book>> => {
    if (!id) throw new Error("Id is required");
    return axios.get(`/api/books/${id}`);
  },
  createBook: async (data: CreateBook): Promise<AxiosResponse<string>> => {
    return axios.post("/api/books", data);
  },
};
