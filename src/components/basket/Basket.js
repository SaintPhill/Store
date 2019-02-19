import React from 'react'
import './Basket.css'

export default class Basket extends React.Component {
    render() {
        return (
            <>
                <header>
                    <div className="container">
                        <div className="headline">
                            <h1>Ваши товары</h1>
                            <p>Вы выбрали 2 товара: Супер-товар, Тоже хороший товар</p>
                        </div>
                    </div>
                </header>
                <section>
                    <div className="container">
                        <h2>Преимущества покупок у нас</h2>
                        <div className='advantages'>
                            <div className="advantage_item">
                                <p className='advantage_text'>Мы классные.</p>
                            </div>
                            <div className="advantage_item">
                                <p className='advantage_text'>Мы классные и очень-очень крутые.</p>
                            </div>
                            <div className="advantage_item">
                                <p className='advantage_text'>Даже сложно описать всю нашу крутость :)</p>
                            </div>
                        </div>
                    </div>
                </section>
                <footer>
                    <div className="container">
                        <p>И это всё - для вас!</p>
                    </div>
                </footer>
            </>
        )
    }
}