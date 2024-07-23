/**
 * esta funcion calcula el precio total
 * this function calculates total price of a new order
 * @param {Array} products cartProducts : array of objects
 * @returns {number} Total price 
 */

export const totalPrice = (products)=> {
    let sum = 0
    products.forEach(product => {sum += product.price});
    return sum
}

