import { ChevronRightIcon } from "@heroicons/react/24/solid"
import { format } from "date-fns";
const OrdersCard = props =>{
    const {totalPrice, totalProducts} = props
    const currentDate = new Date();
    const formattedDate = format(currentDate , 'dd.MM.yy')

    return(
        <div className="flex justify-between items-center mb-4 border border-black rounded-lg p-4 w-80">
            <div className="flex justify-between w-full">
                <p className="flex flex-col">
                    <span>{formattedDate}</span>
                    <span>{totalProducts} articles</span>
                </p>
                <p className="flex items-center gap-2">
                    <span className='font-medium text-2xl'>${totalPrice}</span>
                    <ChevronRightIcon className="h-6 w-6 text-black cursor-pointer"></ChevronRightIcon>    
                </p>
            </div>

        </div>
    )

}

export default OrdersCard