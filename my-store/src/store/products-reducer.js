let initalState = {
    products: [],
    filetredProduct: [],
    productsInCart: [],
    productDetail: {}

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
            let newState = products;
            return { ...state, products: newState };

        case 'ACTIVE':

            let filetredProduct = state.products.filter(product => {
                if (product.category == payload) {
                    return product.category;
                }
            });
            return { ...state, filetredProduct };
        case 'GETDETAILS':
            let productDetail = payload;
            return { ...state, productDetail };

        default:
            return state;
    }
}