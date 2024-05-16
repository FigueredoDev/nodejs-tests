import Cart from "./cart";
import Item from "./item";

describe("Class Cart", () => {
  it("should initialize empty", () => {
    const cart = new Cart();

    expect(cart.subtotal).toBeNull();
  });

  it("should have items", () => {
    const apple = new Item("Apple", 2, 2);
    const banana = new Item("Banana", 3, 3);

    const cart = new Cart();

    cart.add(apple);
    cart.add(banana);

    expect(cart.items.length).toBe(2);
    expect(cart.items).toContain(apple);
    expect(cart.items).toContain(banana);
  });

  it("should contain a total property on initialization", () => {
    const cart = new Cart();

    expect(cart).toHaveProperty("total");
    expect(cart.total).toBeNull();
  });

  describe('Method "finishPurchase"', () => {
    it("should finish purchase", () => {
      const cart = new Cart();
      const apple = new Item("apple", 10, 5);

      cart.add(apple);
      cart.addShippingValue(10);

      expect(cart.finishPurchase()).toStrictEqual({
        subtotal: 50,
        shippingValue: 10,
        total: 60,
      });
    });

    it("should throw an error when cart is empty", () => {
      const cart = new Cart();

      expect(() => cart.finishPurchase()).toThrowError("Cart is empty");
    });
  });

  describe("Method 'calculateTotal'", () => {
    it("should calculate total items value", () => {
      const cart = new Cart();
      const apple = new Item("apple", 10, 5);

      cart.add(apple);

      expect(cart.calculateTotal()).toEqual(50);
    });
  });

  describe("Method 'addShippingValue'", () => {
    it("should add shipping value", () => {
      const cart = new Cart();
      const expected = 100;

      cart.addShippingValue(100);

      expect(cart.shippingValue).toEqual(expected);
    });
  });
});
