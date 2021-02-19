import { createSlice } from "@reduxjs/toolkit";
import superagent from "superagent";

const api = 'https://api-js401.herokuapp.com/api/v1';

const products = createSlice({
    name: "products",
    initialState: {
        products: [],
        filetredProduct: [],
        productsInCart: [],
        productDetail: {}
    },
    reducers: {
        activeProduct(state, action) {
            console.log('from product slicer', action.payload)
            state.filetredProduct = state.products.filter(product => {
                if (product.category == action.payload) {
                    return product;
                }
            });
        },
        setProducts(state, action) {
            state.products = action.payload;
        },
        setProductDetails(state, action) {
            console.log('from the detailed object', action.payload)
            state.productDetail = action.payload;
        },
    },
});




export const getRemoteData = () => (dispatch) => {
    console.log("dispatch :", dispatch)
    console.log("inside dispatch of getRemoteData!!!! ")
    return superagent.get(`${api}/products`).then(data => {
        console.log("we got the data : data.body =", data.body)
        dispatch(setProducts(data.body.results))
    });
}

export const getDetailedObj = (id) => (dispatch) => {
    return superagent.get(`${api}/products/${id}`).then(data => {
        console.log("we got the data : data.body =", data.body)
        dispatch(setProductDetails(data.body))
    });
}

export const { setProducts, setProductDetails, activeProduct } = products.actions;

export default products.reducer;