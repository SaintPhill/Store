import React from 'react'

export default class TableRow extends React.PureComponent {

    render() {

        return (
            <tr>
                <td>
                    {this.props.product.id}
                </td>
                <td>
                    <span className='product_name'>{this.props.product.name}</span>
                </td>
                <td>
                    <span className='product_rating'>{this.props.product.rating}</span>
                </td>
                <td>
                    <span className='product_trend'>{this.props.product.trend}</span>
                </td>
                <td>
                    <div className='product_price'>{this.props.product.price}</div>
                </td>
                <td>
                    {this.props.product.reviews > 0 ?
                        <div className='reviews_container'>
                            <img src="./img/icon.png" alt="icon"/>
                            <p className='product_reviews'>{this.props.product.reviews}</p>
                        </div> : ''
                    }
                </td>
                <td>
                    <label>
                        <input
                            type="checkbox"
                            checked={this.props.product.checked}
                            onChange={this.props.handleCheckbox}/>
                        <span/>
                    </label>
                </td>
            </tr>
        )
    }
}