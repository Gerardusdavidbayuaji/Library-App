import * as z from "zod";

const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

export const addBookSchema = z.object ({
  title: z
  .string()
  .min(1, {message: "Title is requaired"}),
  featured: z.boolean().optional(),
  author: z
  .string()
  .min(6, {message: "Author is requaired"}),
  isbn: z
  .string()
  .regex(/^(978|979)/u, "The ISBN format is invalid")
  .min(13, { message: "ISBN Minimum length is 13" }),
  category: z
  .string()
  .min(6, {message: "Category is requaired"}),
  description: z
  .string()
  .min(6, {message: "Description is requaired"}),
  cover_image: z
    .any()
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      "Max image size is 5MB"
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png formats are supported"
    )
    .optional()
    .or(z.literal("")),
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
  cover_image: z
    .any()
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      "Max image size is 5MB"
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png formats are supported"
    )
    .optional()
    .or(z.literal("")),
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