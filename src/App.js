import React, { Component } from 'react';
import './App.css'
import {Route} from "react-router-dom";
import Basket from "./components/basket/Basket";
import TablePage from "./components/table/TablePage";



class App extends Component {
  render() {
    return (
        <>
            <Route path='/basket' component={Basket}/>
            <Route path='/table' component={TablePage}/>
        </>
    );
  }
}

export default App;
