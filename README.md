# Ebay Daily Deals API

A simple Node.js server written in TypeScript with a single API that fetches screenshots from [Ebay's daily deals](https://www.ebay.co.uk/deals/daily/all). Returns an image of the deal.

Uses Express and Puppeteer.

## Endpoint

```http
GET /collections/:id
```

| Parameter | Type | Description |
| --- | --- | --- |
| `id` | `number` | **Required**. Position of deal in the list. 1 = first, 2 = second, etc.  |

Sample return:

![Sample return daily deal image](./sample.png)

## How To Use

```console
# Clone this repository
$ git clone https://github.com/danbb1/daily-deals.git

# Go to directory
$ cd daily-deals

# Install dependencies
$ npm install

# Build Typescript and start server
$ npm run build && npm start

# Or start dev server
$ npm run dev
```