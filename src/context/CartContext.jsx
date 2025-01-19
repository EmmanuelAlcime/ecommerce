import { createContext, useContext, useReducer } from 'react'

// Initial cart state
const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
}

// Reducer function to handle cart actions
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id,
      )
      let updatedItems

      if (existingItemIndex >= 0) {
        // Update existing item quantity
        updatedItems = [...state.items]
        updatedItems[existingItemIndex].quantity += action.payload.quantity
      } else {
        // Add new item to cart
        updatedItems = [...state.items, action.payload]
      }

      return {
        ...state,
        items: updatedItems,
        totalQuantity: state.totalQuantity + action.payload.quantity,
        totalPrice:
          state.totalPrice + action.payload.price * action.payload.quantity,
      }
    }

    case 'REMOVE_ITEM': {
      const filteredItems = state.items.filter(
        (item) => item.id !== action.payload.id,
      )
      const removedItem = state.items.find(
        (item) => item.id === action.payload.id,
      )

      return {
        ...state,
        items: filteredItems,
        totalQuantity: state.totalQuantity - removedItem.quantity,
        totalPrice: state.totalPrice - removedItem.price * removedItem.quantity,
      }
    }

    case 'CLEAR_CART':
      return initialState

    default:
      return state
  }
}

// Create context
const CartContext = createContext()

// CartProvider component to wrap the application
export const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState)

  const addItem = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item })
  }

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id } })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  return (
    <CartContext.Provider value={{ cartState, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

// Custom hook to use cart context
export const useCart = () => {
  return useContext(CartContext)
}
