// import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import GifPage from './Components/GifPage';
import Loading from './Components/Loading';
import React from 'react';

function App() {
  let loading = true
  const [isLoading, setIsLoading] = React.useState(true)
  window.onload = function () {
    loading = false
    setIsLoading(false)
  }
  return (
    <div >
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Gif' element={<GifPage />}/>
        {/* {loading?<Route path='/' element={<Loading />} />:<Route path='/' element={<Home />} />} */}
          {/* {loading?<Route path='/Gif' element={<Loading />} />:<Route path='/Gif' element={<GifPage />} />} */}
      </Routes>
    </div>
  );
}
export default App;