<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/VTEX_Logo.svg/1200px-VTEX_Logo.svg.png" width="300" alt="VTEX Logo" style="margin-right: 20px" />
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" width="200" alt="Node Logo" style="margin-left: 20px" />
  
</p>

## VTEX NODE SDK

![Node.js CI](https://github.com/onready/vtex-node-sdk/workflows/Node.js%20CI/badge.svg)

- :hammer: Built 100% with Typescript.
- :muscle: 0 dependencies. It uses the native `https` Node module.
- :tada: Promise based.
- :dizzy: Type definitions for many VTEX requests and responses.

<ins>**Note**</ins>: *<strong>This is not a VTEX official package, we are VTEX Partners since 2017 and we developed this to collaborate with VTEX Community.</strong>*

### Requirements

- Node version >= 8

### Installation

```
npm install @onreadydesa/vtex-node-sdk --save
```

or

```
yarn add @onreadydesa/vtex-node-sdk
```

### Basic usage example

First, import the SDK:

```javascript
const { VTEX } = require('@onreadydesa/vtex-node-sdk');
```

##### Using ES6 imports
```javascript
import { VTEX } from '@onreadydesa/vtex-node-sdk';
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
const { VTEX } = require('@onreadydesa/vtex-node-sdk')

const vtex = new Vtex('store name', 'app key', 'app token', 'beta');
```

### Current implemented APIS

The final goal is to implement all VTEX Rest Apis. Feel free to contribute.

API | Implemented
:------------: | :-------------:|
OMS | :white_check_mark: |
Logistics | :white_check_mark: |
Pricing  | :white_check_mark: |
Master Data (V2) | :white_check_mark: (*) <em>Attachments API pending</em> |
Catalog | :white_check_mark: |
Search  | Comming soon... |
Antifraud Provider | :x: |
Checkout | :x: |
CMS | :x: |
Customer Credit | :x: |
Giftcard | :x: |
Giftcard Hub | :x: |
Giftcard Provider Protocol | :x: |
License Manager | :x: |
Payment Provider Protocol  | :x: |
Payments Gateway  | :x: |
Rates and Benefits  | :x: |
Session Manager  | :x: |
Subscriptions (V2)  | :x: |
Suggestions  | :x: |
VTEX DO  | :x: |