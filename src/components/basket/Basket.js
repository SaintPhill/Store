import React from 'react'
import './Basket.css'
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

class Basket extends React.Component {

    declOfNum = (number, titles) => {
        let cases = [2, 0, 1, 1, 1, 2];
        return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
    };

    endWord = (arr) => {
        return arr.map((el, i) => {
            if ((i + 1) !== arr.length) {
                return el.name + ', '
            } else return el.name + '.'
        }).join(' ');
    };

    render() {
        let userBasket = this.props.userBasket;

        return (
            <>
                <header>
                    <div className="container">
                        <div className="headline">
                            <h1>Ваши товары</h1>
                            <p>Вы выбрали {userBasket.length} { this.declOfNum(userBasket.length, ['товар', 'товара', 'товаров'])}: <span
                                className='added_products'>{this.endWord(userBasket)}</span>
                            </p>
                            <p className='to_store_btn'><Link to="/">Вернуться к покупкам</Link></p>
                        </div>
                    </div>
                </header>
                <section>
                    <div className="container">
                        <h2>Преимущества покупок у нас</h2>
                        <div className='advantages'>
                            <div className="advantage_item">
                                <p className='advantage_text'>Мы классные.</p>
                            </div>
                            <div className="advantage_item">
                                <p className='advantage_text'>Мы классные и очень-очень крутые.</p>
                            </div>
                            <div className="advantage_item">
                                <p className='advantage_text'>Даже сложно описать всю нашу крутость :)</p>
                            </div>
                        </div>
                    </div>
                </section>
                <footer className='basket_footer'>
                    <div className="container">
                        <p className='basket_footer_text'>И это всё - для вас!</p>
                    </div>
                </footer>
            </>
        )
    }
}

function initMapStateToProps(state) {
    return {
        userBasket: state.userBasket
    }
}

Basket.propTypes = {
    userBasket: PropTypes.array.isRequired
};


export default connect(initMapStateToProps)(Basket)