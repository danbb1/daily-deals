import { Router } from 'express';

import { ServerError } from '../middleware/errorHandler.js';

const collectionsRouter = Router();

collectionsRouter.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  const index = Number(id);

  try {
    if (Number.isNaN(index) || index < 0) {
      throw new ServerError('Parameter must be a positive number', 400);
    }

    res.send('HELLO');
  } catch (error) {
    next(error);
  }
});

export default collectionsRouter;
