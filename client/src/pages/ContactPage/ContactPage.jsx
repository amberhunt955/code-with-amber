import { useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

// styling and material ui
import { TextField, Button } from "@mui/material";
import "./ContactPage.css";

function ContactPage() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("\nSUCCESS!\n\nYour email has been submitted.");
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
          alert(
            "\nERROR!\n\nYour email has NOT been submitted.\n\nWe apologize for the technical difficulties."
          );
        }
      );
  };

  return (
    <div className="contact-page">
      <h1>Get In Touch</h1>
      <p>Thoughts, questions, ideas, feedback? Send me an email!</p>
      <form ref={form} onSubmit={sendEmail} id="form">
        <div id="sender-info">
          <TextField type="text" name="user_name" label="Your Name" required/>

          <TextField type="email" name="user_email" label="Your Email" required/>
        </div>

        <TextField label="Your Message" name="message" multiline fullWidth rows={8} required/>

        <Button type="submit" id="email-submit" value="Send" variant="contained">
          SEND
        </Button>
      </form>

      <Link to="/" style={{textDecoration: 'none'}}>- Go Back to Home Page -</Link>
    </div>
  );
}

export default ContactPage;
