import React, { Component, createContext } from 'react';
import createUseConsumer from 'context/CreateUseConsumer';

const Context = createContext();

const { Provider, Consumer: SweetAlertConsumer } = Context;

class SweetAlertProvider extends Component {
  state = {
    number: 1,
  }
  actions = {
    increment: () => {
      this.setState(
        ({ number }) => ({ number: number + 1 })
      );
    }
  }
  render() {
    const { state, actions } = this;
    const value = { state, actions };
    return (
      <Provider value={value}>
        {this.props.children}
      </Provider>
    );
  }
}

const useSweetAlert = createUseConsumer(SweetAlertConsumer);

export {
    SweetAlertProvider,
    SweetAlertConsumer,
    useSweetAlert
};