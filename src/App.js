import './App.css';
import { Routes,Route } from 'react-router-dom';
import AboutUs from './components/aboutUs/AboutUs';
import ContactUs from './components/contactUs/ContactUs';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Services from './components/services/Services';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
