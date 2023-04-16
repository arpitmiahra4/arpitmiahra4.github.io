import React, { useRef } from "react";
import "./form.css";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactSchema } from "./Schemas/ContactSchema";
import { useFormik } from "formik";
const Form = () => {
  const initialValues = {
    Name: "",
    EmailS: "",
    Message: "",
    Mobile: ""
  }


  const SendMail = (templateParams) => {
    emailjs.send("service_71n3ils", "template_ugxigjn", templateParams, 'MW-GcPsLCO-lW1cyV')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
        console.log('FAILED...', err);
      });
      toast.success("E-mail Sent's Successfully", {
        icon: "🚀",
        theme:"colored",
        duration:5000,
        
      });
  }

  const { values,handleBlur, handleChange, handleSubmit, setValues } = useFormik({
    initialValues,
    validationSchema: ContactSchema,
    onSubmit: (values, action) => {
      action.resetForm()
      setValues(initialValues)
      SendMail({ "name": values.Name, "user-email": values.EmailS, "message": values.Message})
    }
  })

  return (
    <div className="contact-form" id="contact">
      <div className="c-right">
        <form>
          <input type="text" name='Name'
            value={values.Name} className="user" onChange={handleChange} onBlur={handleBlur} placeholder="Name" />
          <input type="email" name='EmailS' 
            value={values.EmailS} onChange={handleChange} onBlur={handleBlur} className="user" placeholder="Email" />
          <textarea name='Message'
            value={values.Message} onChange={handleChange} onBlur={handleBlur}  className="user" placeholder="Message" />
          <button onClick={handleSubmit} className="button">Send</button>
        </form>
        <ToastContainer style={{ textAlign: "center", fontWeight: "bolder", fontSize: "20px" }} />
      </div>
    </div>
  );
};

export default Form;