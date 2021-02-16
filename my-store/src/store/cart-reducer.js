let initalState = {
    products: [],
    filetredProduct: [],
    productsInCart: []
};


export default (state = initalState, action) => {

    let { type, payload } = action;
    switch (type) {
        case 'GET':
            let products = payload.results.filter(product => {
                if (product.inStock > 0) {
                    return product;
                }
            });

            return { ...state, products };
        case 'ADDEDTOCART':

            const productsInCart = state.products.filter(product => {
                if (product.name == payload.name) {
                    return product;
                }
            });
            let newState = productsInCart[0];
            return { ...state, productsInCart: [...state.productsInCart, newState] };
        case 'DELETE':
            const productInCart = state.productsInCart.filter(product => {
                if (product.name !== payload.name) {
                    return product;
                }
            });
            let stateAfterDelete = productInCart;
            console.log('from cart after delete ', stateAfterDelete)
            return { ...state, productsInCart: stateAfterDelete };

        default:
            return state;
    }
}

export const addedToCart = (payload) => {
    return {
        type: 'ADDEDTOCART',
        payload: payload
    }
}
export const deletefromCart = payload => {
    return {
        type: 'DELETE',
        payload: payload
    }
}