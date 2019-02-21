import React from 'react'
import './Table.css'
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import PropTypes from 'prop-types'

export default class Table extends React.PureComponent {
    render() {
        return (
            <table className='w3-table'>
                <TableHead/>
                <tbody>
                {this.props.products.map((product) => {
                    return (
                        <TableRow handleCheckbox={this.props.handleCheckbox.bind(this, product.id)} key={product.id}
                                  product={product}/>

                    )
                })}
                </tbody>
            </table>
        )
    }
}

Table.propTypes = {
    products: PropTypes.array.isRequired,
    handleCheckbox: PropTypes.func.isRequired
};
