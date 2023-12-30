import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Project from "./components/Project";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <About />
      <Experience />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
