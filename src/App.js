
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Register from './components/Register';
import Header from './components/Header';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Notfound from './components/Notfound';

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path="/" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="*" element={<Notfound/>}/>
      {/* <Route path="/logout" element={<Logout/>}/> */}
      


    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
