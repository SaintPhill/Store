import React from 'react'
import './Store.css'
import {connect} from "react-redux";
import Table from "./table/Table";
import {toggleProduct} from "../../redux/Actions";
import store from "../../index";
import StoreFooter from "./StoreFooter";
import PropTypes from "prop-types";


class Store extends React.Component {

    toggleProduct = (i) => {
        store.dispatch(toggleProduct(i));
    };

    render() {
        let products = this.props.products;
        let userBasket = this.props.userBasket;
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
                <StoreFooter userBasket={userBasket}/>
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

Store.propTypes = {
    products: PropTypes.array.isRequired,
    userBasket: PropTypes.array
};


export default connect(initMapStateToProps)(Store)