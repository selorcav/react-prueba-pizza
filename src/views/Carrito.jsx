import React, { useContext } from 'react';
import { Button } from '@mui/material';
import { PizzaContext } from '../context/PizzaContext';

const Carrito = () => {
  const { cart, addToCart, setCart } = useContext(PizzaContext);

  const handleIncrement = (pizza) => {
    addToCart(pizza);
  };

  const handleDecrement = (pizza) => {
    const existingPizzaIndex = cart.pizzas.findIndex((p) => p.id === pizza.id);
  
    if (existingPizzaIndex !== -1) {
      const existingPizza = cart.pizzas[existingPizzaIndex];
  
      if (existingPizza.quantity > 1) {
        const updatedPizzas = [...cart.pizzas];
        updatedPizzas[existingPizzaIndex] = {
          ...existingPizza,
          quantity: existingPizza.quantity - 1
        };
        const updatedTotalPrice = cart.totalPrice - existingPizza.price;
        setCart({ pizzas: updatedPizzas, totalPrice: updatedTotalPrice });
      } else {
        const updatedPizzas = cart.pizzas.filter((p) => p.id !== pizza.id);
        const updatedTotalPrice = cart.totalPrice - pizza.price; // Corregido
        setCart({ pizzas: updatedPizzas, totalPrice: updatedTotalPrice });
      }
    }
  };

  return (
    <div className=" md:w-9/12 mx-auto justify-center my-8 rounded-md shadow-lg p-5">
      <h3 className='text-2xl font-bold text-cyan-600'>Detalle del pedido</h3>
      <hr className='my-4' />
      {cart.pizzas.length > 0 ? (
        cart.pizzas.map((pizza) => (
          <div key={pizza.id} className="flex justify-between items-center my-4">
            <div className="flex items-center">
              <img className='w-20' src={pizza.img} alt="" />
              <p className='px-3'>{pizza.name.toUpperCase()}</p>
            </div>
            <div className="flex items-center justify-end">
              <p className='font-bold text-cyan-600 mx-2'>$ {pizza.price * pizza.quantity}</p>
              <div className="mx-1">
                <Button onClick={() => handleIncrement(pizza)} size='small' variant='contained'>+</Button>
              </div>
              <p className='font-bold text-cyan-600 mx-2'>{pizza.quantity}</p>
              <div className="mx-1">
                <Button onClick={() => handleDecrement(pizza)} color='error' size='small' variant='contained'>-</Button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No hay pizzas en el carrito</p>
      )}
      {cart.pizzas.length > 0 && (
        <div className="flex justify-end mt-4">
          <p className='font-bold text-cyan-600 mx-2'>Total: $ {cart.totalPrice}</p>
        </div>
      )}
    </div>
  );
};

export default Carrito;
