import 'react-tooltip/dist/react-tooltip';
import './App.css';

// Components
import Navigation from './components/navigation';
import HomeContact from './components/homecontact';
import HomeSocial from './components/homesocial';
import Footer from './components/footer';
import { Fragment } from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaExternalLinkAlt, FaMapMarkedAlt, FaEnvelopeOpenText, FaPhoneSquareAlt, FaRegHandPointDown, FaPalette, FaMountain, FaLaptopCode } from "react-icons/fa";

// Images
import Html from './images/skills/html.png';
import React from './images/skills/react.png';
import Css from './images/skills/css.png';
import Js from './images/skills/js.png';
import Ps from './images/skills/ps.png';
import Ai from './images/skills/ai.png';
import Xd from './images/skills/xd.png';
import Sass from './images/skills/sass.png';
import Bs from './images/skills/bs.png';

import Vs from './images/skills/vs.png';
import GitHub from './images/skills/github.png';
import Npm from './images/skills/npm.png';
import Postman from './images/skills/postman.png';

import Movie from './images/works/movieland.png';
import Smartcart from './images/works/smartcart.png';
import Homemenu from './images/works/homemenu.png';
import Agecalc from './images/works/agecalc.png';
import Mv from './images/works/mv.png';

const works = [
  {
    "projectid": 1,
    "projectimg": Movie,
    "projectname": "MovieLand - Movie explorer website",
    "projecttools": "React JS, Bootstrap, HTML, CSS, Javascript & Tailwind CSS",
    "projectdes": "By applying my proficiency in React JS and React State concepts, I developed an engaging that enables users to discover their favorite movies, watch trailers, and add them to a personalized wishlist. Through my expertise in web development, I ensured that the website was responsive, visually appealing, and easy to use.",
    "projectdemo": "https://anandmovieland.netlify.app/"
  },
  {
    "projectid": 2,
    "projectimg": Agecalc,
    "projectname": "Age Calculator",
    "projecttools": "React JS, Bootstrap, HTML, CSS & Javascript",
    "projectdes": "Here is my simple Age Calculator App built using React JS and its powerful state properties! 🚀💻. With just a few clicks, you can effortlessly determine your age in years, months, and days. 🌞⚫ Plus, I've added a feature to enhance your user experience. You can now switch between the light mode and dark mode according to your preference.",
    "projectdemo": "https://react-age-calc.netlify.app/"
  },
  {
    "projectid": 3,
    "projectimg": Smartcart,
    "projectname": "SmartCart",
    "projecttools": "React JS, Python, Django, HTML, CSS & Javascript",
    "projectdes": "I have designed the UX & UI. Also the whole process flow along with the backend. This is a basic ecommerce website with all the necessary basic things like add to cart, products, checkout and an admin panel to add products from backend.",
    "projectdemo": ""
  },
  {
    "projectid": 4,
    "projectimg": Homemenu,
    "projectname": "HomeMenu",
    "projecttools": "HTML5, CSS3, Material Design Boostrap, Jquery & Javascript, Cordova",
    "projectdes": "I have designed the UX & UI design by preparing the layouts. It is a food ordering app, specially designed for home made foods, fruits & veggie’s, baked items and other items. It encourages the home entrepreneur to sell their products and earn an income without leaving the comfort of their homes.",
    "projectdemo": "https://play.google.com/store/apps/details?id=io.cordova.homemenu"
  },
  {
    "projectid": 5,
    "projectimg": Mv,
    "projectname": "Meet with Velu",
    "projecttools": "WordPress, HTML5, CSS3 & Bootstrap4",
    "projectdes": "I have designed the UI design in HTML and then converted to a wordpress site. The landing page is for logistics real estate fund and E-commerce growth.",
    "projectdemo": "https://meetwithvelu.com/"
  },
  
]

const experience = [{
  "expid": 1,
  "companyname": "Verticurl (A WPP Company)",
  "designation": "Engineer Technology (2021 - 2023)",
  "location": "Coimbatore, India"
},
{
  "expid": 2,
  "companyname": "Cap DigiSoft Solutions",
  "designation": "Web Designer (2018 - 2021)",
  "location": "Coimbatore, India"
},
{
  "expid": 3,
  "companyname": "LookHear Creations",
  "designation": "Web Designer - Intern (2018)",
  "location": "Bangalore, India"
}
]

