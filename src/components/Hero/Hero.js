import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const titles = ['Full Stack Developer', 'React Enthusiast', 'Problem Solver', 'Tech Explorer'];
    const currentTitle = titles[titleIndex];
    let timeout;

    if (!isDeleting && charIndex <= currentTitle.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentTitle.slice(0, charIndex));
        setCharIndex(charIndex + 1);
      }, 80);
    } else if (!isDeleting && charIndex > currentTitle.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentTitle.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 40);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, titleIndex]);

  return (
    <section className="hero" id="home">
      {/* Animated background particles */}
      <div className="hero__particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="hero__particle" style={{
            '--x': `${Math.random() * 100}%`,
            '--y': `${Math.random() * 100}%`,
            '--duration': `${3 + Math.random() * 7}s`,
            '--delay': `${Math.random() * 5}s`,
            '--size': `${2 + Math.random() * 4}px`,
          }}></div>
        ))}
      </div>

      {/* Gradient orbs */}
      <div className="hero__orb hero__orb--purple"></div>
      <div className="hero__orb hero__orb--cyan"></div>

      <div className="hero__container container">
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot"></span>
            Available for work
          </div>

          <h1 className="hero__title">
            Hi, I'm <span className="gradient-text">Ozili Venkatesh</span>
          </h1>

          <div className="hero__typewriter">
            <span className="hero__typed-text">{displayText}</span>
            <span className="hero__cursor">|</span>
          </div>

          <p className="hero__description">
            I craft elegant, performant web applications with modern technologies. 
            Passionate about transforming ideas into beautiful digital experiences 
            that leave a lasting impression.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="hero__btn hero__btn--primary" onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              <span>View My Work</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="#contact" className="hero__btn hero__btn--secondary" onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              <span>Get In Touch</span>
            </a>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-number">10+</span>
              <span className="hero__stat-label">Projects</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-number">2+</span>
              <span className="hero__stat-label">Years Exp</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-number">5+</span>
              <span className="hero__stat-label">Technologies</span>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__image-wrapper">
            <div className="hero__image-border"></div>
            <img src="/profile.jpg" alt="Ozili Venkatesh - Developer" className="hero__image" />
            <div className="hero__image-glow"></div>
          </div>

          {/* Floating tech badges */}
          <div className="hero__float-badge hero__float-badge--react" title="React">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="#61DAFB">
              <circle cx="12" cy="12" r="2.05"></circle>
              <path fill="none" stroke="#61DAFB" strokeWidth="1" d="M12 21.5c-3.2 0-6-1-7.5-2.5C3 17.5 2.5 15.5 3.5 13.5 4 12.5 5 11.5 6.5 10.5c1.5-1 3.5-2 5.5-2 2 0 4 1 5.5 2 1.5 1 2.5 2 3 3 1 2 .5 4-1 5.5C18 20.5 15.2 21.5 12 21.5z"></path>
            </svg>
          </div>
          <div className="hero__float-badge hero__float-badge--js" title="JavaScript">
            <span style={{ fontWeight: 700, color: '#000', fontSize: '14px' }}>JS</span>
          </div>
          <div className="hero__float-badge hero__float-badge--node" title="Node.js">
            <span style={{ fontWeight: 700, color: '#fff', fontSize: '12px' }}>N</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll-indicator">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel"></div>
        </div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;
