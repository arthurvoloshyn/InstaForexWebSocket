import React from 'react';
import renderer from 'react-test-renderer';
import Quotes from '../src/views/screens/Quotes';

describe('App', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Quotes />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
