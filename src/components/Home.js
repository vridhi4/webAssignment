import React from 'react';
import { useRef } from 'react';

import "../Styles/home.css"

export default function Home() {




    const displayRef = useRef(null);

    const handleButtonClick = () => {
        displayRef.current.textContent = 'Thank you for your interest in our company!';
      };
 

      return(
        <div className='homeContainer'>
            <div className='homeWrapper'>

                    <div className='homeHeading'>
                       <h3>Welcome to Our Website</h3>
                    </div>
                    <div className='homeSubheading'>
                         Learn more about our company and services
                    </div>
                    <div className='clickButtonDiv'>
                    <button className="clickButton" onClick={handleButtonClick}>Click</button>
                    </div>
                    
                    <div className="afterButtonText" ref={displayRef}></div>
            </div>

            
        </div>
      );
}





