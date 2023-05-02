import React, { useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from 'swiper';

import { project1, project2, project3, project4 } from './ImageMap';

const Project = () => {
  const dataProject = [
    {
      title: "Luve Heart's and Be",
      desc: 'Arcu dictum varius duis at consectetur lorem donec. Odio euismod lacinia at quis risus sed vulputate odio ut. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi.',
      address: 'Banilad Cebu City',
      completion: 'June 2021',
      floor_area: '135.33sqm',
      main_img: project1.main,
      secondary_img: project1.secondary,
      slider: project1.slider
    },
    {
      title: 'Niño House',
      desc: 'Sit amet justo donec enim diam vulputate ut pharetra sit. Sed felis eget velit aliquet sagittis. Id aliquet risus feugiat in. Amet tellus cras adipiscing enim eu turpis. ',
      address: 'Red Stone Village, Cebu City',
      completion: 'June 2021',
      floor_area: '135.33sqm',
      main_img: project2.main,
      secondary_img: project2.secondary,
      slider: project2.slider
    },
    {
      title: 'BodyLab by Skindoctors',
      desc: 'Arcu dictum varius duis at consectetur lorem donec. Odio euismod lacinia at quis risus sed vulputate odio ut. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi.',
      address: 'Verve point, Talamban, Cebu City',
      completion: 'June 2021',
      floor_area: '135.33sqm',
      main_img: project3.main,
      secondary_img: project3.secondary,
      slider: project3.slider
    },
    {
      title: 'House of Lechon',
      desc: 'Arcu dictum varius duis at consectetur lorem donec. Odio euismod lacinia at quis risus sed vulputate odio ut. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi.',
      address: 'Talisay City, Cebu',
      completion: 'June 2021',
      floor_area: '135.33sqm',
      main_img: project4.main,
      secondary_img: project4.secondary,
      slider: project4.slider
    }
  ];

  const slidder = (project) => {
    return (
      <Swiper 
        className="project__swiper"
        speed={1000}
        navigation={{
          nextEl: '.project__swiper-btn-next',
          prevEl: '.project__swiper-btn-prev',
        }}
        slidesPerView={"auto"}
        spaceBetween={50}
        modules={[Autoplay, Navigation, A11y]}
        breakpoints={{
          0: {
            spaceBetween: 20
          },
          1024: {
            spaceBetween: 50
          },
        }}
        onSwiper={(swiper) => console.log('swiper')}
        observer={true}
        observeParents={true}
      >
        {
          project.slider.map((slider, idx) => {
            return (
              <SwiperSlide key={`p-${idx}`}>
                <picture>
                  <img src={slider} alt="" />
                </picture>
              </SwiperSlide>
            );
          })
        }

        <div className="project__swiper-btn">
          <div className="project__swiper-btn-prev">
            <i className="icon--arrow"></i>
          </div>
          <div className="project__swiper-btn-next">
            <i className="icon--arrow"></i>
          </div>
        </div>
      </Swiper>
    )
  }

  return (
    <div className="jvd-section jvd-section--project">
      {
        dataProject.map((project, index) => {
          return (
            <section className="project" key={`proj-${index}`}>
              <div className="project__info">
                <div className="project__left">
                  <h2 className="project__title">PROJECT 0{index + 1}</h2>

                  <picture className="project__left-img">
                    <img src={project.main_img} alt="" />
                  </picture>
                </div>
                <div className="project__right">
                <h2 className="project__title">PROJECT 0{index + 1}</h2>
                
                  <picture className="project__right-img">
                    <img src={project.secondary_img} alt="" />
                  </picture>

                  <div className="project__dtl">
                    <h3>{project.title}</h3>
                    {/* <p>{project.desc}</p> */}

                    <span className="">
                      {project.address}
                      {/* Completion {project.completion} / Total floor area {project.floor_area} */}
                    </span>
                    <span>
                      Design and Build by J. VILLANUEVADESIGN
                    </span>
                  </div>
                </div>
              </div>


              { slidder(project) }
            </section>
          )
        })
      }
    </div>
  )
}

export default Project