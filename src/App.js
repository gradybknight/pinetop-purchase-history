import React, { Component } from 'react';
import './App.css';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import Header from './components/Header';
import NewPurchaseContainer from './containers/NewPurchaseContainer';
import * as purchaseActions from './actions/purchaseActions';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <NewPurchaseContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
