// @flow
import webpack from 'webpack';
import webpackDevMiddleware from 'koa-webpack-dev-middleware';
import webpackHotMiddleware from 'koa-webpack-hot-middleware';

import config from '../../webpack.config.dev';

export default function configureDevServer(app: any) {
	const compiler = webpack(config);

	app.use(webpackDevMiddleware(compiler, {
		quiet: true,
	}));
	app.use(webpackHotMiddleware(compiler));
}
