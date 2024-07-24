import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // Estado para el carrito de compras
  const [count, setCount] = useState(0);
  // Estado para el detalle del producto (abrir/cerrar)
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);
  // Estado para el menú lateral de checkout (abrir/cerrar)
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  // Estado para mostrar el producto en detalle
  const [productToShow, setProductToShow] = useState({});
  // Estado para los productos en el carrito
  const [cartProducts, setCartProducts] = useState([]);

  // Estado para la orden de compra
  const [order, setOrder] = useState([]);

  // Estado para todos los productos
  const [items, setItems] = useState(null);

  // Estado para los productos filtrados
  const [filteredItems, setFilteredItems] = useState(null);

  // Estado para buscar productos por título
  const [searchByTitle, setSearchByTitle] = useState("");

  // Estado para buscar productos por categoría
  const [searchByCategory, setSearchByCategory] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    // Filtrar productos por título y categoría
    let filtered = items;

    if (searchByTitle) {
      filtered = filtered?.filter((item) =>
        item.title.toLowerCase().includes(searchByTitle.toLowerCase())
      );
    }

    if (searchByCategory) {
      filtered = filtered?.filter(
        (item) => item.category.toLowerCase() === searchByCategory.toLowerCase()
      );
    }

    setFilteredItems(filtered);
  }, [items, searchByTitle, searchByCategory]);

  return (
    <ShoppingCartContext.Provider
      value={{
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
        order,
        setOrder,
        items,
        setItems,
        searchByTitle,
        setSearchByTitle,
        filteredItems,
        searchByCategory,
        setSearchByCategory,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
