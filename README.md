# node-json-file
Simple and easy Json file read/write package (utf8 compatible)

INSTALL
---
```bash
npm i @drmalus/json-file
```

IMPORT
---
```bash
const JsonFile = require('@drmalus/json-file');
```



API
---

* [`write(file, data)`]
* [`update(file, key, value)`]
* [`pushTo(file, data)`]
* [`readFrom(file, defaultValue = [])`]

### write(file, data)
```js
const cars = ['audi', 'bmw', 'citroen'];
JsonFile.write('cars.json', cars);
```

### update(file, key, value)
```js
// item.json -> {name: 'item', sku: 'oldsku'}
JsonFile.update('item.json', 'sku', 'newsku'); 
// item.json -> {name: 'item', sku: 'newsku'}
```

### pushTo(file, data)
```js
// products.json -> [{name: 'Phone', price: 1000}];
const newItem = [{name: 'Shoe', price: 200}];
JsonFile.pushTo('products.json', newItem);

// OR YOU CAN PUSH MULTIPLE ITEMS:

// products.json -> [{name: 'Phone', price: 1000}, {name: 'Shoe', price: 200}];
const twoMoreShoes = [{name: 'Shoe2', price: 200},{name: 'Shoe3', price: 200}];
JsonFile.pushTo('products.json', twoMoreShoes);
/* 
products.json -> [
    {name: 'Phone', price: 1000},
    {name: 'Shoe', price: 200},
    {name: 'Shoe2', price: 200},
    {name: 'Shoe3', price: 200}
];
 */

```

### readFrom(file, defaultValue = [])
```js
JsonFile.readFrom('contacts.json', []); 
// if contacts file missing or empty it returns []

JsonFile.readFrom('contacts.json', [{name: 'Default John', age: 33}]); 
// if contacts file missing or empty it returns [{name: 'Default John', age: 33}]
```
