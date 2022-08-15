export const addCart = (product) => {
    return {
        type: 'ADD_TO_CART',
        product
    }
}

export const removeCart = (product) => {
    return {
        type: 'REMOVE_FROM_CART',
        product
    }
}