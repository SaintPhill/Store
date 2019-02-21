import {ACTIONS} from './Actions'

const initState = {
    products: [
        {id: 1, price: '₽₽₽₽', reviews: 5, name: 'Супер-товар', rating: '2.87', trend: '-', checked: false},
        {id: 2, price: '₽₽₽₽', reviews: '', name: 'Тоже хороший товар', rating: '1.94', trend: '+14', checked: false},
        {id: 3, price: '₽₽₽', reviews: '', name: 'Неплохой товар', rating: '1.69', trend: '+4', checked: false}
    ],
    userBasket: [],
};


function todoReducer(state = initState, action) {
    switch (action.type) {
        case ACTIONS.TOGGLE_PRODUCT:
            let arr = state.products.map((product) => {
                return {...product, checked: product.id === action.payload.id ? !product.checked : product.checked};
            });
            let userBasket = arr.filter(el => el.checked);
            return {...state, products: arr, userBasket};

        default:
            return state;
    }
}

export default todoReducer