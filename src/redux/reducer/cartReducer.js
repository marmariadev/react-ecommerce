const cart = [];

const cartReducer = (state = cart, action) => {
    const product = action.payload;
    // check if product is already in cart
    const isExist = state.find(item => item.id === product.id);

    switch (action.type) {
        case 'ADD_TO_CART':
            if (isExist) {
                // Increase the quantity if product is already in cart
                return state.map(item => {
                    if (item.id === product.id) {
                        return {
                            ...item,
                            quantity: item.quantity + 1
                        }
                    }
                    return item;
                }
                );
            } else {
                // Add new product to cart
                return [...state, { ...product, quantity: 1 }];
            }
        case 'REMOVE_FROM_CART':

            if (isExist) {
                // Decrease the quantity if product is already in cart
                return state.map(item => {
                    if (item.id === product.id) {
                        return {
                            ...item,
                            quantity: item.quantity - 1
                        }
                    }
                    return item;
                }
                );
            } else {
                // Remove the product from the cart
                return state.filter(item => item.id !== product.id);
            }

        default:
            return state;
    }
}

export default cartReducer;