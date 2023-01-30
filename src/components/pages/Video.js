import React from 'react';
import Vprojects from '../../data/Vprojects.js';


export default function Video() {
  return (
    <div id= 'bg'>
    <main>
        <div className="vproject">
          {Vprojects.map((project) => (
            <><a href={project.deploymentUrl} target="_blank" rel="noreferrer">
              <img id="vproject" src={project.imgSrc} alt="" /></a></>
                
          ))}
          </div>
        </main>
    </div>
  );
}
