import './index.scss'
import emailjs from 'emailjs-com';

const ContactForm = () => {
  function sendEmail(e: any) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    emailjs.sendForm('service_sq6uips', 'template_knzgey8', e.target, 'user_m3DpFoPmnhavjj56KHKAl')
      .then((result) => {
        window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <div className="contact_form-wrapper">
      <h2>{language.pages.contact.header}</h2>
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label>{language.pages.contact.name}</label>
        <input type="text" name="from_name" />
        <label>{language.pages.contact.email}</label>
        <input type="email" name="from_email" />
        <label>{language.pages.contact.subject}</label>
        <input type="text" name="subject" />
        <label>{language.pages.contact.message}</label>
        <textarea name="html_message" />
        <input type="submit" value={language.pages.contact.send} className="contact-button"/>
      </form>
    </div>
  );
}
export default ContactForm;