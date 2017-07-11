var foo = function () {
  console.log('fighters')
}

var fruit = {
  name: 'apple',
  price: 7.9
}

class Fruit {
  constructor(name, price) {
    this.name = name
    this.price = price
  }
}

// exporting multiple variables
module.exports = {
  foo: foo,
  fruit: fruit,
  Fruit: Fruit
}
