import React from 'react'
import './Table.css'
import TableHead from "./TableHead";
import TableRow from "./TableRow";

export default class Table extends React.PureComponent {
    render() {
        return (
            <table className='w3-table'>
                <TableHead/>
                <tbody>
                {this.props.products.map((product) => {
                    return (
                        <TableRow handleCheckbox={this.props.handleCheckbox.bind(this, product.id)} id={product.id}
                                  product={product}/>

                    )
                })}
                </tbody>
            </table>
        )
    }
}