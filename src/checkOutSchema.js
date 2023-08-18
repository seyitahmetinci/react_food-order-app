import * as Yup from "yup";
export const checkOutSchema = Yup.object({
    name: Yup.string().min(2).max(20).required("Please enter your name"),
    street: Yup.string().min(8).required("Please enter Street"),
    postal: Yup.number()
        .min(10000, "Must be exactly 5 digits")
        .required("Please enter Postal code"),
    city: Yup.string().min(3).max(20).required("Please enter your City"),
});