import { createContext, useState } from "react";

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) =>{
    //shopping-cart   increment quantity 
    const [ count , setCount ]=  useState(0)
    //product-detail   Open/close
    const [ isProductDetailOpen , setIsProductDetailOpen ] = useState(0)
    const openProductDetail = ()=> setIsProductDetailOpen(true)
    const closeProductDetail = ()=> setIsProductDetailOpen(false)
    const [ productToShow , setProductToShow ] = useState({})
    //product-detail   Show product
    

    return(
        <ShoppingCartContext.Provider value={{
            count, 
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

