import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Main, FlowerMap } from './pages';


class App extends Component {
    render() {
        return (
            <>
                <Route exact path="/" component={Main}/>
                <Route exact path="/flowermap" component={FlowerMap}/>
            </>
        );
    }
}

export default App;