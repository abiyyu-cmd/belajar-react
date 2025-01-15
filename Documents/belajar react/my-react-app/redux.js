// reducer

import { legacy_createStore } from "redux";

const cartReducer = (
     state = {
     cart : [{id: 1, qty: 1}],
    }, 
    action
) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.payLoad],
            };
            default:
                return state;
    }
};

// store

const store = legacy_createStore(cartReducer);
console.log("oncreate store : ", store.getState());

// subscribe
store.subscribe(() => {
    console.log("STORE CHANGE : ", store.getState());
})

// dispatch
const action1 = { type: "ADD_TO_CART", payLoad: { id: 2, qty: 20}};
store.dispatch(action1);
const action2 = { type: "ADD_TO_CART", payLoad: { id: 3, qty: 5}};
store.dispatch(action2);