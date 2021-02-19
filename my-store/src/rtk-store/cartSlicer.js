import { createSlice } from "@reduxjs/toolkit";
import superagent from "superagent";

const api = 'https://api-js401.herokuapp.com/api/v1';

const cart = createSlice({
    name: "cart",
    initialState: {
        products: [],
        filetredProduct: [],
        productsInCart: []
    },
    reducers: {
        addProduct(state, action) {
            let exist = state.productsInCart.find((e) => {
                return e._id === action.payload._id;
            });
            if (!exist && action.payload.inStock > 0) {
                state.productsInCart.push(action.payload);
            }
        },
        deleteProduct(state, action) {
            state.productsInCart.splice(state.productsInCart.indexOf(action.payload), 1);
        },
    },
});

export const updateInstockdecrement = (obj) => (dispatch) => {
    let newObj = { ...obj, inStock: obj.inStock - 1 }
    newObj = JSON.stringify(newObj);
    return superagent.put(`${api}/products/${obj._id}`).set('Content-Type', 'application/json').send(newObj).then(data => {
        dispatch(addProduct(data.body))
    });
}
export const updateInstockIncrement = (obj) => (dispatch) => {
    console.log("dispatch :", dispatch)
    console.log("inside dispatch of pdateInstockdecrement!!!! ");
    let newObj = { ...obj, inStock: obj.inStock + 1 }
    newObj = JSON.stringify(newObj);
    console.log('the new obj after change in put incrment', newObj);
    return superagent.put(`${api}/products/${obj._id}`).set('Content-Type', 'application/json').send(newObj).then(data => {
        dispatch(deleteProduct(data.body));
    });
}
export const { addProduct, deleteProduct } = cart.actions;

export default cart.reducer;