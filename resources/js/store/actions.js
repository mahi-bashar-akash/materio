export function addToCart ({commit}, product){
    let cartItems = [];
    const storedCartData = localStorage.getItem('cart');
    if (storedCartData) {
        cartItems = JSON.parse(storedCartData);
    }
    const existingProduct = cartItems.find((item) => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cartItems.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cartItems));
    commit('setProductToCart', cartItems);
}

export function getCartItems ({commit}){
    let cartItems = [];
    const storedCartData = localStorage.getItem('cart');
    if (storedCartData) {
        cartItems = JSON.parse(storedCartData);
    }
    commit('getCart', cartItems);
}

export function decrementCartItem ({commit}, cartItem){
    let cartItems = [];
    const storedCartData = localStorage.getItem('cart');
    if (storedCartData) {
        cartItems = JSON.parse(storedCartData);
    }
    let products = [];
    const existingProduct = cartItems.find((item) => item.id === cartItem.id);
    if (existingProduct && existingProduct.quantity !== 1) {
        products = cartItems.map(product => {
            if(product.id === existingProduct.id){
                product.quantity--;
                return product;
            }
            return product;
        })
    }else{
        products = cartItems.filter(product => product.id !== cartItem.id);
    }
    localStorage.setItem('cart', JSON.stringify(products));
    commit('decrementItem', products);
}

export function removeFromCart ({commit}, cartItem){
    let cartItems = [];
    const storedCartData = localStorage.getItem('cart');
    if (storedCartData) {
        cartItems = JSON.parse(storedCartData);
    }
    const products = cartItems.filter(product => product.id !== cartItem.id)
    localStorage.setItem('cart', JSON.stringify(products));
    commit('removeCart', products);
}

export function clearCart ({commit}, cartItem){
    let cartItems = [];
    const storedCartData = localStorage.getItem('cart');

    if (storedCartData) {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }else{
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }

    commit('clearFromCart');
}
