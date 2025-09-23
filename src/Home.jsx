import Skills from './components/Skills/Skills';
import HeroSection from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';

function Home() {

  return (
    <>
        <HeroSection />
        <About />
        <Skills />
        <Projects />
    </>
  )
}

export default Home;