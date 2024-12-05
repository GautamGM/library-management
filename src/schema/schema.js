import * as yup from "yup";

export const bookSchema = yup.object().shape({
  Title: yup
    .string()
    .required("Title is required")
    .min(4, "Name must be at least 4 characters long"),
  
    Author: yup
    .string()
    .required("Author is required"),
  
    Publication_Year: yup
    .string()
    .matches(/^[0-9]{4}$/, "Please enter a valid year (e.g., 2024)")
    .required("Year is required"),
  
    image: yup
    .string()
});

