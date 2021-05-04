import React from 'react';
import '../Header/Header.css';
import Typed from 'react-typed';

const Header = () => {
    return (
        <div className="header-wrapper">
            <canvas></canvas>
           <div className="main-info">
               <h1>Alicia Qiu's Portfolio</h1>
               <Typed 
               className="typed-text"
               strings={["Web Design", "Web Development", "Node"]}
               typeSpeed={40}
               backSpeed={60}
               loop
                   />
           </div>
        </div>
    )
}

export default Header
