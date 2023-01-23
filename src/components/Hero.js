import React, { useEffect, useRef } from "react";
import { Navigation, Pagination, EffectFade, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

import slider1 from '../assets/images/slider/slider1.jpg';
import slider2 from '../assets/images/slider/slider2.jpg';
import slider3 from '../assets/images/slider/slider3.jpg';

const Hero = () => {
  const heroRef = useRef();
  document.body.parentNode.style.overflow = 'hidden';

  useEffect(() => {
    const hero = heroRef.current;
    const timer = setTimeout(() => {
      hero.className = "hero is-loaded";
      document.body.parentNode.style.overflow = '';
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section className="hero" ref={heroRef}>
        <div className="hero-preload"></div>
          <h1 className="hero__title is-preload" title="JVillanuevaDesign">
            <span>J</span>
            <span>V</span>
            <span>illanueva</span>
            <span>D</span>
            <span>esign</span>
          </h1>
          <div className="hero__inner">
            <Swiper 
              className="hero__swiper"
              effect={"fade"}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              speed={4000}
              modules={[Navigation, Pagination, A11y, EffectFade, Autoplay]}
            >
              <SwiperSlide>
               <picture>
                <img src={slider1} alt="" />
               </picture>
              </SwiperSlide>
              <SwiperSlide>
                <picture>
                  <img src={slider2} alt="" />
               </picture>
              </SwiperSlide>
              <SwiperSlide>
                <picture>
                  <img src={slider3} alt="" />
               </picture>
              </SwiperSlide>
            </Swiper>

            {/* <div className="hero__swiper-btn">
              <div className="hero__swiper-btn-prev">
                <i className="icon--arrow"></i>
              </div>
              <div className="hero__swiper-btn-next">
                <i className="icon--arrow"></i>
              </div>
            </div> */}

            <div className="hero__contact">
              <div className="hero__contact-item">
                <a href="tel:+18475555555" className="hero__contact-link">
                  <i className="ico ico--phone"></i>
                  <span>123-456-789</span>
                </a>
              </div>
              <div className="hero__contact-item">
                <a href="mailto:j.villanuevadesign@gmail.com" className="hero__contact-link">
                  <i className="ico ico--email"></i>
                  <span>j.villanuevadesign@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
      </section>
    </>
  )
}

export default Hero