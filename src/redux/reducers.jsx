import products from '../data/products.json';

const initialState = {
  products: products.map(product => ({
    ...product,
    quantity: 0,
  })),
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
      };

    case 'DECREMENT':
      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.payload && product.quantity > 0
            ? { ...product, quantity: product.quantity - 1 }
            : product
        ),
      };

    default:
      return state;
  }
};

export default productReducer;
