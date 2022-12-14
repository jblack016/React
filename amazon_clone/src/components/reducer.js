// here we define all the appilcation level states and define actions to make the changes to the state

import Product from "./Product";

export const initialState = {
    basket: [],
}

// Selector

export const getBasketTotal = (basket) => {
    return (basket?.reduce((amount, item) => item.price + amount, 0));
}

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            }

        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );

            let newBasket = [...state.basket];

            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    "Product(id: ${action.id}) is not in the cart!"
                )
            }
            return {
                ...state,
                basket: newBasket
            }

        default:
            return state;
    }
}

export default reducer;