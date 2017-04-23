// @flow

const use = jest.fn();

const koa = jest.fn(() => ({
	use,
}));

export default koa;
