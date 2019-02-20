import React from 'react'
import './Store.css'
import {connect} from "react-redux";
import Table from "./table/Table";
import {toggleProduct} from "../../redux/Actions";
import store from "../../index";
import StoreFooter from "./StoreFooter";


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
                <StoreFooter userBasket={userBasket} />
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