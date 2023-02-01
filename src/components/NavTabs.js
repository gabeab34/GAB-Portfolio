import React from 'react';
import gitHub from "../components/assets/githublogo.png"
import linkedIn from "../components/assets/linkedInlogo.png"
import stackOverflow from "../components/assets/soLogo.png"


function NavTabs({ currentPage, handlePageChange }) {
  return (
 <ul className="nav nav-tabs">
  <li><a className="gitHub" href="https://github.com/gabeab34" target="_blank"><img id ="githubFooter" src = { gitHub }/></a></li>
                <li><a className="linkedIn" href="https://www.linkedin.com/in/gabeab34/" target="_blank" ><img id ="linkedInFooter" src = { linkedIn }/></a></li>
                {/* <li><a className="stackOverflow" href="https://stackoverflow.com/users/18819381/gabeab34" target="_blank" ><img id ="soFooter" src = { stackOverflow }/></a></li> */}
  <div id ='myName'>
  <h1>Gabriel Adams Bogar</h1></div>
        <li className="nav-item">
          <a
            href="#About Me"
            onClick={() => handlePageChange('AboutMe')}

            className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
          >
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Portfolio"
            onClick={() => handlePageChange('Portfolio')}

            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Web
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Video"
            onClick={() => handlePageChange('Video')}
            className={currentPage === 'Video' ? 'nav-link active' : 'nav-link'}
          >
            Video
          </a>
        </li>
        
            
      </ul>
  );
}

export default NavTabs;
