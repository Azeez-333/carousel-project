import Navigation from './Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home.js' 
import Profile from './pages/Profile'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CarouselPage from './CarouselPage.js';






const App = () => {
  return (
    <BrowserRouter>
    <div className='App'>
    <Navigation />
   
      <Routes>
        <Route path='/' element={<CarouselPage/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App

// import Navigation from './Navigation';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import CarouselPage from './CarouselPage.js';






// const App = () => {
//   return (
    
//     <div className='App'>
//     <Navigation />
//     <CarouselPage/>
      
     
//     </div>
//   )
// }

// export default App
