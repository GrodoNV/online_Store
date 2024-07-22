import { createContext, useState } from "react";

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) =>{
    //shopping-cart   increment quantity 
    const [ count , setCount ]=  useState(0)
    //product-detail   Open/close
    const [ isProductDetailOpen , setIsProductDetailOpen ] = useState(false)
    const openProductDetail = ()=> setIsProductDetailOpen(true)
    const closeProductDetail = ()=> setIsProductDetailOpen(false)
    //checkout-side-menu   Open/close
    const [ isCheckoutSideMenuOpen , setIsCheckoutSideMenuOpen ] = useState(false)
    const openCheckoutSideMenu = ()=> setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = ()=> setIsCheckoutSideMenuOpen(false)

    //product-detail   Show product
    const [ productToShow , setProductToShow ] = useState({})
    //shoppi cart  add products to cart
    const [ cartProducts , setCartProducts ] = useState([])
    

    return(
        <ShoppingCartContext.Provider value={{
            count, 
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,

        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

