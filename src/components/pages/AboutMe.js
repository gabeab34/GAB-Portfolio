import React from 'react';
import myPic from '../assets/GAB.jpg'

export default function AboutMe() {
  return (
    <div id = 'bg'>
      <h2>About Me</h2>
        <div id = "myPic">
          <img id = "myPic" src= {myPic} alt= "Me" />
        </div>
          <div id= "aboutMe">
            <p>
            Hi there! My name is Gabriel Adams Bogar and I'm a full stack dev in training.
            I've learned a lot in the GT bootcamp program and am looking forward to using my skills to create interesting and efficient apps.
           </p>
          </div>
    </div>
  );
}
