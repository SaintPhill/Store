import React, {Component} from 'react';
import {Route} from "react-router-dom";
import Basket from "./components/basket/Basket";
import TablePage from "./components/store/Store";


class App extends Component {
    render() {
        return (
            <>
                <Route path={'/shopping_cart'} exact component={Basket}/>
                <Route path={'/'} exact component={TablePage}/>
            </>
        );
    }
}

export default App;
