import { Router } from 'express';
import config from 'config';

import { ServerError } from '../middleware/errorHandler';
import {
  closeBrowser,
  getAllElements,
  getImage,
  loadBrowser,
  loadPage,
} from '../utils/puppeteerHelper';

const collectionsRouter = Router();

collectionsRouter.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  const index = Number(id);

  const browser = await loadBrowser();

  try {
    if (Number.isNaN(index) || index < 1) {
      throw new ServerError('Parameter must be a positive number.', 400);
    }

    const url: string = config.get('api.url');

    const page = await loadPage(browser, url);

    const elementSelector: string = config.get('api.selector');

    const elements = await getAllElements(page, elementSelector);

    if (elements.length === 0) {
      throw new ServerError('No elements found.', 500);
    }

    if (index - 1 >= elements.length) {
      throw new ServerError('Resource not found.', 404);
    }

    const image = await getImage(elements[index - 1]);

    res.status(200).type('png').send(image);
  } catch (error) {
    next(error);
  } finally {
    await closeBrowser(browser);
  }
});

export default collectionsRouter;
