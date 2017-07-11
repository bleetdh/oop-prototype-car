// var exportedFn = require('./export')
// exportedFn()

// var exportedObj = require('./export')
// console.log(exportedObj)

// var exportedClass = require('./export')
// console.log(exportedClass)

// var apple = new exportedClass('apple', 7.9)
// var pineapple = new exportedClass('pineapple', 12)
// console.log(apple)
// console.log(pineapple)

var fromExport = require('./export')
// console.log(fromExport)
fromExport.foo()
var apple = new fromExport.Fruit('apple', 7.9)
console.log(apple)
