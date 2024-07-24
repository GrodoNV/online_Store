import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { PlusIcon, CheckIcon } from "@heroicons/react/24/solid";

const Card = ({ data }) => {
  const context = useContext(ShoppingCartContext);

  const showProduct = (productDetail) => {
    context.openProductDetail();
    context.setProductToShow(productDetail);
    context.closeCheckoutSideMenu();
  };
  const addProductsToCart = (e, productData) => {
    e.stopPropagation(); // Evita que el evento de clic se propague al contenedor padre

    context.setCount(context.count + 1);

    context.setCartProducts([...context.cartProducts, productData]);

    context.openCheckoutSideMenu();

    context.closeProductDetail();
  };

  const renderIcon = (id) => {
    const isInCart = context.cartProducts.filter((product) => product.id === id).length > 0; //una forma de averiguar si el producto ya esta en el cart devolvera un bool
    if (isInCart) {
      return (
        <button
            className="absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1"
        >
        <CheckIcon className="h-6 w-6 text-white"></CheckIcon>
        </button>
        );
    } else {
        return(
        <button
        className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
        onClick={(e) => addProductsToCart(e, data)}
        >
        <PlusIcon className="h-6 w-6 text-black"></PlusIcon>
        </button>
        )
    }
  }

  return (
    <div
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={() => showProduct(data)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {data.category}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={data.image}
          alt={data.title}
        />
        {renderIcon(data.id)}
      </figure>
      <p className="flex justify-between items-center">
        <span className="text-sm font-light">{data.title}</span>
        <span className="text-lg font-medium">${data.price}</span>
      </p>
    </div>
  );
};

export default Card;