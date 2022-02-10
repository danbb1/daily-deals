import { Router } from 'express';

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
    if (Number.isNaN(index) || index < 0) {
      throw new ServerError('Parameter must be a positive number.', 400);
    }

    const page = await loadPage(
      browser,
      'https://www.ebay.co.uk/deals/daily/all',
    );

    const elements = await getAllElements(page, '.dne-itemtile');

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
