import React from 'react';
import myPic from '../assets/GAB.jpg'

export default function AboutMe() {
  return (
    <div id = 'bg'>
       <img id = "myPic" src= {myPic} alt= "Me" /> 
        <div id= "aboutMe">
            <p>
            Hi there! My name is Gabriel Adams Bogar and I'm a full-stack developer with previous experience in the event industry interfacing directly with clients and 
            making sure their expectations become reality. Very experienced working with strict deadlines and under pressure, as well as working with others that have ideas 
            and skills that fall outside my purview. Completed and received a certificate from the bootcamp coding program through Georgia Tech that was centered on web design 
            using the MERN stack. Focused on front-end development that is intuitive and easy to use for a variety of users of different technological proficiencies. 
            Worked on a team of three to create View-From-Here, a web application that allows users to upload photos and automatically places the image on a google maps component 
            using the gps data contained within the image. This two week project required constant collaboration and extensive planning to organize the workload. Focused on the front-end, 
            specifically the UI/UX design of the website, including making it mobile-friendly and easy to understand for a new user. Looking to work on a team of designers and programmers 
            that know how to leverage their strengths and weaknesses in a collaborative fashion to create interesting and intuitive applications.
           </p>
          </div>
    </div>
  );
}
