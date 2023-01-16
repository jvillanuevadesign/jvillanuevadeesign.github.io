import React from "react"

import { otherProjects } from './ImageMap';

const OtherProjects = () => {
  return (
    <section className="jvd-section jvd-section--other-project">
      <div className="jvd-container">
        <h2 className="jvd-section__title">Other Projects</h2>

        <ul className="other-project">
          {
            otherProjects.map((project, idx) => {
              return (
                <li className="other-project__item" key={`other-${idx}`}>
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
    </section>
  );
}

export default OtherProjects