import React from 'react'
import './Basket.css'
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class Basket extends React.Component {
    render() {
        let userBasket = this.props.userBasket;
        let producstText;
        switch (true) {
            case (userBasket.length === 1): producstText ='товар';
                break;
            case (userBasket.length > 1 && userBasket.length < 5): producstText ='товара';
                break;
            case (userBasket.length > 4 ): producstText ='товаров';
        }
        return (
            <>
                <header>
                    <div className="container">
                        <div className="headline">
                            <h1>Ваши товары</h1>
                            <p>Вы выбрали {userBasket.length} {producstText}: {userBasket.map((el,i) => {
                                if((i+1) !== userBasket.length) {
                                    return el.name + ', '
                                } else return el.name + '.'
                            })}
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



export default connect(initMapStateToProps)(Basket)