import { useState } from "react";
import emailjs from "emailjs-com";
import "../stylesheets/contact.scss";


export default function Contact() {

  const [data, setData] = useState({name: "", email: "", message: ""});
  const [empty, setEmpty] = useState({name: false, email: false, message: false});
  const [error, setError] = useState(false);
  const [sended, setSended] = useState(false);

  const {REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_USER_ID} = process.env;

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSended(false)
    if(data.name && data.email && data.message){
      errorOutline(data, empty);
      emailjs.sendForm(REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, e.target, REACT_APP_USER_ID)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
      e.target.reset();
      setData({name: "", email: "", message: ""})
      setSended(true);
    }else{
      errorOutline(data, empty);
      setError(true);
    }
  }

  const onChange = (e) => {
    setData({...data, [e.target.name]: e.target.value});
  }

  const errorOutline = (data, empty) => {
    switch(true){
      case !data.name:
        return setEmpty({...empty, name: true});
      case !data.email:
        return setEmpty({...empty, email: true});
      case !data.message:
        return setEmpty({...empty, message: true});
      default:
        return setEmpty({name: false, email: false, message: false});
    }
  }

  return (
    <div className="contact-page">
      <form className="contact-form" onSubmit={sendEmail}>
        <label htmlFor="">Name</label>
        <input className={empty.name ? "empty" : ""} type="text" name="name" value={data.name} onChange={onChange} placeholder="Enter name..." />
        <label htmlFor="">Email</label>
        <input className={empty.email ? "empty" : ""} type="text" name="email" value={data.email} onChange={onChange} placeholder="Enter email..." />
        <label htmlFor="">Message</label>
        <textarea className={`textarea ${empty.message ? "empty" : ""}`} name="message" value={data.message} onChange={onChange} placeholder="I would love to work with you..." />
        { error && <span className="error-msg">Please complete all empty fields...</span> }
        { sended && <span className="sended-msg">Your message were correctly send </span> }
        <input className="contact-btn" type="submit" value="SUBMIT" />
      </form>
    </div>
  )
}
