import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import './App.css'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import About from './component/About'
import Skills from './component/Skills'
import Sertifikat from './component/Sertifikat'
import Project from './component/Project'
import Contact from './component/Contact'
import Footer from './component/Footer'
import skills from "./data/Skills";

function App() {
      useEffect(() => {

        AOS.init({

            duration:1000,

            once:true,

        });

    }, []);

  return (
    <>
      <Navbar />
      <Hero
      nama={"Roni Saputra"}
      />
      <About/>
      <Skills skills={skills} />
      <Sertifikat/>
      <Project/>
      <Contact/>
      <Footer/>
    </>
  )
}
  

export default App