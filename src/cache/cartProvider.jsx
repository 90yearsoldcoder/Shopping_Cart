import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const CartContext = createContext();

export function useCart() {
  const context = useContext(CartContext);
  if (context === null) {
    throw new Error("useFeaturedProducts must be used within a CartProvider");
  }
  return context;
}

export const CartProvider = ({ children }) => {
  const [cart, cartSetter] = useState({});

  return (
    <CartContext.Provider value={{ cart, cartSetter }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node, // 'node' covers anything that can be rendered: numbers, strings, elements, or an array containing these types.
};
