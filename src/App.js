/*import logo from './logo.svg';*/
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
/*import Particles from "react-particles-js"*/
import Navbar from './components/Navbar';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Works from './components/Works';
import Contact from './components/Contact';



function App() {
  return (
    <>
      <Navbar />      
      <Header />      
      <Portfolio />
      <Testimonials />
      <Works />
      <Contact />
        

      </>
    
  );
}

export default App;
