import About from "./components/About";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <About />
      <Experience />
    </div>
  );
};

export default App;
