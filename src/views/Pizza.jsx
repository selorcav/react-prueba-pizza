import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import { Card, Typography, Button } from '@mui/material';
import { PizzaContext } from '../context/PizzaContext';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

const Pizza = () => {
  const { id } = useParams();
  const { pizzas, addToCart } = useContext(PizzaContext);
  const [showAlert, setShowAlert] = useState(false);

  const pizza = pizzas && pizzas.find(pizza => pizza.id === id);

  const handleAddToCart = () => {
    if (pizza) {
      addToCart(pizza);
      setShowAlert(true);
    }
  };

  if (!pizza) {
    return (
      <div className="flex flex-wrap md:w-9/12 mx-auto justify-center my-8 p-3">
        <Card className='rounded-none relative flex flex-col md:flex-row  justify-center items-center w-full p-5'>
          <Typography variant="body2" color="text.secondary">
            Pizza No encontrada
          </Typography>
        </Card>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-wrap md:w-9/12 mx-auto justify-center my-8 p-3">
        <Card className='rounded-none relative flex flex-col md:flex-row  justify-center items-center w-full'>
          <img className='md:w-5/12 h-64 w-full md:h-full' src={pizza.img} alt={pizza.name} />
          <div className="md:w-7/12 w-full flex flex-col h-full p-5">
            <h3 className='text-2xl font-bold text-cyan-600'>{pizza.name.toUpperCase()}</h3>
            <hr className='my-4' />
            <p>{pizza.desc}</p>
            <div className="text-xs my-2">
              <Typography variant="body2" color="text.secondary">
                <LocalPizzaIcon /> {pizza.ingredients.join(', ')}
              </Typography>
            </div>
            <div className="flex justify-between my-3">
              <p className='font-bold text-lg'>Precio $ {pizza.price}</p>
              <Button onClick={handleAddToCart} color='primary' variant='contained' size="small">Añadir</Button>
            </div>
            {showAlert && (
              <Alert icon={<CheckIcon fontSize="inherit" />} severity="success" onClose={() => setShowAlert(false)}>
                Tu pizza ha sido añadido al carro
              </Alert>
            )}
          </div>
        </Card>
      </div>
    </>
  );
}

export default Pizza;
