// @flow
import createServer from './create-server';

const app = createServer();

app.listen(process.env.PORT || 8000);
