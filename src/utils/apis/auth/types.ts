import * as z from "zod";

export const loginSchema = z.object ({
  email: z
  .string()
  .min(1, {message: "Email is requaired"})
  .email("not valid email"),
  password: z
  .string()
  .min(6, {message: "Password is requaired"})
});

export const registerSchema = z.object ({
  full_name: z
  .string()
  .min(1, {message: "Full name is requaired"}),
  email: z
  .string()
  .min(1, {message: "Email is requaired"})
  .email("Not valid email"),
  password: z
  .string()
  .min(6, {message: "Password is requaired"}),
  repassword: z
  .string()
  .min(6, {message: "Retype password is requaired"}),
  role: z
  .string()
  .default("user"),
  address: z.string().min(1, { message: "Address is required" }),
  phone_number: z
  .string()
  .min(7, { message: "Phone number minimum length is 7 character" }),
})

.refine((data) => data.password === data.repassword, {
  message: "Password don't match",
  path: ["repassword"],
});

export type LoginSchema = z.infer<typeof loginSchema>; 
export type RegisterSchema = z.infer<typeof registerSchema>; 