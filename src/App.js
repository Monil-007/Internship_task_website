//import logo from './logo.svg';
import './App.css';
import DisplayTable from './components/DisplayTable/displayTable';
import Navbar from './components/Navbar/Navbar';
import MajorInfo from './components/MajorInfo/MajorInfo';
import Footer from './components/footer/footer';
import Contact from './components/Contact/contact';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={
          <div className='App'>
            <Navbar />
            <MajorInfo />
            <DisplayTable />
            <Footer />
          </div>
        } />
        <Route exact path="contact" element={<Contact />} />
      </Routes>

    </BrowserRouter>

  );
}

export default App;
