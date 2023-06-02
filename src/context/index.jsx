import { createContext, useEffect, useReducer } from "react";
import save from "../storage/save";
import load from "../storage/load";

function CartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const payloadItem = action.payload.cartItem;
      return {
        ...state,
        items: [...state.items, payloadItem],
      };
    }
    case "UPDATE_CART_ITEM_COUNT": {
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload.id) {
            item.count = action.payload.count;
            return item;
          } else {
            return item;
          }
        }),
      };
    }
    case "REMOVE_CART_ITEM": {
      return {
        ...state,
        items: state.items.filter((item) => {
          return item.id !== action.payload.id;
        }),
      };
    }
    default:
      return state;
  }
}

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(CartReducer, { items: load() });

  useEffect(() => {
    save(state.items);
  }, [state.items]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
