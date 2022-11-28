import React from "react";
import gitHub from "../components/assets/githublogo.png"
import linkedIn from "../components/assets/linkedInlogo.png"
import stackOverflow from "../components/assets/soLogo.png"

function Footer() {
    return (
        <footer>
            <ul className="footer" id="footer">
                <li><a className="gitHub" href="https://github.com/gabeab34" target="_blank"><img id ="githubFooter" src = { gitHub }/></a></li>
                <li><a className="linkedIn" href="https://www.linkedin.com/in/gabriel-adams-bogar-2481aa99/" target="_blank" ><img id ="linkedInFooter" src = { linkedIn }/></a></li>
                {/* <li><a className="stackOverflow" href="https://stackoverflow.com/users/18819381/gabeab34" target="_blank" ><img id ="soFooter" src = { stackOverflow }/></a></li> */}
            </ul>
        </footer>
    )
};


export default Footer;