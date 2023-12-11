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
        console.log(this.cart)
    }

    removeItem(item) {
        const index = this.cart.indexOf(item);
        if (index > -1) {
            this.cart.splice(index, 1);
            this.saveCart();
        }
       return this.getItems();
    }

    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.cart));
    }
}
