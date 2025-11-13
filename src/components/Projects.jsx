// import React from 'react'
// import './styling/projects.css'
// import web from '../components/projects/mzamo.png'
// import bank from '../components/projects/bank.png'
// import chat from '../components/projects/ChatApp.png'
// import income from '../components/projects/SARS-Tax.png'
// import simple from '../components/projects/unnamed.webp'
// import weather from '../components/projects/weather.png'
// import news from '../components/projects/news.png'
// import todo from '../components/projects/todo.png'
// import travel from '../components/projects/travel.png'
// import pannel from '../components/projects/pannel3.png'
// import portfolio from '../components/projects/portfolio.png'

// export default function Projects() {


//     const imageToAnimate = document.getElementById('imageToAnimate');

//     function toggleImageColor() {
//         if (imageToAnimate.classList.contains('normal-color')) {
//             imageToAnimate.classList.remove('normal-color');
//             imageToAnimate.classList.add('black-white');
//         } else {
//             imageToAnimate.classList.remove('black-white');
//             imageToAnimate.classList.add('normal-color');
//         }
//     }

//     setInterval(toggleImageColor, 3000);



//     return (
//         <div className='projects' id='projects'>
//             <div id="line"><p className="line"></p></div>

//             <div className='contact-title'>
//                 <h1 className="text-wrapper">My <span className="text-wrapper-2">Projects</span></h1>
//             </div>

//             <div className='project-content'>



//                 <div className='image-descr'>

//                     <div className='description-icons'>
//                         <div className='project-image' id='mzamo'><a href='https://www.figma.com/proto/T1vS2Nr8xA4MRuR7PQnl1u/TraVerse?node-id=101-359&t=axTqIQpWw4DPCoWZ-1' target='_blank'><img src={travel} className='bounce' /></a></div>
//                         <div className='description'>
//                             <h2>Travel App</h2>
//                             <p>Currently building this Travel App with React Native. It encompasses all the necessary features a user would need from finding nearby restuarants when traveling, viewing available hotels, clubs, game reserves, to car rentals. I designed the UI on Figma.</p>
//                             <a href="https://www.figma.com/proto/T1vS2Nr8xA4MRuR7PQnl1u/TraVerse?node-id=101-359&t=axTqIQpWw4DPCoWZ-1" target='_blank' >
//                             <button>View UI</button></a>
//                         </div>
//                     </div>
//                     <div className='description-icons' id='description-icons'>
//                         <div className='project-image' id='mzamo'><a href='https://www.figma.com/proto/eIlqyYN9iaCPHjlFRqkd78/TraVerse-Mgt-Pannel?node-id=209-346&t=7oK0EsGRsP0RhPwe-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1' target='_blank'><img src={pannel} className='bounce' /></a></div>
//                         <div className='description'>
//                             <h2>Admin Pannel</h2>
//                             <p>I designed the Management Pannel UI for the Travel App depicting how it would look like, what main features it would have, and what information/ features would the Admin have accesss to while keeping the same esthetic as the Travel App.</p>
//                             <a href="https://www.figma.com/proto/eIlqyYN9iaCPHjlFRqkd78/TraVerse-Mgt-Pannel?node-id=209-346&t=7oK0EsGRsP0RhPwe-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1" target='_blank' >
//                             <button>View UI</button></a>
//                         </div>
//                     </div>
//                     <div className='description-icons'>
//                         <div className='project-image' id='mzamo'><a href='https://monumental-bombolone-4c47a2.netlify.app/' target='_blank'><img src={web} className='bounce' /></a></div>
//                         <div className='description'>
//                             <h2>School Website</h2>
//                             <p>The task was to desighn and develop a website for the school to improve their online presence. We used HTML, CSS and JavaScript tools to achieve this</p>
//                             <a href="https://monumental-bombolone-4c47a2.netlify.app/" target='_blank' ><button>View Web</button></a>
//                         </div>
//                     </div>

//                     <div className='description-icons' id='description-icons'>
//                         <div className='project-image' id='bank' ><a href='https://github.com/Afika-1/Bank-App--Final' target='_blank'><img src={bank} className='bounce' /></a></div>

//                         <div className='description'>
//                             <h2>Mobile Banking App</h2>
//                             <p className='para'>Here is a Mobile Banking System app. This was created using the TKinter Python library. The App can creates an account and allows account holder to make transactions while recording the data and more...See README for visuals</p>
//                             <a href='https://github.com/Afika-1/Bank-App--Final' target='_blank'><button>View Code/UI</button></a>
//                             <a href='https://youtu.be/b-po0DZ2fq8' target='_blank'><button className='demo'>Watch Demo</button></a>

//                         </div>

//                     </div>

