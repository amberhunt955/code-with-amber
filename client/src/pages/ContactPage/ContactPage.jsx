import { TextField, Button } from "@mui/material";

import "./ContactPage.css";

function ContactPage() {
  return (
    <div className="contact-page">
      <h1>Get In Touch</h1>
      <p>Thoughts, questions, ideas, feedback? Send me an email!</p>
      <form>
        <div id="sender-info">
          <TextField type="text" name="name" label="Your Name" />

          <TextField type="email" name="email" label="Your Email" />
        </div>

        <TextField multiline fullWidth rows={8}/>

        <Button variant="contained">SEND</Button>
      </form>
    </div>
  );
}

export default ContactPage;
