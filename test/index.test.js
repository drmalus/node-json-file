const fs = require('fs');
const JsonFile = require('@drmalus/json-file');

test('readFrom() reads properly from names.json', () => {
    const namesJsonFile = __dirname + '/names.json';
    const namesFileExpectedContent = [{
        "first": "John",
        "last": "Smith"
    },{
        "first": "Jane",
        "last": "Doe"
    }];
    const namesFileContent = JsonFile.readFrom(namesJsonFile);
    expect(namesFileContent.length).toBe(2);
    expect(namesFileContent).toEqual(namesFileExpectedContent);
});

test('write() creates and write properly', () => {
    // delete the test file if exists
    const carsTestFile = __dirname + '/cars.json';
    if (fs.existsSync(carsTestFile)) fs.unlinkSync(carsTestFile);

    // write the test file
    const cars = ['audi', 'bmw', 'citroen'];
    JsonFile.write(carsTestFile, cars);

    const carsFileContent = JsonFile.readFrom(carsTestFile);
    expect(carsFileContent.length).toBe(3);
    expect(carsFileContent).toEqual(cars);

    fs.unlinkSync(carsTestFile);
});

test('update() update a value properly by key', () => {
    // delete the test file if exists
    const contactTestFile = __dirname + '/contacts.json';
    if (fs.existsSync(contactTestFile)) fs.unlinkSync(contactTestFile);

    // write the test file
    const contact = {name: 'John', age: 35};
    JsonFile.write(contactTestFile, contact);

    const newName = 'Mary';
    JsonFile.update(contactTestFile, 'name', newName);
    const contactFileContent = JsonFile.readFrom(contactTestFile);
    expect(contactFileContent.name).toBe(newName);

    fs.unlinkSync(contactTestFile);
});

test('pushTo() append properly to an existing array', () => {
    // delete the test file if exists
    const productsTestFile = __dirname + '/products.json';
    if (fs.existsSync(productsTestFile)) fs.unlinkSync(productsTestFile);

    // write the test file
    const products = [{name: 'Phone', price: 1000}];
    JsonFile.write(productsTestFile, products);

    const newItem = {name: 'Shoe', price: 200};
    JsonFile.pushTo(productsTestFile, [newItem]);
    const productsFileContent = JsonFile.readFrom(productsTestFile);
    expect(productsFileContent.length).toBe(2);
    expect(productsFileContent[1]).toEqual(newItem);

    const shoe2 = {name: 'Shoe2', price: 200};
    const shoe3 = {name: 'Shoe3', price: 200};
    const newItems = [shoe2,shoe3];
    JsonFile.pushTo(productsTestFile, newItems);
    const productsFileContent2 = JsonFile.readFrom(productsTestFile);
    expect(productsFileContent2.length).toBe(4);
    expect(productsFileContent2[2]).toEqual(shoe2);
    expect(productsFileContent2[3]).toEqual(shoe3);

    fs.unlinkSync(productsTestFile);
});


