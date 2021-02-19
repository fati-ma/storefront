import { createSlice } from "@reduxjs/toolkit";
import superagent from "superagent";

const api = 'https://api-js401.herokuapp.com/api/v1';

const categories = createSlice({
    name: "categories",
    initialState: {
        categories: [],
        activeCategories: 'electronics'
    },
    reducers: {
        active(state, action) {
            state.activeCategories = action.payload;
            console.log(state.activeCategories)
        },
        getcategories(state, action) {
            console.log('action =====>', action.payload);
            state.categories = action.payload;
        },
    }
});

export const getRemoteCategories = () => (dispatch) => {
    return superagent.get(`${api}/categories`).then(data => {
        console.log("we got the data : data.body =", data.body.results)
        dispatch(getcategories(data.body.results))
    });
}

export const { active, getcategories } = categories.actions;

export default categories.reducer;