import './App.css';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div>
     <Router>
      <div>
        <Header/>
      </div>
      <div className='container'>
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/form" element={<Form/>} />
        </Routes>
      </div>
      <div className='fixed-bottom d-flex aligns-items-center justify-content-center'>
        <Footer/>
      </div>
    </Router>
    </div>
  );
}

export default App;
