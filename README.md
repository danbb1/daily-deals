# Ebay Daily Deals API

A simple node API that fetches screenshots of the [Ebay's daily deals](https://www.ebay.co.uk/deals/daily/all).


```http
GET /collections/:id
```

| Parameter | Type | Description |
| --- | --- | --- |
| `id` | `number` | **Required**. Position of deal on the page. 1 = first, 2 = second  |
