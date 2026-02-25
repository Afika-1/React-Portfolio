

// Projects.jsx
import React, { useState } from 'react';
import './styling/projects.css';
import web from '../components/projects/mzamo.png';
import CR from '../components/projects/CR.png';
import bank from '../components/projects/bank.png';
import chat from '../components/projects/ChatApp.png';
import income from '../components/projects/SARS-Tax.png';
import simple from '../components/projects/unnamed.webp';
import weather from '../components/projects/weather.png';
import news from '../components/projects/news.png';
import todo from '../components/projects/todo.png';
import travel from '../components/projects/travel.png';
import pannel from '../components/projects/pannel3.png';
import portfolio from '../components/projects/portfolio.png';

const projects = [
  {
    id: 1,
    title: 'Corp Radio-Podcast Website',
    description: 'A business podcast platform for corporates and NPOs, featuring embedded YouTube episodes, member management, and email notifications. Built with ReactJS, Supabase, Resend, and YouTube embeds.',
    image: CR,
    tags: ['ReactJS', 'Supabase', 'Resend', 'YouTube API'],
    links: [
      { url: 'https://www.corpradio.online/#', label: 'View site' }
    ],
    color: 'yellow'
  },
  {
    id: 2,
    title: 'Travel App',
    description: 'Currently building this Travel App with React Native. It encompasses all the necessary features a user would need from finding nearby restaurants when traveling, viewing available hotels, clubs, game reserves, to car rentals.',
    image: travel,
    tags: ['React Native', 'Figma', 'Mobile'],
    links: [
      { url: 'https://www.figma.com/proto/T1vS2Nr8xA4MRuR7PQnl1u/TraVerse?node-id=101-359&t=axTqIQpWw4DPCoWZ-1', label: 'View UI' }
    ],
    color: 'yellow'
  },
  {
    id: 3,
    title: 'Admin Panel',
    description: 'Management Panel UI for the Travel App depicting main features and information the Admin would have access to while keeping the same aesthetic.',
    image: pannel,
    tags: ['Figma', 'UI Design', 'Dashboard'],
    links: [
      { url: 'https://www.figma.com/proto/eIlqyYN9iaCPHjlFRqkd78/TraVerse-Mgt-Pannel?node-id=209-346&t=7oK0EsGRsP0RhPwe-1', label: 'View UI' }
    ],
    color: 'yellow'
  },
  {
    id: 4,
    title: 'School Website',
    description: 'Designed and developed a website for the school to improve their online presence using HTML, CSS and JavaScript.',
    image: web,
    tags: ['HTML', 'CSS', 'JavaScript'],
    links: [
      { url: 'https://monumental-bombolone-4c47a2.netlify.app/', label: 'View Web' }
    ],
    color: 'yellow'
  },
  {
    id: 5,
    title: 'Mobile Banking App',
    description: 'Mobile Banking System app created using TKinter Python library. Creates accounts and allows transactions while recording data.',
    image: bank,
    tags: ['Python', 'TKinter', 'Desktop App'],
    links: [
      { url: 'https://github.com/Afika-1/Bank-App--Final', label: 'View Code' },
      { url: 'https://youtu.be/b-po0DZ2fq8', label: 'Watch Demo', isDemo: true }
    ],
    color: 'maroon'
  },
  {
    id: 6,
    title: 'Weather App',
    description: 'Shows current weather of requested regions. Built with HTML, CSS, JavaScript and OpenWeatherMap API.',
    image: weather,
    tags: ['HTML', 'CSS', 'JavaScript', 'API'],
    links: [
      { url: 'https://weather-app-f4.netlify.app', label: 'View Web' }
    ],
    color: 'yellow'
  },
  {
    id: 7,
    title: 'To-Do-List',
    description: 'User-friendly productivity tool with drag-and-drop functionality to manage tasks efficiently. Built using ReactJS.',
    image: todo,
    tags: ['React', 'JavaScript', 'CSS'],
    links: [
      { url: 'https://projectto-do-list.netlify.app/', label: 'View App' }
    ],
    color: 'blue'
  },
  {
    id: 8,
    title: 'News Magazine',
    description: 'Built using React JS, Bootstrap and News API to broadcast top news headlines with category search functionality.',
    image: news,
    tags: ['React', 'Bootstrap', 'API'],
    links: [
      { url: 'https://github.com/Afika-1/news-magazine', label: 'View Code' }
    ],
    color: 'blue'
  },
  {
    id: 9,
    title: 'Alternative Portfolio',
    description: 'Alternative portfolio design created on Figma with interactive prototype.',
    image: portfolio,
    tags: ['Figma', 'UI Design'],
    links: [
      { url: 'https://www.figma.com/proto/tQ2dw3Ng8GbmoKjCwKnEdI/Portfolio?node-id=580-79&t=YHDY0xd4GoWNgAq9-1', label: 'View UI' }
    ],
    color: 'yellow'
  },
  {
    id: 10,
    title: 'Chat Application',
    description: 'Real-time chat app using ReactJS, NodeJS and Socket.IO. Users can create rooms and exchange messages with timestamps.',
    image: chat,
    tags: ['React', 'Node.js', 'Socket.IO'],
    links: [
      { url: 'https://github.com/Afika-1/Chat-App', label: 'View Code' }
    ],
    color: 'yellow'
  },
  {
    id: 11,
    title: 'Tax Calculator',
    description: 'Calculate annual income tax based on selected bracket. Displays annual and monthly tax obligations. Built with Java.',
    image: income,
    tags: ['Java'],
    links: [
      { url: 'https://github.com/Afika-1/Tax-Calculator', label: 'View Code' }
    ],
    color: 'blue'
  },
  {
    id: 12,
    title: 'Financial Calculator',
    description: 'Calculate investments (simple/compound) and house bonds using TKinter Python library.',
    image: simple,
    tags: ['Python', 'TKinter'],
    links: [
      { url: 'https://github.com/Afika-1/Banking-System-App', label: 'View Code' }
    ],
    color: 'purple'
  }
];

