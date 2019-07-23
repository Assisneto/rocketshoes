export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      return [...state, action.product];
    case '@cart/REMOVE':
      return state.filter(product => product.id !== action.id);
    case '@cart/UPDATE_AMOUNT_SUCCESS':
      return state.map(item => (item.id === action.id ? { ...item, amount: action.amount } : item));
    default:
      return state;
  }
}
