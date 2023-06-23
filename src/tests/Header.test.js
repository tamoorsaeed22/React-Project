import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../app/store';
import Header from '../Components/Header';

describe('Header test', () => {
  it('renders the Header', () => {
    const headerTest = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Header />
          </Router>
        </Provider>,
      )
      .toJSON();
    expect(headerTest).toMatchSnapshot();
  });
});
