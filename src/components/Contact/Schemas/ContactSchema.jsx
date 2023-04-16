import * as Yup from "yup";

export const ContactSchema = Yup.object({
  Name: Yup.string().min(3).max(25).required("Please Enter Your Name.."),
  EmailS: Yup.string().email().required("Please Enter Your Email.."),
  Message: Yup.string().min(5).max(300).required("Please Enter Message.."),
})