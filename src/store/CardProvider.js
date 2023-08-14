import CartContext from "./card-context";
import {useReducer} from "react";

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state,action) => {
    if (action.type === 'ADD'){
        //concat works like map but creates new array instead of pushing
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);

        const existingCardItem = state.items[existingCartItemIndex];

        let updatedItems;

        if (existingCardItem) {

            const updatedItem = {
                ...existingCardItem,
                amount: existingCardItem.amount + action.item.amount
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex]=updatedItem;
        }else {
            updatedItems = state.items.concat(action.item);
        }


        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    else  if (action.type === 'REMOVE'){

    }
  return defaultCartState;
};

const CardProvider = (props) => {
    const [carState,dispatchCartAction ] = useReducer(cartReducer, defaultCartState);
    const addItemToCartHandler = item => {
        dispatchCartAction({type: 'ADD', item: item});
    };

    const removeItemFromCartHandler = id => {
        dispatchCartAction({type: 'REMOVE', id:id});
    };


    const cartContext = {
        items:carState.items,
        totalAmount:carState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };

    return(<CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>);

};
export default CardProvider;