import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/portfolio/Portfolio';
import Works from './components/Works';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';



function App() {
  return (
    <>
      <Navbar />
      <div>
        
        <Header />    
        <Services />
        <About />           
        <Portfolio />
        <Works />         
        <Testimonials />
        <Contact />
      </div>
      <span className="section"></span>      
        

      </>
        
    
  );
}

export default App;
