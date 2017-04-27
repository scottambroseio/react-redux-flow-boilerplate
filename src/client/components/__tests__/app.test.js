// @flow

import React from 'react';
import { shallow } from 'enzyme';
import App from '../app';

jest.unmock('../app');

describe('App component', () => {
	it('should render a h1 tag', () => {
		expect(
			shallow(<App />).contains(<h1>Hello world from React!</h1>)
		).toBe(true);
	});
});
