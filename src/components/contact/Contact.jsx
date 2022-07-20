import React, { useRef } from "react";
import "./contact.scss";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_qqhth2j",
      "template_1xv0y6n",
      form.current,
      "8jMUYRYfIGn_kmzkU"
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Drop Me Line</h5>
      <h2>Contact</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contactOptionIcon" />
            <h4>Email</h4>

            <h5>stephanielakin13@gmail.com</h5>
            <a href="mailto:stephanielakin13@gmail.com">Send a Message</a>
          </article>
          <article className="contact_option">
            <BsLinkedin className="contactOptionIcon" />
            <h4>LinkedIn</h4>

            <h5>www.linkedin.com/in/stephaniejlakin</h5>
            <a
              href="https://www.linkedin.com/in/stephaniejlakin/"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
        </div>
        {/* end of options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
