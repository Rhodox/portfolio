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
              A calm, driven and well-organized full-stack developer who is
              currently based in Stockholm, Sweden.
            </p>
            <p>
              I enjoy collaborating with others, solving complex problems and
              learning new things. I have a solid background in programming,
              computer science and BIM engineering, and I’m enthusiastic for
              full-stack development, GUI and music.
            </p>
            <p>
              Recent graduate from School of Applied Technology's bootcamp,
              which covered three months of intensive full-stack JavaScript
              development.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default About;