//                     <div className='description-icons'>
//                         <div className='project-image' id='mzamo'><a href='https://weather-app-f4.netlify.app' target='_blank'><img src={weather} className='bounce' /></a></div>
//                         <div className='description'>
//                             <h2>Weather App</h2>
//                             <p>This is a weather app that shows the current weather of the requested region . The website is built with HTML, CSS, Javascript and uses OpenWeatherMap API to access the weather data and display as requested.</p>
//                             <a href="https://weather-app-f4.netlify.app" target='_blank' ><button>View Web</button></a>
//                         </div>
//                     </div>

//                     <div className='description-icons' id='description-icons'>
//                         <div className='project-image .bw-image' id='tax'><a href='https://projectto-do-list.netlify.app/' target='_blank'><img src={todo} className='bounce' /></a></div>

//                         <div className='description'>
//                             <h2>To-Do-List</h2>
//                             <p>The To Do List app is a user-friendly productivity tool designed to help you manage your tasks efficiently. With a clean and intuitive interface, 
//                                 users can easily add new tasks, edit existing ones, and delete items as needed. The app also allows for seamless rearrangement of tasks, 
//                                 enabling you to prioritize your to-dos with simple drag-and-drop functionality. It was build using ReactJS, JS, CSS.
//                                 </p>
//                             <a href='https://projectto-do-list.netlify.app/' arget='_blank'><button>Visuals</button></a>
//                         </div>

//                     </div>

//                     <div className='description-icons' >
//                         <div className='project-image .bw-image' id='tax'><a href='today-scoop-magazine.web.app' target='_blank'><img src={news} className='bounce' /></a></div>

//                         <div className='description'>
//                             <h2>News Magazine</h2>
//                             <p>This web is built using Reacj JS , Bootstrap  and News API(Dev only) to broadcast the top news headlines .. When the user clicks the read more button they're taken to the full story. 
//                                 Navigation allows to search articles for a specific category.... See README for  visuals </p>
//                             <a href='https://github.com/Afika-1/news-magazine' arget='_blank'><button>Visuals</button></a>
//                         </div>

//                     </div>

//                     <div className='description-icons' id='description-icons'>
//                         <div className='project-image' id='mzamo'> <a href='https://www.figma.com/proto/tQ2dw3Ng8GbmoKjCwKnEdI/Portfolio?node-id=580-79&t=YHDY0xd4GoWNgAq9-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1' target='_blank'><img src={portfolio} className='bounce' /></a></div>
//                         <div className='description'>
//                             <h2>Alternative Portfolio</h2>
//                             <p>This was an alternative portfolio design. I designed on Figma, you can view the prototype. </p>
//                             <a href='https://www.figma.com/proto/tQ2dw3Ng8GbmoKjCwKnEdI/Portfolio?node-id=580-79&t=YHDY0xd4GoWNgAq9-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1' target='_blank'><button>View UI</button></a>
//                         </div>
//                     </div>






//                     <div className='description-icons' >
//                         <div className='project-image' id='mzamo'> <a href='https://github.com/Afika-1/Chat-App' target='_blank'><img src={chat} className='bounce' /></a></div>
//                         <div className='description'>
//                             <h2>Chat Application</h2>
//                             <p>The chat app was created using ReactJS, NodeJS and Socket.IO.  It allows the users create a chat room and join using the created RoomID. Can successfully send and receive texts showing timestamps and sender’s name</p>
//                             <a href='https://github.com/Afika-1/Chat-App' target='_blank'><button>View Code</button></a>
//                         </div>
//                     </div>

//                     <div className='description-icons' id='description-icons'>
//                         <div className='project-image .bw-image' id='tax'><a href='https://github.com/Afika-1/Tax-Calculator' target='_blank'><img src={income} className='bounce' /></a></div>

//                         <div className='description'>
//                             <h2>Tax Calculator</h2>
//                             <p>The Tax Calculator allows the user to enter their annual income, select the tax bracket they are in and applies the accurate tax rate then displays the annual and monthly tax obligation.
//                                 I used Java to build this. </p>
//                             <a href='https://github.com/Afika-1/Tax-Calculator' arget='_blank'><button>View Code</button></a>
//                         </div>

//                     </div>

//                     <div className='description-icons' >
//                         <div className='project-image .bw-image' id='simple'> <a href='https://github.com/Afika-1/Banking-System-App' target='_blank'><img src={simple} className='bounce' /></a></div>
//                         <div className='description'>
//                             <h2>Financial Calculator</h2>
//                             <p>This application allows the user to calculate investment (simple/compound) and can also Calculate a house bond. These two are neatly showing on the app. Tkinter python library was used to build the GUI.  </p>
//                             <a href='https://github.com/Afika-1/Banking-System-App' target='_blank'><button>View Code</button></a>
//                         </div>
//                     </div>



//                 </div>
//             </div>


//         </div>
//     )
// }


// Projects.jsx
import React, { useState } from 'react';
import './styling/projects.css';
import web from '../components/projects/mzamo.png';
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
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
    id: 11,
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