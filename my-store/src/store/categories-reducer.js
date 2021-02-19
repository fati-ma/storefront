let initalState = {
    categories: [],
    activeCategories: 'electronics'
}

export default (state = initalState, action) => {
    let { type, payload } = action;
    switch (type) {
        case 'GETCATEGORY':
            let categories = payload.results
            return { ...state, categories };

        case 'ACTIVE':
            const activeCategories = payload
            return { ...state, activeCategories }
        default:
            return state;
    }
}
export const active = (name) => {
    console.log("in increment action name=", name);
    return {
        type: 'ACTIVE',
        payload: name
    }
}