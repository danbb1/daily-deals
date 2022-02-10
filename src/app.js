import express from 'express';
import logger from 'morgan';

import { unknownEndpoint } from './middleware/errorHandler.js';

const app = express();

app.use(logger('dev'));

// Error handling
app.use(unknownEndpoint);

export default app;
