import React from 'react';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  const links = ['Home', 'About', 'Skills', 'Contact'];

  return (
    <footer className="footer" id="footer">
      <div className="footer__glow"></div>
      <div className="container">
        <div className="footer__content">
          <div className="footer__brand">
            <a href="#home" className="footer__logo">
              <span className="footer__logo-bracket">&lt;</span>
              <span className="footer__logo-name">Ozili Venkatesh</span>
              <span className="footer__logo-bracket"> /&gt;</span>
            </a>
            <p className="footer__tagline">Crafting digital experiences with passion and precision.</p>
          </div>
          <div className="footer__nav">
            <h4 className="footer__nav-title">Quick Links</h4>
            <ul className="footer__nav-links">
              {links.map((l) => (
                <li key={l}><a href={`#${l.toLowerCase()}`} className="footer__nav-link">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <p className="footer__copyright">© {year} <span className="gradient-text">Ozili Venkatesh</span>. All rights reserved.</p>
          <p className="footer__made-with">Made with <span className="footer__heart">❤️</span> and React</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
