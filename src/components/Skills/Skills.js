import "./Skills.css";
import { SkillData } from "./skillData";

function Skills() {
  const printSkills = () => {
    const data = SkillData.map((item, index) => {
      return (
        <div className="skills-prev" key={index}>
          <h2 className="skills-prev-title">{item.title}</h2>
          {printSkillContent(item.content)}
        </div>
      );
    });
    return data;
  };

  const printSkillContent = (content) => {
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
      <div className="skills-prev-container">
      {printSkills()}
      </div>
    </section>
  );
}

export default Skills;
