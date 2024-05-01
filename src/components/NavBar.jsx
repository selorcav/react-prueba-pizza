import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { NavLink } from "react-router-dom";
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react';
import { PizzaContext } from '../context/PizzaContext';

export const NavBar = () => {
  const { cart } = useContext(PizzaContext);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink to="/">
              <Button color='inherit'>
                <LocalPizzaIcon />
                Pizzería Mamma Mía!
              </Button>
            </NavLink>
          </Typography>
          <NavLink to="/carrito">
            <Button color='inherit'>
              <ShoppingCartIcon />
              $ {cart.totalPrice}
            </Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
