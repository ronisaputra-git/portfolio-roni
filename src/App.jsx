import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import './App.css'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import About from './component/About'
import Skills from './component/Skills'
import Project from './component/Project'
import Contact from './component/Contact'
import Footer from './component/Footer'

function App() {
      useEffect(() => {

        AOS.init({

            duration:1000,

            once:true,

        });

    }, []);
  const skills=[ {
        id: 1,
        nama: "HTML",
        level: "Mahir"
    },
    {
        id: 2,
        nama: "CSS",
        level: "Mahir"
    },
    {
        id: 3,
        nama: "JavaScript",
        level: "Menengah"
    },
    {
        id: 4,
        nama: "React",
        level: "Pemula"
    },
    {
        id: 5,
        nama: "Git",
        level: "Pemula"
    }]
  return (
    <>
      <Navbar />
      <Hero  
        nama="Roni Saputra"
        profesi="Fresh Graduate Teknik Informatika"
        deskripsi="Saya memiliki minat dalam Web Development dan Multimedia"
        universitas="Universitas Dayanu Ikhsanuddin Baubau"
      />
      <About/>
      <Skills skills={skills} />
      <Project/>
      <Contact/>
      <Footer/>
    </>
  )
}
  

export default App