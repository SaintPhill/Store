import React from 'react'
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import Table from "./table/Table";

export default class StoreFooter extends React.PureComponent {
    declOfNum = (number, titles) => {
        let cases = [2, 0, 1, 1, 1, 2];
        return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
    };
    getSuffix = () => {
        return this.declOfNum(this.props.userBasket.length, ['товар', 'товара', 'товаров'])
    };
    getFooterColor = () => {
        return this.props.userBasket.length > 0 ? 'rgb(222, 71, 75)' : 'rgb(75, 65, 73)';
    };

    render() {
        let userBasket = this.props.userBasket;
        return (
            <footer style={{backgroundColor: this.getFooterColor()}}>
                <div className="container">
                    {
                        userBasket.length === 0 ?
                            <div className="footer_text empty_basket">
                                <p>Пожалуйста, отметьте галочками несколько товаров</p>
                            </div>
                            :
                            <div className="footer_text not_empty_basket">
                                <div>Вы выбрали <div className='number'>{userBasket.length}</div> {this.getSuffix()}
                                </div>
                                <Link to='/shopping_cart' className='btn'>перейти в корзину</Link>
                            </div>
                    }
                </div>
            </footer>
        )
    }
}

Table.propTypes = {
    userBasket: PropTypes.array
};