import { useState } from 'react'
import Home from './components/Home'
import About from './components/About'
import CarList from './components/CarsList'
import CarForm from './components/CarForm'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom';

function App() {
  const [cars, setCars] = useState([]);
  const addCar=(car)=>{
    setCars([...cars,car])
  }

  const deleteCar=(index)=>{
    const newCars=[...cars];
    newCars.splice(index,1);
    setCars(newCars);
  }
  return (
    <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/carlist' element={<CarList cars={cars} deleteCar={deleteCar}/>}/>
          <Route path='/carform' element={<CarForm addCar={addCar}/>}/>
        </Routes>
    </div>
      
  )
}

export default App
