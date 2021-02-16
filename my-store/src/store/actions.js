import superagent from 'superagent';


const api = 'https://api-js401.herokuapp.com/api/v1';


export const getRemoteData = () => (dispatch) => {
    console.log("dispatch :", dispatch)
    console.log("inside dispatch of getRemoteData!!!! ")
    return superagent.get(`${api}/products`).then(data => {
        console.log("we got the data : data.body =", data.body)
        dispatch(getAction(data.body))
    });
}
export const getRemoteCategories = () => (dispatch) => {
    return superagent.get(`${api}/categories`).then(data => {
        console.log("we got the data : data.body =", data.body)
        dispatch(getcategories(data.body))
    });
}
export const updateInstockdecrement = (obj) => (dispatch) => {
    let newObj = { ...obj, inStock: obj.inStock - 1 }
    newObj = JSON.stringify(newObj);
    return superagent.put(`${api}/products/${obj._id}`).set('Content-Type', 'application/json').send(newObj).then(data => {
        dispatch(addedToCart(data.body))
    });
}
export const updateInstockIncrement = (obj) => (dispatch) => {
    console.log("dispatch :", dispatch)
    console.log("inside dispatch of pdateInstockdecrement!!!! ");
    let newObj = { ...obj, inStock: obj.inStock + 1 }
    newObj = JSON.stringify(newObj);
    console.log('the new obj after change in put incrment', newObj);
    return superagent.put(`${api}/products/${obj._id}`).set('Content-Type', 'application/json').send(newObj).then(data => {
        dispatch(deletefromCart(data.body));
    });
}

const getAction = payload => {

    return {
        type: 'GET',
        payload: payload
    }
}
const getcategories = payload => {
    return {
        type: 'GETCATEGORY',
        payload: payload
    }
}
const addedToCart = payload => {
    return {
        type: 'ADDEDTOCART',
        payload: payload
    }
}
const deletefromCart = payload => {
    return {
        type: 'DELETE',
        payload: payload
    }
}