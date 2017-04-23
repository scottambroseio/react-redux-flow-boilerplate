// @flow
import serve from 'koa-static';
import path from 'path';

export default function configureProdServer(app: any) {
	app.use(serve(path.resolve(__dirname, '../client')));
}
