import React, {  useRef} from "react";
import "./form.css";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Form = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_71n3ils",
        "template_ugxigjn",
        form.current,
        "MW-GcPsLCO-lW1cyV"
      )
      .then(
        (result) => {
          toast.success("E-mail Sent's Successfully", {
            icon: "🚀",
            theme:"colored"
          });
          form.current.reset()
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user"  placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="button"/>
        </form>
        <ToastContainer style={{textAlign:"center" , fontWeight:"bolder" , fontSize:"20px"}} />
      </div>
    </div>
  );
};

export default Form;