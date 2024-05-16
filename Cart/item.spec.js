import Item from "./item"

describe('Class Item', () => {
    it('should contain a name, quantity and price', () => {
        const item = new Item('Apple', 1, 3)

        expect(item.name).toBe('Apple')
        expect(item.value).toBe(1)
        expect(item.quantity).toBe(3)
    })

    it('should the price calculated according to the quantity', () => {
        const item = new Item('Apple', 1, 3)

        expect(item.getTotalItemValue()).toBe(3)
    })
})