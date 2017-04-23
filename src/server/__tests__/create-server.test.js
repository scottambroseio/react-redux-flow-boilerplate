// @flow

import createServer from '../create-server';

jest.mock('../configure-dev-server')
	.mock('../configure-prod-server')
	.mock('../configure-base-server');

describe('create-server', () => {
	it('should not return null', () => {
		expect(null, null);
		expect(createServer()).not.toBeNull();
	});
});
