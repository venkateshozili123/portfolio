import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: '🎨',
      skills: [
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
        { name: 'JavaScript', level: 88 },
        { name: 'React.js', level: 85 },
        { name: 'Responsive Design', level: 92 },
      ],
    },
    {
      title: 'Backend',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 78 },
        { name: 'Python', level: 75 },
        { name: 'RESTful APIs', level: 82 },
        { name: 'MongoDB', level: 76 },
      ],
    },
    {
      title: 'Tools & Others',
      icon: '🛠️',
      skills: [
        { name: 'Git & GitHub', level: 88 },
        { name: 'VS Code', level: 92 },
        { name: 'Figma', level: 70 },
        { name: 'npm / Yarn', level: 85 },
        { name: 'Deployment', level: 75 },
      ],
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="skills__header">
          <span className="skills__label">What I work with</span>
          <h2 className="skills__title">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="skills__title-line"></div>
        </div>

        <div className="skills__grid">
          {skillCategories.map((category, catIndex) => (
            <div className="skills__category glass" key={catIndex}>
              <div className="skills__category-header">
                <span className="skills__category-icon">{category.icon}</span>
                <h3 className="skills__category-title">{category.title}</h3>
              </div>
              <div className="skills__list">
                {category.skills.map((skill, skillIndex) => (
                  <div className="skills__item" key={skillIndex}>
                    <div className="skills__item-info">
                      <span className="skills__item-name">{skill.name}</span>
                      <span className="skills__item-percent">{skill.level}%</span>
                    </div>
                    <div className="skills__bar">
                      <div
                        className="skills__bar-fill"
                        style={{
                          '--fill-width': `${skill.level}%`,
                          animationDelay: `${catIndex * 0.2 + skillIndex * 0.1}s`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
