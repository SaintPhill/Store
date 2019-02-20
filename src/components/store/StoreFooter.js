import React from 'react'
import {Link} from "react-router-dom";

export default class StoreFooter extends React.PureComponent {

     declOfNum = (number, titles) => {
        let cases = [2, 0, 1, 1, 1, 2];
        return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
    };

    render() {
        let userBasket = this.props.userBasket;
        let productsText = this.declOfNum(userBasket.length, ['товар', 'товара', 'товаров']);
        let footerColor = userBasket.length > 0 ? 'rgb(222, 71, 75)' : 'rgb(75, 65, 73)';

        return (
            <footer style={{backgroundColor: footerColor}}>
                <div className="container">
                    {userBasket.length === 0 ?
                        <div className="footer_text empty_basket">
                            <p>Пожалуйста, отметьте галочками несколько товаров</p>
                        </div> :
                        <div className="footer_text not_empty_basket">
                            <p>Вы выбрали <div className='number'>{userBasket.length}</div> {productsText}</p>
                            <Link to='/shopping_cart' className='btn'>перейти в корзину</Link>
                        </div>
                    }
                </div>
            </footer>
        )
    }
}