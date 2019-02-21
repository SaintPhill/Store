export const ACTIONS = {
    TOGGLE_PRODUCT: 'TOGGLE_TODO'
};


export const toggleProduct = (id) => {
    return {
        type: ACTIONS.TOGGLE_PRODUCT,
        payload: {
            id
        }
    }
};