import React,{createContext,useState} from 'react'

const CartContext = createContext();

const CartProvider = ({children}) => {
    const[isDrawerOpen, setIsDrawerOpen] = useState(false);
    // console.log("isDrawerOpen:", isDrawerOpen);

  return (
   <CartContext.Provider value={{isDrawerOpen,setIsDrawerOpen}}>
    {children}
   </CartContext.Provider>
  )
}

export {CartContext};
export default CartProvider;