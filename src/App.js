import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/layout";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import Projects from "./components/Projects/projects";
import Home from "./components/Home/home";
import "animate.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
