class Cart {
    constructor() {
        this.items = []
        this.subtotal = null
        this.shippingValue = null
        this.total = null
    }

    add(item) {
        this.items.push(item)
    }

    addShippingValue(value) {
        this.shippingValue = value
    }

    calculateTotal() {
        this.subtotal = this.items.reduce((acc, item) => acc + item.getTotalItemValue(), 0)
        return this.subtotal + this.shippingValue
    }

    finishPuchase() {
        if (this.items.length === 0) {
            throw new Error('Cart is empty')
        }

        this.total = this.calculateTotal()

        return {
            subtotal: this.subtotal,
            shippingValue: this.shippingValue,
            total: this.total
        }
    }    
}

export default Cart