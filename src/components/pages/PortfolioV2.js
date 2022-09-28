import React from 'react';
import gitHub from "../assets/githublogo.png"
import Projects from '../../data/Projects.js';


export default function Portfolio() {
  return (
    <div id= 'bg'>
      <h2>My Work</h2>
    <main>
        <div className="project">
          {Projects.map((project) => (
            <><a href={project.deploymentUrl} target="_blank" rel="noreferrer">
              <img id="project" src={project.imgSrc} alt="" /></a>
                <a href={project.githubRepo} target="_blank" rel="noreferrer">
                <img id="gitHub" src={gitHub} alt="" /></a></>
          ))}
          </div>
        </main>
    </div>
  );
}
