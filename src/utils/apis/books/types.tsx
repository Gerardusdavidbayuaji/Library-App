import * as z from "zod";

export const addBookSchema = z.object ({
  title: z
  .string()
  .min(1, {message: "Title is requaired"}),
  author: z
  .string()
  .min(6, {message: "Author is requaired"}),
  isbn: z
  .string()
  .min(6, {message: "The ISBN format is invalid"}),
  category: z
  .string()
  .min(6, {message: "Category is requaired"}),
  description: z
  .string()
  .min(6, {message: "Description is requaired"}),
});

export const editbookSchemaa = z.object ({
  title: z
  .string()
  .min(1, {message: "Title is requaired"}),
  author: z
  .string()
  .min(6, {message: "Author is requaired"}),
  isbn: z
  .string()
  .min(6, {message: "The ISBN format is invalid"}),
  category: z
  .string()
  .min(6, {message: "Category is requaired"}),
  description: z
  .string()
  .min(6, {message: "Description is requaired"}),
});

export const book = z.object ({
  id: z
  .number(),
  title: z
  .string(),
  featured: z
  .boolean(),
  author: z
  .string(),
  isbn: z
  .string(),
  category: z
  .string(),
  description: z
  .string(),
  cover_image: z
  .string(),
});


export type AddBookSchema = z.infer<typeof addBookSchema>; 
export type EditBookSchema = z.infer<typeof editbookSchemaa>;
export type Book = z.infer<typeof book>;