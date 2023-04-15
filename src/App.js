import { Routes, Route } from 'react-router-dom'
import Home from './Routes Implement/Home';
import About from './Routes Implement/About';
import Contact from './Routes Implement/Contact';
import Navbar from './Routes Implement/Navbar';

function App() {
  return (
    <div className="App">

      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

    </div>
  );
}

export default App;
