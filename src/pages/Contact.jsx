import { useState } from "react";
import emailjs from "emailjs-com";
import "../stylesheets/contact.scss";


export default function Contact() {

  const [data, setData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const {REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_USER_ID} = process.env;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, e.target, REACT_APP_USER_ID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  return (
    <div className="contact-page">
      <form className="contact-form" onSubmit={sendEmail}>
        <label htmlFor="">Name:</label>
        <input type="text" name="name" placeholder="Enter name..." />
        <label htmlFor="">Email:</label>
        <input type="text" name="email" placeholder="Enter email..." />
        <label htmlFor="">Message:</label>
        <textarea className="textarea" name="message" placeholder="I would love to work with you..." />
        <input className="contact-btn" type="submit" value="SUBMIT" />
      </form>
    </div>
  )
}
