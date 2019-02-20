import React from 'react'
import './Table.css'
import TableHead from "./TableHead";
import TableCheckbox from "./TableCheckbox";
import TableReviews from "./TableReviews";

export default class Table extends React.PureComponent {
    render() {
        return (
            <table className='w3-table'>

                <TableHead/>

                <tbody>
                {this.props.products.map((product) => {
                    return (
                        <tr key={product.id}>
                            <td>
                                {product.id}
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

                            <TableReviews reviews={product.reviews}/>

                            <TableCheckbox
                                checked={product.checked}
                                handleCheckbox={this.props.handleCheckbox.bind(this, product.id)}/>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        )
    }
}