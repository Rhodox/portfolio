import "./Skills.css";
import { SkillData } from "./skillData";

function Skills() {
  const printSkillTitle = () => {
    const data = SkillData.map((item, index) => {
      return (
        <div className="skills-prev" key={index}>
          <h2 className="skills-prev-title">{item.title}</h2>
          {printContent(item.content)}
        </div>
      );
    });
    return data;
  };

  const printContent = (content) => {
    const data = content.map((skill, i) => {
      return (
        <div key={i} className="skills-prev-content">
          <figure className="skill-prev-icon">{skill.icon}</figure>
          <figcaption className="skill-prev-caption">{skill.name}</figcaption>
        </div>
      );
    });
    return data;
  };

  return (
    <section className="skills-container paragraph" id="skills">
      <h1 className="skills-header title">SKILLS</h1>
      {printSkillTitle()}
    </section>
  );
}

export default Skills;
