let initalState = {
    products: [
        { name: 'TV', category: 'electronics', price: 699.00,  inStock: 5},
        { name: 'Camera', category: 'electronics', price: 400.00, inStock: 3 },
        { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15 },
        { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25 },
        { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10 },
        { name: 'Apples', category: 'food', price: .99, inStock: 500 },
        { name: 'Eggs', category: 'food', price: 1.99, inStock: 12 },
        { name: 'Bread', category: 'food', price: 2.39, inStock: 90 },
    ],
    filetredProduct: [],
    productsInCart:[],
    numAdded:0


};


export default (state = initalState, action) => {

    console.log("action in reducer ---> ", action)
    console.log("state ---> ", state)
    let { type, payload } = action;
    switch (type) {

        case 'ADDEDTOCART':
           
          
            const productsInCart =  state.products.filter(product => {
                if (product.name == payload) {
                    return product;
                }
            });
            let newState = productsInCart[0];
            console.log('from added to cart--> new state ' , newState)
            return { ...state, productsInCart:[...state.productsInCart,newState] };
          
    

        default:
            return state;
    }
}

export const addedToCart = (name) => {
    return {
        type: 'ADDEDTOCART',
        payload: name
    }
}