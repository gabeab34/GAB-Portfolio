import React from 'react';
import eventFinder from "../assets/EventFinder_Screenshot.png"
import smashMe from "../assets/ScreenshotProject2.png"
import gitHub from "../assets/githublogo.png"
import noteTaker from "../assets/noteTaker.png"
import password from "../assets/password.png"
import scheduler from "../assets/scheduler.png"
import weatherApp from "../assets/WeatherApp.png"

export default function About() {
  return (
    <div id= 'bg'>
      <h2>My Work</h2>
    <main>
        <section class ="project">
            <a href="https://mmmphoto.github.io/Event-Finder/" target ="_blank">
            <img id="project" src = {eventFinder}/></a>
              <a href= "https://github.com/MMMPhoto/Event-Finder" target ="_blank">
              <img id="gitHub" src = {gitHub}/></a>
        </section>
        <section class ="project">
            <a href="https://supersmashme.herokuapp.com/" target ="_blank">
            <img id="project" src = {smashMe} /></a>
              <a href='https://github.com/gabeab34/Smash.ME' target="_blank">
              <img id="gitHub" src = {gitHub}/></a>
        </section>
        <section class ="project">
        <a href="https://gabeab34.github.io/GAB-Weatherapp-C6/" target ="_blank">
            <img id="project" src = {weatherApp} /></a>
              <a href='https://github.com/gabeab34/GAB-Weatherapp-C6' target="_blank">
              <img id="gitHub" src = {gitHub}/></a>


        </section>
        <section class ="project">
        <a href="https://gab-note-taker.herokuapp.com/" target ="_blank">
            <img id="project" src = {noteTaker} /></a>
              <a href='https://github.com/gabeab34/GAB-NoteTaker-C11' target="_blank">
              <img id="gitHub" src = {gitHub}/></a>


        </section>
        <section class ="project">
        <a href="https://gabeab34.github.io/GAB-Calender-C5/" target ="_blank">
            <img id="project" src = {scheduler} /></a>
              <a href='https://github.com/gabeab34/GAB-Calender-C5' target="_blank">
              <img id="gitHub" src = {gitHub}/></a>


        </section>
        <section class ="project">
        <a href="https://gabeab34.github.io/GAB-PasswordGenerator-JS-C3/" target ="_blank">
            <img id="project" src = {password} /></a>
              <a href='https://github.com/gabeab34/GAB-PasswordGenerator-JS-C3' target="_blank">
              <img id="gitHub" src = {gitHub}/></a>


        </section>
        </main>
    </div>
  );
}
