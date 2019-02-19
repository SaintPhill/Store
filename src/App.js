import React, { Component } from 'react';
import Table from "./components/Table";
import './App.css'

const PRODUCTS = [
    {id: 1, price: '₽₽₽₽', reviews: 5, name: 'Супер-товар', rating: '2.87', trend: '-', checked: false},
    {id: 2, price: '₽₽₽₽', reviews: '', name: 'Тоже хороший товар', rating: '1.94', trend: '+14', checked: false},
    {id: 3, price: '₽₽₽', reviews: '', name: 'Неплохой товар', rating: '1.69', trend: '+4', checked: false}
];


class App extends Component {
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
                    <Table products={PRODUCTS}/>
                </div>
            </section>
            <footer>
                <div className="container">
                    <p className="footer_text">Пожалуйста, отметьте галочками несколько товаров</p>
                </div>
            </footer>
        </>
    );
  }
}

export default App;
