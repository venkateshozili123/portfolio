import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with cart, checkout, and Stripe payment integration. Built with React and Node.js.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'Full Stack',
      color: '#7c3aed',
      github: '#',
      live: '#',
    },
    {
      title: 'Task Management App',
      description: 'A beautiful Kanban-style task manager with drag-and-drop, real-time updates, and team collaboration features.',
      tags: ['React', 'Firebase', 'CSS'],
      category: 'Frontend',
      color: '#06b6d4',
      github: '#',
      live: '#',
    },
    {
      title: 'Weather Dashboard',
      description: 'A dynamic weather app with 7-day forecasts, location search, and stunning visual weather animations.',
      tags: ['JavaScript', 'API', 'CSS'],
      category: 'Frontend',
      color: '#f59e0b',
      github: '#',
      live: '#',
    },
    {
      title: 'Portfolio Website',
      description: 'This very portfolio! A modern, glassmorphic, and responsive personal website built with React.',
      tags: ['React', 'CSS', 'Responsive'],
      category: 'Frontend',
      color: '#ec4899',
      github: '#',
      live: '#',
    },
    {
      title: 'Chat Application',
      description: 'Real-time messaging app with group chats, emoji support, file sharing, and online status indicators.',
      tags: ['React', 'Socket.io', 'Node.js'],
      category: 'Full Stack',
      color: '#22c55e',
      github: '#',
      live: '#',
    },
    {
      title: 'Blog Platform',
      description: 'A content management system with rich text editing, categories, comment system, and SEO optimization.',
      tags: ['React', 'Express', 'MongoDB'],
      category: 'Full Stack',
      color: '#8b5cf6',
      github: '#',
      live: '#',
    },
  ];

  const filters = ['All', 'Frontend', 'Full Stack'];
  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="projects__header">
          <span className="projects__label">My recent work</span>
          <h2 className="projects__title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="projects__title-line"></div>
        </div>

        <div className="projects__filters">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`projects__filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
              id={`filter-${filter.toLowerCase().replace(' ', '-')}`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {filteredProjects.map((project, index) => (
            <div className="projects__card glass" key={index}>
              <div className="projects__card-top" style={{ background: `linear-gradient(135deg, ${project.color}22, ${project.color}08)` }}>
                <div className="projects__card-color-dot" style={{ background: project.color }}></div>
                <div className="projects__card-mockup">
                  <div className="projects__mockup-bar">
                    <span></span><span></span><span></span>
                  </div>
                  <div className="projects__mockup-content">
                    <div className="projects__mockup-line" style={{ width: '60%', background: `${project.color}40` }}></div>
                    <div className="projects__mockup-line" style={{ width: '80%', background: `${project.color}30` }}></div>
                    <div className="projects__mockup-line" style={{ width: '45%', background: `${project.color}20` }}></div>
                    <div className="projects__mockup-block" style={{ background: `${project.color}15` }}></div>
                  </div>
                </div>
              </div>

              <div className="projects__card-body">
                <h3 className="projects__card-title">{project.title}</h3>
                <p className="projects__card-desc">{project.description}</p>

                <div className="projects__card-tags">
                  {project.tags.map((tag, i) => (
                    <span className="projects__tag" key={i} style={{ borderColor: `${project.color}40`, color: project.color }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="projects__card-links">
                  <a href={project.github} className="projects__card-link" target="_blank" rel="noopener noreferrer">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    Code
                  </a>
                  <a href={project.live} className="projects__card-link projects__card-link--live" target="_blank" rel="noopener noreferrer">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
