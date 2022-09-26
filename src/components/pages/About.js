import React from 'react';
import eventFinder from "../assets/EventFinder_Screenshot.png"
import smashMe from "../assets/ScreenshotProject2.png"
import gitHub from "../assets/githublogo.png"

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
            <img src ="https://i.picsum.photos/id/883/200/300.jpg?hmac=L62LMsIBfvhnxlTirzshbyv6HarwJvd-tSSBcIvbCVw"/>


        </section>
        <section class ="project">
            <img src ="https://i.picsum.photos/id/311/200/300.jpg?hmac=ltcRErkHQZRTlJl3xZ_6HSzWzco1GSU3zbZhA12WvJw"/>


        </section>
        <section class ="project">
            <img src ="https://i.picsum.photos/id/145/200/300.jpg?hmac=mIsOtHDzbaNzDdNRa6aQCd5CHCVewrkTO5B1D4aHMB8"/>


        </section>
        <section class ="project">
            <img src ="https://i.picsum.photos/id/145/200/300.jpg?hmac=mIsOtHDzbaNzDdNRa6aQCd5CHCVewrkTO5B1D4aHMB8"/>


        </section>
        </main>
    </div>
  );
}
