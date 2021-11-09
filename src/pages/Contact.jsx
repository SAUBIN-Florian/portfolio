import "../stylesheets/contact.scss";

export default function Contact() {
  return (
    <div className="contact-page">
      <form className="contact-form" action="POST">
        <label htmlFor="">Name:</label>
        <input type="text" placeholder="Your name..." />
        <label htmlFor="">Email:</label>
        <input type="text" placeholder="Your email..." />
        <label htmlFor="">Message:</label>
        <textarea className="textarea" placeholder="Your message..." />
        <input className="contact-btn" type="submit" value="Submit" />
      </form>
    </div>
  )
}
