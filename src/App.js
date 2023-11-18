import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contactform from './components/Contactform';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' Component={Contactform}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
