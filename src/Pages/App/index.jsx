import { useContext } from "react";
import { useRoutes, BrowserRouter, Navigate } from "react-router-dom";
import "./App.css";
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import SignIn from "../SignIn";
import NavBar from "../../Components/Navbar";
import { ShoppingCartProvider ,initializeLocalStorage , ShoppingCartContext} from "../../Context/index";
import CheckoutSideMenu from "../../Components/CheckoutSideMenu";

const AppRoutes = () => {
  const context = useContext(ShoppingCartContext);
  
  //Account 
  const account  = localStorage.getItem('')
  const parsedAccount = JSON.parse(account)
  //Sign out 
  const signOut = localStorage.getItem('sign-out')
  const parsedSignOut =JSON.parse(signOut)

  // Has no account 
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length ===0 : true
  const noAccountInLocalState = Object.keys(context.account).length === 0 
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState
  const isUserSignOut = context.signOut || parsedSignOut
  
  let routes = useRoutes([
    { path: "/", element: hasUserAnAccount && !isUserSignOut ? <Home />: <Navigate replace to={'/sign-in'}/>},
    //agregar paths faltantes
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-orders/last", element: <MyOrder /> },
    { path: "/my-orders/:id", element: <MyOrder /> },
    { path: "/*", element: <NotFound /> },
    { path: "/sign-in", element: <SignIn /> },


    // Rutas específicas para categorías
    { path: "/electronics", element: hasUserAnAccount && !isUserSignOut ? <Home category="electronics" />:<Navigate replace to={'/sign-in'}/> },
    { path: "/jewelery", element: hasUserAnAccount && !isUserSignOut ? <Home category="jewelery"/>:<Navigate replace to={'/sign-in'}/>   },
    { path: "/mens-clothing", element: hasUserAnAccount && !isUserSignOut ? <Home category="men's clothing" />:<Navigate replace to={'/sign-in'}/>   },
    { path: "/womens-clothing", element: hasUserAnAccount && !isUserSignOut ? <Home category="women's clothing" />:<Navigate replace to={'/sign-in'}/> },

  ]);
  return routes;
};

const App = () => {
  initializeLocalStorage()
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <CheckoutSideMenu />
        <NavBar />

        <AppRoutes />

      </BrowserRouter>
    </ShoppingCartProvider>
  );
};

export default App;
