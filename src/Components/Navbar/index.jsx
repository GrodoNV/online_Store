import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
const context = useContext(ShoppingCartContext);
const activeStyle = "underline underline-offset-4";

return (
<nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
    <ul className="flex items-center gap-3">
    <li className="font-semibold text-lg">
        <NavLink to="/">Shopi</NavLink>
    </li>
    <li>
        <NavLink
        to="/"
        onClick={() => context.setSearchByCategory()}
        className={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
        All
        </NavLink>
    </li>
    <li>
        <NavLink
        to="/electronics"
        onClick={() => context.setSearchByCategory("electronics")}
        className={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
        Electronics
        </NavLink>
    </li>
    <li>
        <NavLink
        to="/jewelery"
        onClick={() => context.setSearchByCategory("jewelery")}
        className={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
        Jewelery
        </NavLink>
    </li>
    <li>
        <NavLink
        to="/mens-clothing"
        onClick={() => context.setSearchByCategory("men's clothing")}
        className={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
        Men's Clothing
        </NavLink>
    </li>
    <li>
        <NavLink
        to="/womens-clothing"
        onClick={() => context.setSearchByCategory("women's clothing")}
        className={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
        Women's Clothing
        </NavLink>
    </li>
    </ul>
    <ul className="flex items-center gap-3">
    <li className="text-black/60">@GrodoNV</li>
    <li>
        <NavLink
        to="/my-orders"
        className={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
        My Orders
        </NavLink>
    </li>
    <li>
        <NavLink
        to="/my-account"
        className={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
        My Account
        </NavLink>
    </li>
    <li>
        <NavLink
        to="/sign-in"
        className={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
        Sign In
        </NavLink>
    </li>
    <li className="flex items-center">
        <ShoppingCartIcon className="h-6 w-6 text-black"></ShoppingCartIcon>
        <div>{context.cartProducts.length}</div>
    </li>
    </ul>
</nav>
);
};

export default Navbar;
