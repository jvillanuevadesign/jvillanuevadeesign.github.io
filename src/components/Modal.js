import React, { useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

const Modal = ({selected_project, handleModalStatusChange}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const slider = selected_project.modalImages;
  const thumbSlider = selected_project.modalImages;
  
  return (
    <div className="modal">
      <div className="modal__inner">
        <div className="modal__head">
          <h2>{selected_project.project_name}</h2>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460.775 460.775" onClick={() => handleModalStatusChange(false)}>
          <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
            c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
            c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
            c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
            l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
            c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"/>
          </svg>
        </div>
        <div className="modal__body">

          <Swiper
            style={{
              "--swiper-navigation-color": "#000",
              "--swiper-pagination-color": "#000",
            }}
            spaceBetween={30}
            navigation={true}
            thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
            modules={[FreeMode, Navigation, Thumbs]}
            className="modal__swiper2"
          >
            {
              slider && slider.map((slider, idx) => {
                return (
                  <SwiperSlide key={`modal-${idx}`}>
                    <picture>
                      <img src={slider} alt="" />
                    </picture>
                  </SwiperSlide>
                );
              })
            }
          </Swiper>

          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={20}
            slidesPerView={8}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="modal_thumb"
            breakpoints={{
              0: {
                slidesPerView: 1.5,
              },
              1024: {
                slidesPerView: 8,
              },
            }}
          >
            {
              thumbSlider && thumbSlider.map((slider, idx) => {
                return (
                  <SwiperSlide key={`modal-thumb-${idx}`}>
                    <picture>
                      <img src={slider} alt="" />
                    </picture>
                  </SwiperSlide>
                );
              })
            }
          </Swiper>
          
        </div>
      </div>
    </div>
  )
}

export default Modal