export default function Projects() {
  const [filter, setFilter] = useState('all');
  
  const categories = ['all', 'React', 'Python', 'Figma', 'Mobile'];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.tags.some(tag => tag.toLowerCase().includes(filter.toLowerCase())));

  return (
    <div className='projects' id='projects'>
      <div id="line"><p className="line"></p></div>

      <div className='contact-title'>
        <h1 className="text-wrapper">My <span className="text-wrapper-2">Projects</span></h1>
        <p className="projects-subtitle">A collection of my work spanning web development, mobile apps, and UI/UX design</p>
      </div>

      {/* Filter Buttons */}
      <div className="filter-container">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`filter-btn ${filter === category ? 'active' : ''}`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className='project-content'>
        <div className='projects-grid'>
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card ${index % 2 === 1 ? 'reverse' : ''}`}
            >
              <div className='project-image-container'>
                <a href={project.links[0].url} target='_blank' rel='noopener noreferrer'>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className={`project-img bounce color-${project.color}`}
                  />
                </a>
              </div>
              
              <div className='project-details'>
                <h2 className='project-title'>{project.title}</h2>
                <p className='project-description'>{project.description}</p>
                
                <div className='project-tags'>
                  {project.tags.map((tag, i) => (
                    <span key={i} className='tag'>{tag}</span>
                  ))}
                </div>
                
                <div className='project-links'>
                  {project.links.map((link, i) => (
                    <a 
                      key={i} 
                      href={link.url} 
                      target='_blank' 
                      rel='noopener noreferrer'
                    >
                      <button className={link.isDemo ? 'demo' : ''}>
                        {link.label}
                      </button>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {filteredProjects.length === 0 && (
        <div className='no-results'>
          <p>No projects found in this category.</p>
        </div>
      )}
    </div>
  );
}