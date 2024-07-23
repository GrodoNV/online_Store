import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext  } from '../../Context'
import { useContext } from 'react'
import OrderCard from '../../Components/OrderCard'
import {totalPrice} from '../../utils'
import './styles.css'
const CheckoutSideMenu = ()=>{
    const context = useContext(ShoppingCartContext)

    const handleDelete = (id)=>{
        const filteredProducts = context.cartProducts.filter(product => product.id  != id) //agarra la lista de productos en el cart y filtra(evita el id del que hicimos click) nos devuelve la lista pero sin el que clickeamos
        context.setCartProducts(filteredProducts)
    }

    return(
        <aside className={`${ context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu  flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div>
                    <XMarkIcon 
                    className='h-6 w-6 text-black cursor-pointer'
                    onClick={()=>context.closeCheckoutSideMenu()}
                    ></XMarkIcon>
                </div>

            </div>
            <div className='px-6 overflow-y-scroll'>
            {
                context.cartProducts.map(product=>(
                    <OrderCard 
                        key = {product.id}
                        id = {product.id}
                        title={product.title} 
                        imageUrl = {product.image}
                        price = {product.price}
                        handleDelete = {handleDelete}
                        />
                        
                ))
            }
            </div>
            <div className='px-6'>
                <p className='flex justify-between items-center'>
                    <span>Total:</span>
                    <span>${totalPrice(context.cartProducts) }</span>
                </p>
            </div>
        </aside>
    )

}

export default CheckoutSideMenu