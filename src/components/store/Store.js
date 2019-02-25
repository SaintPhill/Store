import React from 'react'
import './Store.css'
import {connect} from "react-redux";
import Table from "./table/Table";
import {toggleProduct} from "../../redux/Actions";
import StoreFooter from "./StoreFooter";
import PropTypes from "prop-types";


class Store extends React.Component {

    render() {
        return (
            <>
                <header>
                    <div className="container">
                        <h1>Список товаров</h1>
                    </div>
                </header>
                <section>
                    <div className="container">
                        <Table products={this.props.products} handleCheckbox={this.props.toggleProduct.bind(this)}/>
                    </div>
                </section>
                <StoreFooter userBasket={this.props.userBasket}/>
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

function initMapDispatchToProps(dispatch) {
    return {
        toggleProduct: (index) => dispatch(toggleProduct(index))
    }
};

Store.propTypes = {
    products: PropTypes.array.isRequired,
    userBasket: PropTypes.array,
    toggleProduct: PropTypes.func.isRequired
};


export default connect(initMapStateToProps,initMapDispatchToProps)(Store)