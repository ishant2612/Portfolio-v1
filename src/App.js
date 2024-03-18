import "./App.css";
import About from "./Components/About";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import { useState, useEffect } from "react";
import Skills from "./Components/Skills";
function App() {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.pageYOffset);
    };
    console.log("====================================");
    console.log(scrollPos);
    console.log("====================================");
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="App">
      <Header scrollPos={scrollPos} />
      <Hero />
      <About />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
