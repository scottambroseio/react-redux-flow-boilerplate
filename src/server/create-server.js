// @flow

import Koa from 'koa';
import configureDevServer from './configure-dev-server';
import configureProdServer from './configure-prod-server';
import configureBaseServer from './configure-base-server';

export default function createServer() {
	const app = new Koa();

	if (process.env.NODE_ENV !== 'production') {
		configureDevServer(app);
	} else {
		configureProdServer(app);
	}

	configureBaseServer(app);

	return app;
}
