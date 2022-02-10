import puppeteer from 'puppeteer';

export const loadBrowser = async () => {
  const browser = await puppeteer.launch();

  return browser;
};

export const closeBrowser = async browser => {
  await browser.close();
};

export const loadPage = async (browser, url) => {
  const page = await browser.newPage();
  await page.goto(url);

  return page;
};

export const getAllElements = async (page, selector) => {
  const elements = await page.$$(selector);

  return elements;
};

export const getImage = async element => {
  const image = await element.screenshot({ encoding: 'base64' });

  return image;
};
