// eslint-disable-next-line

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle";
import './assets/styles/style.scss'

import { useEffect } from 'react';

import Hero from './components/Hero'
import About from './components/About'
import Project from './components/Project'
import OtherProjects from './components/OtherProjects'
import Contact from './components/Contact'

import logo from './assets/images/logo.jpg';


function App() {
  function getYear() {
      return new Date().getFullYear();
  }

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);

  return (
    <div className="jvd-wrapper">
      <Hero/>
      <main className="jvd-main" id="home">
        <About/>
        <Project/>
        <OtherProjects/>
        <Contact/>     
      </main>
      <footer className="jvd-footer">
        <picture>
          <img src={logo} alt=""/>
        </picture>
        <p>Copyright &copy; {getYear()} J VILLANUEVA DESIGN</p>
      </footer>
    </div>
  );
}

export default App;
