import express from 'express';
import logger from 'morgan';

import collectionsRouter from './controllers/collections';
import { errorHandler, unknownEndpoint } from './middleware/errorHandler';

const app = express();

app.use(logger('dev'));

app.use('/collections', collectionsRouter);

app.use(errorHandler);
app.use(unknownEndpoint);

export default app;
