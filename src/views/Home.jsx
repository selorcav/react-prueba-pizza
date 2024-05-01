import React, { useContext, useEffect } from 'react';
import { Card, CardMedia } from '@mui/material';
import CardPizza from '../components/CardPizza';
import { PizzaContext } from '../context/PizzaContext';

const Home = () => {
  const { pizzas } = useContext(PizzaContext);

  useEffect(() => {
    console.log(pizzas);
  }, [pizzas]);

  return (
    <>
      <Card className='rounded-none relative flex justify-center items-center'>
        <CardMedia
          className='h-52 brightness-50'
          component="img"
          image="/pizzacover.jpg"
          alt="pizzas"
        />
        <div className="absolute">
          <h1 className='text-center text-white font-bold text-3xl drop-shadow-xl'>¡Pizzería Mamma Mía!</h1>
          <p className='text-center text-white font-bold text-xl'>¡Tenemos las mejores pizzas que podrás encontrar!</p>
        </div>
      </Card>
      <div className="flex flex-wrap md:w-9/12 mx-auto justify-center">
        {pizzas && pizzas.map((pizza) => (
          <div key={pizza.id} className="md:w-4/12 p-3">
            <CardPizza pizza={pizza} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;