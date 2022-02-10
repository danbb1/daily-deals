import express from 'express';
import logger from 'morgan';

import collectionsRouter from './controllers/collections.js';
import { errorHandler, unknownEndpoint } from './middleware/errorHandler.js';

const app = express();

app.use(logger('dev'));

app.use('/collections', collectionsRouter);

// Error handling
app.use(errorHandler);
app.use(unknownEndpoint);

export default app;
