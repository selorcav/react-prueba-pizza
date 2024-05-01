import React, { createContext, useEffect, useState } from "react";

export const PizzaContext = createContext();

const PizzaProvider = ({ children, pizzasUrl }) => {
  const [cart, setCart] = useState({ pizzas: [], totalPrice: 0 });
  const [pizzas, setPizzas] = useState(null);

  const addToCart = (pizza) => {
    const existingPizza = cart.pizzas.find((p) => p.id === pizza.id);
    if (existingPizza) {
      setCart((prevCart) => {
        const updatedPizzas = prevCart.pizzas.map((p) =>
          p.id === pizza.id ? { ...p, quantity: p.quantity + 1 } : p
        );
        const updatedTotalPrice = prevCart.totalPrice + pizza.price;
        return { pizzas: updatedPizzas, totalPrice: updatedTotalPrice };
      });
    } else {
      setCart((prevCart) => {
        const updatedPizzas = [...prevCart.pizzas, { ...pizza, quantity: 1 }];
        const updatedTotalPrice = prevCart.totalPrice + pizza.price;
        return { pizzas: updatedPizzas, totalPrice: updatedTotalPrice };
      });
    }
  };


  useEffect(() => {
    const consultarApi = async () => {
      const url = pizzasUrl;
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Error al obtener los datos: ${response.statusText}`);
        }

        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.error(`Error en la consulta API: ${error.message}`);
      }
    };

    consultarApi();
  }, [pizzasUrl]);

  return (
    <PizzaContext.Provider value={{ pizzas, cart, addToCart, setCart }}>
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaProvider;
