import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './Container/Home/Home';
import Navbar from './Container/Navbar/Navbar.jsx';
import About from './Container/About/About.jsx';
import Error from './Container/Error/Error.jsx';
import Contact from './Container/Navbar/Contact';

function App() {
  return (
    <div className="App">
   <Routes>
              <Route  element={<Navbar/>} >
              <Route path="/" index element={<Home/>}/>
              <Route path="/Home" index element={<Home/>}/>
              <Route path="/About" element={<About/>}/>
              </Route>
             <Route path="*" element={<Error/>}/>
             <Route path="/Contact" element={<Contact/>}/>
   </Routes>
    </div>
  );
}

export default App;
