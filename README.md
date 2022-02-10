# Ebay Daily Deals API

A simple Node.js server with a single API that fetches screenshots from [Ebay's daily deals](https://www.ebay.co.uk/deals/daily/all). Returns an image of the deal.

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