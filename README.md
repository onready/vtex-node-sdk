<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/VTEX_Logo.svg/1200px-VTEX_Logo.svg.png" width="300" alt="Nest Logo" /></a>
</p>

## VTEX NODE SDK

- :hammer: Built 100% with Typescript.
- :muscle: 0 dependencies. It uses the native `https` Node module.
- :tada: Promise based.
- :dizzy: Type definitions for all VTEX requests and responses.

### Requirements

- Node version >= 8

### Installation

```
npm install vtex-node-sdk --save
```

or

```
yarn add vtex-node-sdk
```

### Basic usage example

First, import the SDK:

```javascript
const { VTEX } = require('vtex-node-sdk');
```

##### Using ES6 imports
```javascript
import { VTEX } from 'vtex-node-sdk';
```

Then, use the SDK like this:

```javascript
const vtex = new Vtex('store name', 'app key', 'app token');

// Get order by id
vtex.oms.orders.getOrder('orderId')
  .then((response) => {
    console.log(response.status); // 200
    console.log(response.body); // { orderId: 'orderId', ... }
  })
  .catch((error) => {
    console.log(response.status);
    console.log(response.body);
  })
```

##### Using `async`/`await`

```javascript
try {
  const response = await vtex.oms.orders.getOrder('orderId');
  console.log(response);
} catch (error) {
  console.log(error);
}
```

### VTEX Environments

By default, the SDK makes all requests to `vtexcommercestable` environment. If you want to use another environment (For example, `vtexcommercebeta`), you can pass an extra argument like this:

```javascript
const { VTEX } = require('vtex-node-sdk')

const vtex = new Vtex('store name', 'app key', 'app token', 'beta');
```

### Current implemented APIS

The final goal is to implement all VTEX Rest Apis. Feel free to contribute.

API | Implemented
:------------: | :-------------:|
OMS | :white_check_mark: |
Antifraud Provider | :x: |
Catalog | :x: |
Checkout | :x: |
CMS | :x: |
Customer Credit | :x: |
Giftcard | :x: |
Giftcard Hub | :x: |
Giftcard Provider Protocol | :x: |
License Manager | :x: |
Logistics | :x: |
Master Data (V2) | :x: |
Payment Provider Protocol  | :x: |
Payments Gateway  | :x: |
Pricing  | :x: |
Rates and Benefits  | :x: |
Search  | :x: |
Session Manager  | :x: |
Subscriptions (V2)  | :x: |
Suggestions  | :x: |
VTEX DO  | :x: |