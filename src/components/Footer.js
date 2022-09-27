import React from "react";
import gitHub from "../components/assets/githublogo.png"
import linkedIn from "../components/assets/linkedInlogo.png"


function Footer() {
    return (
        <footer>
            <ul className="footer" id="footer">
                <li><a className="gitHub" href="https://github.com/gabeab34" target="_blank"><img id ="githubFooter" src = { gitHub }/></a></li>
                <li><a className="linkedIn" href="https://www.linkedin.com/in/gabeab34/" target="_blank" ><img id ="linkedInFooter" src = { linkedIn }/></a></li>
                
            </ul>
        </footer>
    )
};


export default Footer;