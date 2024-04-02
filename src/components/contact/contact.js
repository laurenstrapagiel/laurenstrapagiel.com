import "./contact.scss";
import GitHub from "../../assets/images/icons8-github-96.svg";
import X from "../../assets/images/icons8-twitterx-96.svg";
import LinkedIn from "../../assets/images/icons8-linkedin-96.svg";

function Contact() {
  return (
    <header className="contact">
      <h1 id="contact">Contact</h1>
      <h2 className="contact__subhead">Where To Find Me</h2>
      <div className="contact__icons-container">
        <a href="https://www.linkedin.com/in/laurenstrapagiel/">
          <img src={LinkedIn} className="contact__icon" alt="LinkedIn logo" />
        </a>
        <a href="https://github.com/laurenstrapagiel">
          <img src={GitHub} className="contact__icon" alt="GitHub logo" />
        </a>
        <a href="https://twitter.com/laurenstrapa">
          <img src={X} className="contact__icon" alt="X logo" />
        </a>
      </div>
      <h2 className="contact__subhead">Email</h2>
      <p>Reach me at lauren.strapagiel (at) gmail.com</p>
    </header>
  );
}

export default Contact;
