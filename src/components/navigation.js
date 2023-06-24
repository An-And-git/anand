import React from 'react';
import '../components-styles/navigation.css';

import Works from '../images/suitcase.png';
import Skills from '../images/concept.png';
import Education from '../images/clipboard.png';
import Home from '../images/home.png';
import Contact from '../images/communicate.png';

import { Tooltip } from 'react-tooltip';

const Navigation = () =>{

    const handleHomecroll = () => {
      const element = document.getElementById('home');
      if (element) {
        // 👇 Will scroll smoothly to the top of the next section
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const handleWorkScroll = () => {
        const element = document.getElementById('works');
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

      const handleExpScroll = () => {
        const element = document.getElementById('experience');
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

      const handleSkillScroll = () => {
        const element = document.getElementById('skills');
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

      const handleContactScroll = () => {
        const element = document.getElementById('contact');
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return(
        <div className='navigation'>
            <div className='navigation-box'>
                <img src={Home} alt='Home' data-tooltip-id="experience" data-tooltip-content="Home" onClick={handleHomecroll}/>
                <Tooltip id="experience" />
            </div>
            <div className='navigation-box'>
                <img src={Works} alt='Works' data-tooltip-id="experience" data-tooltip-content="Works" onClick={handleWorkScroll}/>
                <Tooltip id="experience" />
            </div>
            <div className='navigation-box'>
                <img src={Education} alt='Experience' data-tooltip-id="works" data-tooltip-content="Experience" onClick={handleExpScroll} />
                <Tooltip id="works" />
            </div>
            <div className='navigation-box'>
                <img src={Skills} alt='Skills' data-tooltip-id="skills" data-tooltip-content="Skills" onClick={handleSkillScroll}/>
                <Tooltip id="skills" />
            </div>
            {/* <div className='navigation-box'>
                <img src={Certificate} alt='Certificate' data-tooltip-id="education" data-tooltip-content="Education!" />
                <Tooltip id="education" />
            </div> */}
            <div className='navigation-box'>
                <img src={Contact} alt='Contact' data-tooltip-id="contact" data-tooltip-content="Contact" onClick={handleContactScroll}/>
                <Tooltip id="contact" />
            </div>
        </div>
    )
}

export default Navigation;