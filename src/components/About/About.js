import { React } from "react";
import closeUp from "../../images/closeUp.png";
import "./About.css";

function About() {
  return (
    <section className="about-container paragraph" id="about">
      <header className="about-header title">
        <h1>ABOUT</h1>
        <h1>ME</h1>
      </header>
      <div className="about-me-container">
        <figure className="about-picture-container">
          <img src={closeUp} className="about-picture" alt="alex_portrait" />
        </figure>

        <article className="about-text-container">
          <div className="about-title">
            <h2>Hello -</h2>
            <h2>
              I'm <span>Alex</span>.
            </h2>
          </div>

          <div className="about-para">
            <p>
              A <span>calm</span>, driven and well-organized{" "}
              <span>full-stack developer</span> who is currently based in
              Stockholm, Sweden.
            </p>
            <p>
              I enjoy <span>collaborating</span> with others,{" "}
              <span>solving complex problems</span> and learning new things. I
              have a solid <span>background in</span> <span>programming</span>,
              computer science and BIM engineering, and I’m{" "}
              <span>enthusiastic for</span>
              <span> full-stack development</span>, <span>GUI</span> and{" "}
              <span>music</span>.
            </p>
            <p>
              Recent graduate from <span>School of Applied Technology</span>'s
              bootcamp, which covered <span>three months</span> of intensive
              <span> full-stack JavaScript</span> development.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default About;
