import React from 'react'
import './Store.css'
import {connect} from "react-redux";
import Table from "./Table";
import {toggleProduct} from "../../redux/Actions";
import store from "../../index";
import {Link} from "react-router-dom";


class Store extends React.Component {

    toggleProduct = (i) => {
        store.dispatch(toggleProduct(i));
    };

    render() {
        let products = this.props.products;
        let userBasket = this.props.userBasket;
        let footerColor = userBasket.length > 0 ? 'red' : 'black';
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
                        <h1>Список товаров</h1>
                    </div>
                </header>
                <section>
                    <div className="container">
                        <Table products={products} handleCheckbox={this.toggleProduct.bind(this)}/>
                    </div>
                </section>
                <footer style={{backgroundColor: footerColor}}>
                    <div className="container">
                        {userBasket.length === 0 ?
                            <div className="footer_text empty_basket">
                                <p>Пожалуйста, отметьте галочками несколько товаров</p>
                            </div> :
                            <div className="footer_text not_empty_basket">
                                <p>Вы выбрали <div>{userBasket.length}</div> {producstText}</p>
                                <Link to='/basket' className='btn'>перейти в корзину</Link>
                            </div>
                        }
                    </div>
                </footer>
            </>
        )
    }
}


function initMapStateToProps(state) {
    return {
        products: state.products,
        userBasket: state.userBasket
    }
}



export default connect(initMapStateToProps)(Store)