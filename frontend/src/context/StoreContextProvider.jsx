import React, { useState, useEffect } from "react";
import { StoreContext } from "./StoreContext";
import { food_list } from "../assets/assets";

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (_id) => {
    setCartItems((prev) => ({
      ...prev,
      [_id]: (prev[_id] || 0) + 1,
    }));
  };

  const removeFromCart = (_id) => {
    setCartItems((prev) => {
      if (prev[_id] <= 1) {
        const newCart = { ...prev };
        delete newCart[_id];
        return newCart;
      }
      return {
        ...prev,
        [_id]: prev[_id] - 1,
      };
    });
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
