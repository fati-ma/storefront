let initalState = {
    categories: [
        {
            name: "food",
            display_name: "Food",
            description: "delicious food"
        },
        {
            name: "electronics",
            display_name: "Electronics",
            description: "original electronics from Japan"
        },
        {
            name: "clothing",
            display_name: "Clothing",
            description: "turkish clothes"
        }
    ],
    activeCategories: 'electronics'
}

export default (state = initalState, action) => {
    //update the state based on an action
    // increment, decrement, reset votes action
    console.log("action in reducer ---> ", action)
    console.log("state ---> ", state)
    let { type, payload } = action;
    switch (type) {
        case 'ACTIVE':
            // increment a specific canidates votes
            const activeCategories = payload
            //update --> the active
            return { ...state, activeCategories}



        default:
            return state;
    }
}

// actions:
export const active = (name) => {
    console.log("in increment action name=", name);
    return {
        type: 'ACTIVE',
        payload: name
    }
}