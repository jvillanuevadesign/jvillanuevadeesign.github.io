import React, { useRef, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';

import { whoWeAre } from './ImageMap';

const About = () => {
  const ref = useRef();
  const { ref: inViewRef, inView } = useInView();

  // Use `useCallback` so we don't recreate the function on each render
  const setRefs = useCallback(
    (node) => {
      // Ref's from useRef needs to have the node assigned to `current`
      ref.current = node;
      // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
      inViewRef(node);
    },
    [inViewRef],
  );

  // const { ref, inView, entry } = useInView({
  //   /* Optional options */
  //   threshold: .50,
  //   triggerOnce: true,
  // });

  return (
    <>
      <section className="jvd-section jvd-section--about">
          <div className={`about ${inView ? 'is-visible': ''}`} ref={setRefs}>
            <div className="about__img">
              <picture>
                <img src={whoWeAre.img} alt="Who we are" />
              </picture>
            </div>
            <div className="about__dtl">
              <div className="about__eyebrow"><span>WHO WE ARE</span></div>
              <h2 className="about__title">Lorem ipsum dolor</h2>
              <p className="about__desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium reprehenderit atque commodi accusamus, sapiente eius aut a officiis mollitia facilis magni odit necessitatibus voluptatibus iusto, fugiat dolore veniam amet enim.
              </p>
            </div>
          </div>
      </section>
    </>
  )
}

export default About