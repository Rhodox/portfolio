import { useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import Aos from "aos";
import { ExperienceData } from "./expData";

import "./Experience.css";
import "aos/dist/aos.css";
import "react-vertical-timeline-component/style.min.css";

function Experience({ reference }) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  return (
    <section
      ref={reference}
      className="exp-container paragraph"
      id="experience"
    >
      <div className="exp-header title">
        <h2>EDUCATION</h2>
        <h2>&</h2>
        <h2>EXPERIENCE</h2>
      </div>
      <VerticalTimeline className="exp-prev-container">
        {ExperienceData.map((item, index) => {
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
              <h4 className="vertical-timeline-element-title">{item.title}</h4>
              <h4 className="vertical-timeline-element-location">
                {item.location}
              </h4>
              <p className="vertical-timeline-element-description">
                {item.description}
              </p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </section>
  );
}

export default Experience;
