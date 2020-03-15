import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import CatBreed from '../components/CatBreed';
import breeds from './mock/breeds.json';
import breedsEmpty from './mock/breeds_empty.json';

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
  const breeds = mockStore(state);
  const rootReducer = combineReducers({ breeds });
  const store = createStore(rootReducer);
  return mount(
    <Provider store={store}>
      <CatBreed />
    </Provider>
  );
}

describe('<CatBreed />', () => {
  it('Should render loader when fetching data', () => {
    const wrapper = renderWithState(breedsEmpty);

    const catBreed = wrapper.children();

    const title = catBreed.find('.cat-breed-header');
    expect(title.text()).toBe('CAT BREEDS');

    const loader = catBreed.find('.cat-breed-body-loader');
    expect(loader.exists()).toBeTruthy();

    const breedItem = catBreed.find('.cat-breed-item');
    expect(breedItem.exists()).toBeFalsy();
    expect(breedItem.length).toBe(0);
  });

  it('Should render the list when array is not empty', () => {
    const wrapper = renderWithState(breeds);

    const catBreed = wrapper.children();

    const title = catBreed.find('.cat-breed-header');
    expect(title.text()).toBe('CAT BREEDS');

    const loader = catBreed.find('.cat-breed-body-loader');
    expect(loader.exists()).toBeFalsy();

    const breedItem = catBreed.find('.cat-breed-item');
    expect(breedItem.exists()).toBeTruthy();
    expect(breedItem.length).toBe(1);
  });
});
