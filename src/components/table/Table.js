import React from 'react'
import './Table.css'

export default class Table extends React.Component {
    render() {
        return (
            <table className='w3-table border-bottom'>
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>
                            Название
                        </th>
                        <th>
                            Рейтинг
                        </th>
                        <th>
                            Тренд
                        </th>
                        <th>
                            Ценовой сегмент
                        </th>
                        <th>
                            Отзывы покупателей
                        </th>
                        <th>
                            В корзину
                        </th>
                    </tr>
                </thead>
                <tbody>
                {this.props.products.map((product,id) => {
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
                            <td>
                                {product.reviews > 0 ?
                                    <div className='reviews_container'>
                                        <img src="./img/icon.png" alt="icon"/>
                                        <p className='product_reviews'>{product.reviews}</p>
                                    </div> : ''
                                }
                            </td>
                            <td>
                                <input type="checkbox" checked={product.checked}/>
                                <label/>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        )
    }
}