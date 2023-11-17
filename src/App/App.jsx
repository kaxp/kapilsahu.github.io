import NavBar from "../Components/nav/NavBar";
import Hero from "../Pages/Hero";
import Projects from "../Pages/Projects";
import About from "../Pages/About";
import Skills from "../Pages/Skills";
import Contact from "../Pages/Contact";
import Experiences from "../Pages/Experience";
import Scholarships from "../Pages/Scholarships";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Experiences />
      <Skills />
      <Scholarships />
      <Contact />
    </>
  );
}

export default App;
