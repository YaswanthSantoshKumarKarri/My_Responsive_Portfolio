import React, { useContext } from "react";
import Navbar from "./Components/Navbar/Navbar";
import './App.css';
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Works from "./Components/Works/Works";
import Portfolios from "./Components/Portfolio/Portfolios";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { themeContext } from "./Context"
import Resume from "./Components/Resume/Resume";


function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App" style={{ background: darkMode ? 'black' : '', color: darkMode ? 'white' : '' }}>
      <Navbar />
      <Intro />
      <Resume />
      <Services />
      <Works />
      <Portfolios />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
