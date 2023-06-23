import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../app/store';
import Rockets from '../Pages/Rockets';

describe('Rockets Test', () => {
  it('renders correctly', () => {
    const rocketsTest = renderer.create(
      <Provider store={store}>
        <Router>
          <Rockets />
        </Router>
      </Provider>,
    ).toJSON();
    expect(rocketsTest).toMatchSnapshot();
  });
});
