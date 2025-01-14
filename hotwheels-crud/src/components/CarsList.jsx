import React, { useState } from 'react';
import './../main.css'

const CarList = ({cars, deleteCar}) => {
  
  return (
    <div className='carlist-div'>
      <h2>Lista de Carros</h2>
      <ul>
        {cars.map((car,index)=>(
          <li key={index}>
            Nome: {car.nome}, Marca: {car.marca}, Cor: {car.cor}, Ano: {car.ano}
            <button onClick={()=>deleteCar(index)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarList;
