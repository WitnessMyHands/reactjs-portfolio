import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Particles 
      className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 1200
              }
            },
            line_linked: {
              enable: true,
              opacity: .01
            },
            move: {
              direction: "none",
              speed: .25
            },
            shape: {
              type: "circle",
              stroke: {
                width: 9,
                color: "#fff"
              }
            },
          }
        }}
      />
      <Navbar />
      <Header />
      <About />
      <Portfolio />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;