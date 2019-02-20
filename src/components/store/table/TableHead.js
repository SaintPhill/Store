import React from 'react'

class TableHead extends React.PureComponent {
    render() {
        return (
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
        )
    }
}

export default TableHead