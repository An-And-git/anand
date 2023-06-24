import React from 'react';
import '../components-styles/footer.css';

const Footer = () =>{
    return(
        <div id='footer' className='container-fluid'>
            <div className='container footer'>
                <p>Copyright &#169; 2023. All rights are reserved.</p>
                <h3>Designed & Developed by <span>AnAnd</span> using <span>React</span></h3>
            </div>
        </div>
    )
}

export default Footer;