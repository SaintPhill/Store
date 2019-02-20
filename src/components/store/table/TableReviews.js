import React from 'react'

export default class TableReviews extends React.PureComponent {
    render() {
        return (
            <td>
                {this.props.reviews > 0 ?
                    <div className='reviews_container'>
                        <img src="./img/icon.png" alt="icon"/>
                        <p className='product_reviews'>{this.props.reviews}</p>
                    </div> : ''
                }
            </td>
        )
    }
}