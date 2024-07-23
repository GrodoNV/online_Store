import Layout from '../../Components/Layout/index'
import { Link } from 'react-router-dom';
import OrdersCard from '../../Components/OrdersCard';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
function MyOrders() {
    const context = useContext(ShoppingCartContext)

    return (
        <Layout>
            <div className='flex items-center justify-center relative w-80 ' >
                
                <h1>MyOrders</h1>
            </div>
            {
                context.order.map((order, index)=>{
                    <Link key={index} to={`/my-orders/${order.id}`}>
                        <OrdersCard 
                        totalPrice={order.totalPrice} 
                        totalProducts = {order.totalProducts}
                        />                        
                    </Link>
                    
                })
            }

        </Layout>
    );
}

export default MyOrders;
