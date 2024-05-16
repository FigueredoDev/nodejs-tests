import Cart from "./cart"
import Item from "./item"

describe('Class Cart', () => {
    it('should initialize empty', () => {
        const cart = new Cart()

        expect(cart.subtotal).toBeNull()
    })

    it('should have items', () => {
        const apple = new Item('Apple', 2, 2)
        const banana = new Item('Banana', 3, 3)

        const cart = new Cart()

        cart.add(apple)
        cart.add(banana)

        expect(cart.items.length).toBe(2)
        expect(cart.items).toContain(apple)
        expect(cart.items).toContain(banana)
    })

    it('should contain a total property on initializaztion', () => {
        const cart = new Cart()

        expect(cart).toHaveProperty('total')
        expect(cart.total).toBeNull()
    })
})