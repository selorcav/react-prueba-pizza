import React, { useContext } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';

import { useNavigate } from 'react-router-dom';
import { PizzaContext } from '../context/PizzaContext';

const CardPizza = ({ pizza }) => {
  const navigate = useNavigate();
  const { addToCart } = useContext(PizzaContext);

  const handleVerMasClick = () => {
    navigate(`/pizza/${pizza.id}`);
  };

  const handleAnadirClick = () => {
    addToCart(pizza);
    // navigate('/carrito');
  };

  return (
    <>
      <Card>
        <CardMedia
          sx={{ height: 140 }}
          image={pizza.img}
          title="Pizza"
        />
        <CardContent>
          <Typography className='text-red-500' gutterBottom component="div">
            {pizza.name.toUpperCase()}
          </Typography>
          <hr />
          <div className="my-2">
            <Typography variant="body2">
              Ingredientes
            </Typography>
          </div>
          {pizza.ingredients.map((ingredient, index) => (
            <div key={index} className="text-xs">
              <Typography variant="body2" color="text.secondary">
                <LocalPizzaIcon /> {ingredient}
              </Typography>
            </div>
          ))}
        </CardContent>
        <CardActions>
          <Button onClick={handleVerMasClick} color='secondary' variant='contained' size="small">Ver más</Button>
          <Button onClick={handleAnadirClick} color='primary' variant='contained' size="small">Añadir</Button>
        </CardActions>
      </Card>
    </>
  );
};

export default CardPizza;
