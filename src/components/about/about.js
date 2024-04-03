import "./about.scss";
import Headshot from "../../assets/images/Code-To-Career---January-2024_0010_Lauren-Strapagiel.jpg"

function About() {
  return (
    <section className="about">
      <div className="about__intro">
        <div className="about__left">
          <img
            src={Headshot}
            className="about__headshot"
            alt="Lauren Strapagiel"
          />
        </div>
        <div className="about__left">
          <h1 id="about">Hello 👋</h1>
          <h2>I'm Lauren Strapagiel, a coder and content marketer.</h2>
        </div>
      </div>
      <div className="about__bio">
        <p>
          Most of my career was spent in journalism, with editing and reporting
          roles at <b>BuzzFeed News</b>, <b>HuffPostCanada</b>, and <b>Postmedia</b>.
        </p>
        <p>
          In 2021, I made the switch to content marketing and worked as a senior
          writer at <b>Shopify</b>.
        </p>
        <p>
          For the last two years, I've been a freelance writer, producing SEO
          blog posts for SaaS companies, case studies, and newsletters.
        </p>
        <p>
          In 2024, I completed <b>BrainStation's Software Engineering</b>{" "}
          bootcamp.
        </p>
      </div>
    </section>
  );
}

export default About;
