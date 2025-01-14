import { useState } from 'react'
import './../main.css'

const CarForm = ({ addCar }) => {
  const[car,setCar]=useState({
    nome:'',
    marca:'',
    cor:'',
    ano:'',
  })
  const handleChange=(e)=>{
    const{name, value}=e.target;
    setCar({...car,[name]:value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    addCar(car);
    setCar({nome:'', marca:'', cor:'', ano:''})
  }
  return (
    <div className='carform-div'>
      <form className='form-elements' onSubmit={handleSubmit}>
        <h2>Adicionar Carro</h2>
        <input
          type="text"
          name="nome"
          placeholder="nome"
          value={car.nome}
          onChange={handleChange}
        />
         <input
           type="text"
           name="marca"
           placeholder="marca"
           value={car.marca}
           onChange={handleChange}
        />
         <input
           type="text"
           name="cor"
           placeholder="cor"
           value={car.cor}
           onChange={handleChange}
        />
         <input
           type="text"
           name="ano"
           placeholder="ano"
           value={car.ano}
           onChange={handleChange}
        />
        <button type='submit'>Adicionar o carro</button>
      </form>
    </div>
  )
}

export default CarForm
