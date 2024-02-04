export function setProductToCart(state, products){
    state.products = [...products]
}

export function getCart(state, products){
    state.products = [...products]
}

export function decrementItem(state, products){
    state.products = [...products]
}

export function removeCart(state, products){
    state.products = [...products]
}

export function clearFromCart(state){
    state.products = []
}
