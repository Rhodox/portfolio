import "./Project.css";
import { ProjectData } from "./projData.js";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import * as RiIcons from "react-icons/ri";

import "react-vertical-timeline-component/style.min.css";

function Proj() {
  return (
    <section className="proj-container paragraph" id="projects">
      <header className="proj-header title">
        <h1>MY</h1>
        <h1>PROJECTS</h1>
      </header>
      <VerticalTimeline className="proj-preview-container">
        {ProjectData.map((item, index) => {
          return (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element"
              contentStyle={{
                background: "var(--lighter-bg)",
                color: "var(--main-bg-color)",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  var(--lighter-bg)",
              }}
              date={item.period}
              dateClassName="vertical-timeline-element-date"
              iconStyle={{ background: "var(--main-bg-color)", color: "#fff" }}
              icon={item.icon}
            >
              <h2 className="proj-prev-header">{item.title}</h2>
              <h3 className="proj-prev-date">{item.date}</h3>
              <p>[IMAGE]</p>
              <p className="proj-prev-description">{item.description}</p>
              <h3 className="proj-prev-tech-header">Tech used</h3>
              <p className="proj-prev-tech">{item.techUsed}</p>
              <hr />
              <a href={item.gHub}>
                <RiIcons.RiGithubFill />
              </a>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </section>
  );
}

export default Proj;
