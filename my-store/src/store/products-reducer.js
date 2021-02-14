let initalState = {
    products: [
        { name: 'TV', category: 'electronics', price: 699.00, inStock: 5 },
        { name: 'Camera', category: 'electronics', price: 400.00, inStock: 3 },
        { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15 },
        { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25 },
        { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10 },
        { name: 'Apples', category: 'food', price: .99, inStock: 500 },
        { name: 'Eggs', category: 'food', price: 1.99, inStock: 12 },
        { name: 'Bread', category: 'food', price: 2.39, inStock: 90 },
    ],
    filetredProduct:[]

};



export default (state = initalState, action) => {
    //update the state based on an action
    // increment, decrement, reset votes action
    console.log("action in reducer ---> ", action)
    console.log("state ---> ", state)
    let {type, payload} = action;
    switch(type) {
        case 'ACTIVE':
            // increment a specific canidates votes
            // let activeCategories = state.activeCategories;
            let filetredProduct = state.products.filter(product=> {
                if (product.category == payload) {     
                    return product.category;
                } 
            });
            return {...state,filetredProduct};
            
        default:
            return state;
    }

}