const Tskills = [{
  "skillid": 1,
  "image": React,
  "name": "React JS",
  "color": "rgb(9 215 254 / 25%)"
},
{
  "skillid": 2,
  "image": Html,
  "name": "HTML",
  "color": "rgb(234 89 39 / 25%)"
},
{
  "skillid": 3,
  "image": Css,
  "name": "CSS",
  "color": "rgb(2 118 189 / 25%)"
},
{
  "skillid": 4,
  "image": Js,
  "name": "Javascript",
  "color": "rgb(228 161 38 / 28%)"
},
{
  "skillid": 5,
  "image": Bs,
  "name": "Bootstrap",
  "color": "rgb(110 16 244 / 25%)"
},
{
  "skillid": 6,
  "image": Sass,
  "name": "Sass",
  "color": "rgb(206 102 152 / 25%)"
}
]

const uxskills = [{
  "skillid": 1,
  "image": Ps,
  "name": "Photoshop",
  "color": "rgb(61 195 251 / 25%)"
},
{
  "skillid": 2,
  "image": Ai,
  "name": "Illustrator",
  "color": "rgb(254 114 27 / 25%)"
},
{
  "skillid": 3,
  "image": Xd,
  "name": "Xd",
  "color": "rgb(255 97 246 / 25%)"
}
]

const tools = [{
  "toolid": 1,
  "image": Vs,
  "name": "VS Code",
  "color": "rgb(31 156 240 / 25%)"
},
{
  "toolid": 2,
  "image": GitHub,
  "name": "GitHub",
  "color": "rgb(0 0 0 / 25%)"
},
{
  "toolid": 3,
  "image": Npm,
  "name": "Npm",
  "color": "rgb(202 54 53 / 25%)"
},
{
  "toolid": 4,
  "image": Postman,
  "name": "Postman",
  "color": "rgb(238 109 63 / 25%)"
}
]

const contact = [{
  "contactid": 1,
  "name": "Location",
  "value": "Coimbatore, Tamil Nadu, India",
  "url": "https://goo.gl/maps/7tkRH12TFX9s9jgKA",
  "icon": <FaMapMarkedAlt/>
},
{
  "contactid": 2,
  "name": "Mail",
  "value": "anandhprabhu88@gmail.com",
  "url": "mailto:anandhprabhu88@gmail.com",
  "icon": <FaEnvelopeOpenText/>
},
{
"contactid": 3,
"name": "Phone",
"value": "+91 88834 30055",
"url":"tel:8883430055",
"icon": <FaPhoneSquareAlt/>
},
]

