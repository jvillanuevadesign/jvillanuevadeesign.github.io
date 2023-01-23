import React, { useState } from "react"
import Modal from './Modal'

import { otherProjects } from './ImageMap';

const OtherProjects = () => {
  const [selected, setSelected] = useState(false);
  const [selectedProject, setSelectedProject] = useState('');

  const handleClick = (project) => {
    handleModalStatusChange(true);
    setSelectedProject(project);
  }

  const handleModalStatusChange = (status) => {
    setSelected(!selected);
  }

  return (
    <section className="jvd-section jvd-section--other-project">
      <div className="jvd-container">
        <h2 className="jvd-section__title">Other Projects</h2>
        
        <ul className="other-project">
          {
            otherProjects.map((project, idx) => {
              return (
                <li className="other-project__item" key={`other-${idx}`} onClick={() => handleClick(project)}>
                  <div className="other-project__item-inner">
                    <picture>
                      <img src={project.img} alt={project.project_name} />
                    </picture>

                    <div className="other-project__dtl">
                      <h3>{project.project_name}</h3>
                    </div>
                  </div>
                </li>
              );
            })
          }
        </ul>
      </div>

      {selected && <Modal selected_project={selectedProject} handleModalStatusChange={handleModalStatusChange}/> }
    </section>
  );
}

export default OtherProjects