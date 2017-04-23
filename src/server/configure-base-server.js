// @flow
import mount from 'koa-mount';
import graphqlHTTP from 'koa-graphql';
import compress from 'koa-compress';
import { buildSchema } from 'graphql';

const schema = buildSchema(`
	type Query {
		test: String
	}
`);

const resolver = {
	test: () => 'test',
};

export default function configureBaseServer(app: any) {
	app.use(compress());

	app.use(mount('/graphql', graphqlHTTP({
		schema,
		graphiql: process.env.NODE_ENV !== 'production',
		rootValue: resolver,
	})));
}