function App() {
  return (
    <Fragment>
        <div id="home" className='container-fluid h-100 root ptb-60'>
          <div className='row h-100'>
            <div className='col-md-1 col-12 my-auto'>
              <HomeContact></HomeContact>
            </div>
            <div className='col-md-10 col-12'>
              <div className="name-box">
                  <div className='name'>
                    <span>Hi, I'm</span>
                    <h1>Anand S</h1>
                    <h2>A Passionate Front-end Web Developer based in Coimbatore, India.</h2>
                    <div className='running-box'>
                    <FaReact className='react'></FaReact><FaHtml5  className='html'></FaHtml5><FaCss3Alt  className='css'></FaCss3Alt><FaJsSquare  className='js'></FaJsSquare>
                    </div>
                  </div>
              </div>
            </div>
            <div className='col-md-1 col-12 my-auto'>
             
            </div>
          </div>
        </div>

        <div id="works" className='container experience ptb-150'>
          <div className='exper-title'>
            <h1>Works</h1>
            <p>Each project is unique piece of development  <FaLaptopCode/></p>
          </div>
          {works.map(element => (
            <div key={element.projectid}className='row project-info'>
              {element.projectid % 2 !== 0? <><div className='col-md-6 col-12 pt-0 p-4'>
                <img src={element.projectimg} alt='project image' />
              </div>
              <div className='col-md-6 col-12 pt-0 p-4 text-center'>
                <h1>{element.projectname}</h1>
                <h2>{element.projecttools}</h2>
                <p>{element.projectdes}</p>
                {element.projectdemo === ''? null : <a href={element.projectdemo} target='_blank'>Demo <FaExternalLinkAlt></FaExternalLinkAlt></a>}
              </div></> : <><div className='col-md-6 col-12 pt-0 p-4 text-center res-order'>
                <h1>{element.projectname}</h1>
                <h2>{element.projecttools}</h2>
                <p>{element.projectdes}</p>
                {element.projectdemo === ''? null : <a href={element.projectdemo} target='_blank'>Demo <FaExternalLinkAlt></FaExternalLinkAlt></a>}
              </div><div className='col-md-6 col-12 pt-0 p-4'>
                <img src={element.projectimg} alt='project image' />
              </div></>}
              
            </div>
          ))} 
        </div>

        <div id="experience" className='container experience ptb-150'>
            <div className='exper-title'>
              <h1>Experience</h1>
              <p>Companies I have worked for in the past <FaMountain/></p>
            </div>
            <div className='row exp-info'>
            {experience.map(experience =>(
                <div key={experience.expid} className='col-md-4 col-12 pb-3 expbox'>
                  <h1>0{experience.expid}</h1>
                  <h2>{experience.companyname}</h2>
                  <p>{experience.designation}</p>
                  <h4>{experience.location}</h4>
                </div>
                ))}
            </div>
        </div>

        <div id="skills" className='container experience ptb-150'>
            <div className='exper-title'>
              <h1>Skills</h1>
              <p>Knowledge gained in my career path<FaPalette/></p>
            </div>
            <div className='skillset'>
              <div className='row'>
                <div className='col-md-12 col-12 text-left pb-3'>
                  <h3>UI</h3>
                </div>
              </div>
              <div className='skillset-container'>
                {Tskills.map(skill =>(
                    <div className='pt-4 pb-4'>
                    <div style={{
                      "background-color":skill.color
                    }} className='skillset-img' data-tilt data-tilt-speed="500"
                    data-tilt-scale="1" data-tilt-max-tilt="10" data-tilt-perspective="500">
                      <img src={skill.image} alt='skills'/> 
                      <p>{skill.name}</p>
                    </div>
                  </div>
                  ))}
              </div>
            </div>

            <div className='skillset'>
              <div className='row'>
                <div className='col-md-12 col-12 text-left pb-3'>
                  <h3>UX</h3>
                </div>
              </div>
              <div className='skillset-container'>
                {uxskills.map(skill =>(
                    <div className='pt-4 pb-4'>
                    <div style={{
                      "background-color":skill.color
                    }} className='skillset-img'>
                      <img src={skill.image} alt='skills'/> 
                      <p>{skill.name}</p>
                    </div>
                  </div>
                  ))}
              </div>
            </div>
            
            <div className='skillset'>
              <div className='row'>
                <div className='col-md-12 col-12 text-left pb-3'>
                  <h3>Tools</h3>
                </div>
              </div>
              <div className='skillset-container'>
                {tools.map(tool =>(
                    <div className='pt-4 pb-4'>
                    <div style={{
                      "background-color":tool.color
                    }} className='skillset-img'>
                      <img src={tool.image} alt='skills'/> 
                      <p>{tool.name}</p>
                    </div>
                  </div>
                  ))}
              </div>
            </div>

        </div>

        <div id="contact" className='container experience ptb-150'>
          <div className='exper-title'>
            <h1>Contact</h1>
            <p>Don't be shy! Hit me up!  <FaRegHandPointDown/></p>
          </div>

          <div className='row contact-sec'>
              {contact.map(contact =>(
                  <div className='col-md-4 col-12 pt-4 pb-4'>
                    <div className='contact-box'>
                        <div className='icon'>
                          {contact.icon}
                        </div>
                        <div className='content'>
                          <h1>{contact.name}</h1>
                          <a href={contact.url} target='_blank'>{contact.value}</a>
                        </div>
                      </div>
                  </div>
                ))}
          </div>
        </div>

        <Footer></Footer>
        
        <Navigation></Navigation>
    </Fragment>
  );
}

export default App;
