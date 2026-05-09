import React, {
  createContext,
  useContext,
  useState,
} from 'react';

/* CREATE CONTEXT */
export const CartContext =
  createContext();

/* PROVIDER */
export const CartProvider = ({
  children,
}) => {

  const [cartItems, setCartItems] =
    useState([]);

  /* ADD TO CART */
  const addToCart = (item) => {

    setCartItems((prevItems) => {

      const updatedCart = [
        ...prevItems,
        {
          id: Date.now().toString(),
          foodName:
            item.foodName ||
            'Healthy Meal',

          hotel:
            item.hotel ||
            'Restaurant',

          image:
            item.image ||
            'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200&auto=format&fit=crop',

          price:
            item.price || '₹0',

          quantity:
            item.quantity || 1,
        },
      ];

      console.log(
        'UPDATED CART:',
        updatedCart
      );

      return updatedCart;
    });
  };

  /* REMOVE ITEM */
  const removeFromCart = (
    itemId
  ) => {

    setCartItems((prevItems) =>
      prevItems.filter(
        (item) =>
          item.id !== itemId
      )
    );
  };

  /* CLEAR CART */
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

/* CUSTOM HOOK */
export const useCart = () => {

  const context =
    useContext(CartContext);

  if (!context) {
    throw new Error(
      'useCart must be used inside CartProvider'
    );
  }

  return context;
};