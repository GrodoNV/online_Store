import { useRoutes , BrowserRouter } from 'react-router-dom'
import './App.css'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from "../MyOrder"
import MyOrders from "../MyOrders"
import NotFound from "../NotFound"
import SignIn from "../SignIn"

const AppRoutes = ()=>{
  let routes = useRoutes([
    {
      path:'/',element:'<Home/>',
      path:'/MyAccount',element:'<MyAccount/>',
      path:'/MyOrder',element:'<MyOrder/>',
      path:'/MyOrders',element:'<MyOrders/>',
      path:'/*',element:'<NotFound/>',
      path:'/SignIn',element:'<SignIn/>',

    }
  ])
  return routes
}

const App = ()=>{
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  return (
    <>
      <div className="bg-red-100" >
        <Home />
        <MyAccount />
        <MyOrder />
        <MyOrders />
        <NotFound />
        <SignIn />
      </div>
    </>
  )
}

export default App
