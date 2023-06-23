import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../app/store';
import MyProfile from '../Pages/MyProfile';

describe('MyProfile Test', () => {
  it('renders correctly', () => {
    const myProfileTest = renderer.create(
      <Provider store={store}>
        <Router>
          <MyProfile />
        </Router>
      </Provider>,
    ).toJSON();
    expect(myProfileTest).toMatchSnapshot();
  });
});
