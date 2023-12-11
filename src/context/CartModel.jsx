export class CartModel {
    constructor() {
        this.cart = JSON.parse(localStorage.getItem('cart')) || [];
    }
    getItems() {
        return this.cart;
    }

    addItem(item) {
        if (this.cart.filter((cartItem) => cartItem.id === item.id).length === 0) {
            this.cart.push(item);
        } else {
            this.cart.filter((cartItem) => cartItem.id === item.id).forEach((cartItem) => {
                cartItem.qty += item.qty;
            });
        }
        this.saveCart();
    }
    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.cart));
    }
}
