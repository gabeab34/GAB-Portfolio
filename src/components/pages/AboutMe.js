import React from 'react';
import myPic from '../assets/GAB.jpg'

export default function AboutMe() {
  return (
    <div id = 'bg'>
       <img id = "myPic" src= {myPic} alt= "Me" /> 
        <div id= "aboutMe">
            <ul>
            <h2>Hello and welcome to my multimedia portfolio!</h2> 
            <p>My name is Gabriel Adams Bogar and I'm a full-stack developer with previous experience in the event industry interfacing directly with clients and 
            making sure their expectations become reality.</p> 
            <li>Very experienced working with strict deadlines and under pressure, as well as working with others that have ideas 
            and skills that fall outside my purview.</li> 
            <li>Completed and received a certificate from the bootcamp coding program through Georgia Tech that was centered on web design 
            using the MERN stack.</li> 
            <li>Focused on front-end development that is intuitive and easy to use for a variety of users of different technological proficiencies.</li> 
            <li>Looking to work on a team of designers and programmers that know how to leverage their strengths and weaknesses in a collaborative fashion to create interesting and intuitive applications.</li> 
            <p>Click on the GitHub and LinkedIn buttons on the upper left
            to view my profiles on those sites, or click on either my web or video portfolio to view projects that I've previously worked on.</p>
           </ul>
          </div>
    </div>
  );
}
