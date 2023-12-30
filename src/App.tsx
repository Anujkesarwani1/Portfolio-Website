import About from "./components/About";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <About />
    </div>
  );
};

export default App;
