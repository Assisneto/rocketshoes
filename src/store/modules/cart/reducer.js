export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD':
      const productFinded = state.find(product => product.id === action.product.id);

      if (productFinded) {
        const productChanged = { ...productFinded, amount: productFinded.amount + 1 };

        return state.map(product => (product.id === productFinded.id ? productChanged : product));
      }

      return [...state, { ...action.product, amount: 1 }];
    case '@cart/REMOVE':
      return state.filter(product => product.id !== action.id);
    case '@cart/UPDATE_AMOUNT':
      if (action.amount <= 0) return state;

      return state.map(item => (item.id === action.id ? { ...item, amount: action.amount } : item));
    default:
      return state;
  }
}
