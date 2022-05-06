// import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import GifPage from './Components/GifPage';

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Gif' element={<GifPage/>}/>
        {/* <Route path='/Admin' element={<GifPage/>}/> */}
      </Routes>
    </div>
  );
}
export default App;