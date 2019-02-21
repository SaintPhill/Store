import React from 'react'
import PropTypes from "prop-types";

export default class TableRow extends React.PureComponent {

    render() {
        let product = this.props.product;
        return (
            <tr>
                <td>
                    {this.props.product.id}
                </td>
                <td>
                    <span className='product_name'>{product.name}</span>
                </td>
                <td>
                    <span className='product_rating'>{product.rating}</span>
                </td>
                <td>
                    <span className='product_trend'>{product.trend}</span>
                </td>
                <td>
                    <div className='product_price'>{product.price}</div>
                </td>
                <td>
                    {product.reviews > 0 ?
                        <div className='reviews_container'>
                            <img src="./img/icon.png" alt="icon"/>
                            <p className='product_reviews'>{product.reviews}</p>
                        </div> : ''
                    }
                </td>
                <td>
                    <label>
                        <input
                            type="checkbox"
                            checked={product.checked}
                            onChange={this.props.handleCheckbox}/>
                        <span/>
                    </label>
                </td>
            </tr>
        )
    }
}

TableRow.propTypes = {
    product: PropTypes.object.isRequired,
    handleCheckbox: PropTypes.func.isRequired
};