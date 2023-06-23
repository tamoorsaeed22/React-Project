import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../app/store';
import Missions from '../Pages/Missions';

describe('Missions Test', () => {
  it('renders correctly', () => {
    const missionsTest = renderer.create(
      <Provider store={store}>
        <Router>
          <Missions />
        </Router>
      </Provider>,
    ).toJSON();
    expect(missionsTest).toMatchSnapshot();
  });
});
