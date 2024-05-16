import Cart from "./cart.js";
import Item from "./item.js";

const cart = new Cart()

cart.add(new Item('Apple', 1, 3))
cart.add(new Item('Banana', 2, 2))
cart.add(new Item('Orange', 3, 1))
cart.add(new Item('Strawberry', 4, 4))

cart.addShippingValue(30)

cart.calculateTotal()

cart.finishPuchase()

console.log(cart)