import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import CatList from '../components/CatList';
import cats from './mock/cats.json';
import catsEmpty from './mock/cats_empty.json';

Enzyme.configure({ adapter: new Adapter() });

function mockStore(initialState) {
  const mockReducer = (state = initialState, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };

  return mockReducer;
}

function renderWithState(state) {
  const cats = mockStore(state);
  const rootReducer = combineReducers({ cats });
  const store = createStore(rootReducer);
  return mount(
    <Provider store={store}>
      <Router>
        <CatList />
      </Router>
    </Provider>
  );
}

describe('<CatList />', () => {
  it('Should render loader when fetching data', () => {
    const wrapper = renderWithState(catsEmpty);

    const catList = wrapper.children();

    const title = catList.find('.cat-list-header');
    expect(title.text()).toBe('CAT LIST');

    const loader = catList.find('.cat-list-body-loader');
    expect(loader.exists()).toBeTruthy();

    const breedItem = catList.find('.cat-avatar');
    expect(breedItem.exists()).toBeFalsy();
    expect(breedItem.length).toBe(0);
  });

  it('Should render the list when array is not empty', () => {
    const wrapper = renderWithState(cats);

    const catList = wrapper.children();

    const title = catList.find('.cat-list-header');
    expect(title.text()).toBe('CAT LIST');

    const loader = catList.find('.cat-list-body-loader');
    expect(loader.exists()).toBeFalsy();

    const breedItem = catList.find('.cat-avatar');
    expect(breedItem.exists()).toBeTruthy();
    expect(breedItem.length).toBe(1);
  });
});
