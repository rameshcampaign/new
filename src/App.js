import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import DownloadButton from './DownloadButton';
import { 
  faLinkedinIn, 
  faBootstrap,
  faGithub, 
  faTwitter, 
  faFacebookF, 
  faHtml5, 
  faCss3Alt, 
  faJsSquare, 
  faReact, 
  faWordpress, 
  faNpm, 
  faLaravel 
} from '@fortawesome/free-brands-svg-icons'; 
import { faCheck, faTrophy, faDatabase } from '@fortawesome/free-solid-svg-icons'; // Import faDatabase from solid icons

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './App.css'; 


library.add(
  
  faGithub,
  faTwitter,
  faFacebookF,
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faWordpress,
  faNpm,
  faLaravel,
  faBootstrap,  
  faDatabase,   
  faCheck,
  faTrophy
);






function App() {
  return (
    <div id="page-top">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <span className="d-block d-lg-none">Ramesh Kumar</span>
          <span className="d-none d-lg-block">
            <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="assets/img/ramesh_profile.jpg" alt="..." />
          </span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#experience">Experience</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#education">Education</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#interests">Interests</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Page Content */}
      <div className="container-fluid p-0">
        {/* About Section */}
        <section className="resume-section" id="about">
          <div className="resume-section-content">
            <h1 className="mb-0">
              Ramesh
              <span className="text-primary">Kumar</span>
            </h1>
            <div className="subheading mb-5">
              <a href="">ramesh.campaign@gmail.com</a>
              <DownloadButton />
            </div>
            <p className="lead mb-5">I am a passionate PHP developer with a strong foundation in web development and a keen interest in building robust applications. My expertise lies in creating dynamic websites and applications using modern frameworks and best practices.</p>
            <div className="social-icons">
              <a className="social-icon" href="https://www.linkedin.com/in/ramesh-kumar-610a4b106/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a>
              <a className="social-icon" href="https://github.com/rameshcampaign" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
              <a className="social-icon" href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
             
            </div>
          </div>
        </section>
        <hr className="m-0" />

        {/* Experience Section */}
        <section className="resume-section" id="experience">
          <div className="resume-section-content">
            <h2 className="mb-5">Experience</h2>
            <ExperienceItem title="Senior Web Developer" company="Diamond Atelier" date="March 2023 - Present" description="In my current job, I build custom PHP applications for clients in the USA. One of my main projects helps users check diamond prices and hold diamonds for buying." />
            <ExperienceItem title="Web Developer" company="GKB Labs –Hyderabad" date="December 2020 - March 2021" description="In this company, I worked on both WordPress and Laravel. I developed products using WordPress CMS, including creating custom plugins, and also contributed to projects using Laravel for more complex web applications." />
            <ExperienceItem title="PHPDEVELOPER" company="Hash rail –parvat patia" date="July 2018 - December 2020" description="At this company, I got the opportunity to work on projects using both CodeIgniter and Laravel technologies. I contributed to an eCommerce project in CodeIgniter and worked on a Laravel project, like a community site, gaining valuable experience with both frameworks." />
            <ExperienceItem title="JUNIOR PHPDEVELOPER" company="WebDeal Services Company – Saroli" date="June 2016 - 2018" description="As a PHP developer, I designed and developed a fully functional eCommerce website using WordPress. My role involved creating a custom theme, integrating necessary plugins, and ensuring the site was optimized for performance and user experience. This project allowed me to demonstrate my expertise in PHP and WordPress development, providing a seamless shopping experience for users." />
          </div>
        </section>
        <hr className="m-0" />

        {/* Education Section */}
        <section className="resume-section" id="education">
          <div className="resume-section-content">
            <h2 className="mb-5">Education</h2>
            <EducationItem title="University Sikkim Manipal" degree="Bachelor of Information Technology" details="Computer Science - Web Development Track" date="August 2013 - May 2016"  />
            <EducationItem title="st. andrew's public higher secondary school" degree="Science Stream"   />
          </div>
        </section>
        <hr className="m-0" />

        {/* Skills Section */}
        <section className="resume-section" id="skills">
          <div className="resume-section-content">
            <h2 className="mb-5">Skills</h2>
            <div className="subheading mb-3">Technical Skills</div>
            <ul className="list-inline dev-icons">
              <li className="list-inline-item"><FontAwesomeIcon icon={faHtml5} /></li>
              <li className="list-inline-item"><FontAwesomeIcon icon={faBootstrap} /></li>
              <li className="list-inline-item"><FontAwesomeIcon icon={faCss3Alt} /></li>
              <li className="list-inline-item"><FontAwesomeIcon icon={faJsSquare} /></li>
              <li className="list-inline-item"><FontAwesomeIcon icon={faLaravel} /></li>
              <li className="list-inline-item"><FontAwesomeIcon icon={faWordpress} /></li>
              <li className="list-inline-item"><FontAwesomeIcon icon={faDatabase} /></li>
              <li className="list-inline-item"><FontAwesomeIcon icon={faReact} /></li>
              <li className="list-inline-item"><FontAwesomeIcon icon={faGithub} /></li>
              <li className="list-inline-item"><FontAwesomeIcon icon={faNpm} /></li>
               
            </ul>

            <div className="subheading mb-3">Workflow</div>
            <ul className="fa-ul mb-0">
            
            <li><span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span> Affordable Prices</li>
            <li><span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span> Quality Product </li>
              <li><span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span> Mobile-First, Responsive Design</li>
              <li><span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span> Cross Browser Testing & Debugging</li>
              <li><span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span> Agile Development</li>
            </ul>
          </div>
        </section>
        <hr className="m-0" />

        {/* Interests Section */}
        <section className="resume-section" id="interests">
          <div className="resume-section-content">
            <h2 className="mb-5">Interests</h2>
            <p>I love coding and want to become a great Full-Stack Developer. I enjoy taking on new challenges that help me learn and improve my skills. Besides coding, I also like to roam and explore new places, which gives me fresh ideas for solving problems. I’m excited to use my skills to help your business grow and reach its goals.</p>
          </div>
        </section>
        <hr className="m-0" />

       
        <section id="contact" class="py-5">
  <div class="container">
    <h2 class="text-center mb-4">Contact Me</h2>
    <p class="text-center mb-5">
      If you have any questions, feedback, or just want to say hello, feel free to reach out!
    </p>
    <p class="text-center">
      You can email me at: <a href="mailto:name@email.com">ramesh.campaign@gmail.com</a> <br />
      Call me at: 9328520310
    </p>
  </div>
</section>

        <hr className="m-0" />
      </div>
    </div>
  );
}


function ExperienceItem({ title, company, date, description }) {
  return (
    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
      <div className="flex-grow-1">
        <h3 className="mb-0">{title}</h3>
        <div className="subheading mb-3">{company}</div>
        <p>{description}</p>
      </div>
      <div className="flex-shrink-0"><span className="text-primary">{date}</span></div>
    </div>
  );
}


function EducationItem({ title, degree, date, gpa }) {
  return (
    <div className="d-flex flex-column flex-md-row justify-content-between mb-3">
      <div className="flex-grow-1">
        <h3 className="mb-0">{title}</h3>
        <div className="subheading mb-3">{degree}</div>
        <div>{gpa}</div>
      </div>
      <div className="flex-shrink-0"><span className="text-primary">{date}</span></div>
    </div>
  );
}

export default App;
