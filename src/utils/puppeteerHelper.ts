import puppeteer, { Browser, Page, ElementHandle } from 'puppeteer';

export const loadBrowser = async () => {
  const browser = await puppeteer.launch();

  return browser;
};

export const closeBrowser = async (browser: Browser) => {
  await browser.close();
};

export const loadPage = async (browser: Browser, url: string) => {
  const page = await browser.newPage();
  await page.goto(url);

  return page;
};

export const getAllElements = async (page: Page, selector: string) => {
  const elements = await page.$$(selector);

  return elements;
};

export const getImage = async (element: ElementHandle<Element>) => {
  const image = await element.screenshot();

  return image;
};
