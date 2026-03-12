import React from 'react';
import './About.css';

const About = () => {
  const experiences = [
    {
      icon: '🎓',
      title: 'Education',
      description: 'Pursuing a degree in Computer Science with a passion for web technologies and software engineering.',
    },
    {
      icon: '💻',
      title: 'Development',
      description: 'Building full-stack web applications using React, Node.js, and modern frameworks with clean, maintainable code.',
    },
    {
      icon: '🚀',
      title: 'Innovation',
      description: 'Always exploring emerging technologies and best practices to deliver cutting-edge digital solutions.',
    },
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__header">
          <span className="about__label">Get to know me</span>
          <h2 className="about__title">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="about__title-line"></div>
        </div>

        <div className="about__grid">
          <div className="about__text-content">
            <p className="about__intro">
              Hello! I'm <strong>Ozili Venkatesh</strong>, a passionate Full Stack Developer 
              based in India. I love creating beautiful, functional, and user-centered 
              digital experiences.
            </p>
            <p className="about__detail">
              With a strong foundation in both frontend and backend technologies, I 
              specialize in building responsive web applications that not only look 
              stunning but also perform flawlessly. My journey in tech started with 
              curiosity and has grown into a deep commitment to crafting impactful software.
            </p>
            <p className="about__detail">
              When I'm not coding, you'll find me exploring new technologies, 
              contributing to open-source projects, or diving into design trends 
              to sharpen my creative eye.
            </p>

            <div className="about__info-grid">
              <div className="about__info-item">
                <span className="about__info-label">Name</span>
                <span className="about__info-value">Ozili Venkatesh</span>
              </div>
              <div className="about__info-item">
                <span className="about__info-label">Email</span>
                <span className="about__info-value">venkateshozili186@gmail.com</span>
              </div>
              <div className="about__info-item">
                <span className="about__info-label">Location</span>
                <span className="about__info-value">India</span>
              </div>
              <div className="about__info-item">
                <span className="about__info-label">Availability</span>
                <span className="about__info-value about__info-value--green">Open to work</span>
              </div>
            </div>
          </div>

          <div className="about__cards">
            {experiences.map((exp, index) => (
              <div className="about__card glass" key={index} style={{ animationDelay: `${index * 0.15}s` }}>
                <span className="about__card-icon">{exp.icon}</span>
                <h3 className="about__card-title">{exp.title}</h3>
                <p className="about__card-desc">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
