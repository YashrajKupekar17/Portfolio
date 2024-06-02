import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Text from './components/Text';
import Home from './components/home';
import Expertise from './components/expertise';
import Work from './components/work';
// import Experience from './components/experience
import Contact from './components/contact';
import { useRef } from 'react';

function App() {
  const expertiseRef = useRef(null);

    const scrollToNextSection = () => {
        if (expertiseRef.current) {
            expertiseRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
  return (
    <>
    <Navbar />
    <Home scrollToNextSection={scrollToNextSection}/>
    <Expertise ref={expertiseRef}/>
    <Work />
    {/* <Experience /> */}
    <Contact />
</>
  );
}

export default App;
