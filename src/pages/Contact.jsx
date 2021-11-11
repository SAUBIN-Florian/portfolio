import "../stylesheets/contact.scss";

export default function Contact() {
  return (
    <div className="contact-page">
      <form className="contact-form" action="POST">
        <label htmlFor="">Name:</label>
        <input type="text" placeholder="Enter name..." />
        <label htmlFor="">Email:</label>
        <input type="text" placeholder="Enter email..." />
        <label htmlFor="">Message:</label>
        <textarea className="textarea" placeholder="I would love to work with you..." />
        <input className="contact-btn" type="submit" value="SUBMIT" />
      </form>
    </div>
  )
}
