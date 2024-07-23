import Layout from '../../Components/Layout/index'
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../../Components/OrderCard';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
function MyOrder() {
    const context = useContext(ShoppingCartContext)
    const currentPath= window.location.pathname
    let index = currentPath.substring(currentPath.lastIndexOf('/')+1)//averigua el index para saber colocarlo en el url a usar 
    if(index === 'last') index = context.order?.length - 1 //evita que el link my-order/last se quiebre y deje de mostrar hace que last equivalga al tamano de la lista de ordenes -1 ya que es el mismo num de index 
    return (
        <Layout>
            <div className='flex items-center justify-center relative w-80 mb-6' >
                <Link to='/my-orders' className='absolute left-0'>
                    <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer'/>
                </Link>
                <h1>My Order</h1>
            </div>

            <div className='flex flex-col w-80'>
            {
                context.order && context.order.length > 0 ?
                context.order?.[index]?.products.map(product=>(
                    <OrderCard 
                        key = {product.id}
                        id = {product.id}
                        title={product.title} 
                        imageUrl = {product.image}
                        price = {product.price}
                        />
                        
                )):
                <p>no hay productos en la orden </p>
            }
            </div>
        </Layout>
    );
}

export default MyOrder;
