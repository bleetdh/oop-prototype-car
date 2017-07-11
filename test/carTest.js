// load the assert plugin (for testing)
var assert = require('assert')
var success = require('./helpers/success')

// //// TEST PHASE III /////////////////////////////////////////
// load the Car object for
var Car = require('../src/Car')
// update the car instantiation below according to the test given
var honda = new Car('Honda', 'Vuzel', 2017, 'Blue', 7)

// starter code - testing constructor
console.log('Testing Constructor')
assert.strictEqual(honda.make, 'Honda', 'Constructor did not set make.')
assert.strictEqual(honda.model, 'Vuzel', 'Constructor did not set model.')
assert.strictEqual(honda.year, 2017, 'Constructor did not set year.')
assert.strictEqual(honda.color, 'Blue', 'Constructor did not set color.')
assert.strictEqual(honda.seats, 7, 'Constructor did not set seats.')

// run the success function once you're done with a set of tests
success()

// test sell
console.log('Testing selling a car')
honda.sell('Lenny')
assert.strictEqual(honda.owner, 'Lenny', 'Owner is wrong!')
success()

// test sell to non string value
console.log('Testing selling a car to non string')
honda.sell('0123')
assert.strictEqual(honda.owner, 'Lenny', 'Owner should stay if newOwner is non string')
success()

// // normal case: test sell update the previousOwners
console.log('Testing previousOwners after selling')
honda.sell('Shimei')
var lastPrevOwner = honda.previousOwners[ honda.previousOwners.length - 1 ]
assert.strictEqual(lastPrevOwner, 'Lenny', 'There should be two prevOwner after two successful selling')
success()
// You're on your own from here
// Testing Car.start
console.log('Testing if running value of car is true after starting')
honda.start()
assert.strictEqual(honda.running, true, 'Car should be running after start function')
success()
// Testing Car.off
console.log('Testing if running value of car is false after off-ing')
honda.off()
assert.strictEqual(honda.running, false, 'Car should not be running after off function')
success()
// Testing Car.driveTo(destination)
console.log('Testing if car drive to destination only works when running')
honda.start()
assert.strictEqual(honda.driveTo('GA'), true, 'Car should not be travelling if off')
// assert.strictEqual(honda.driveTo('GA'), 'driving to GA', 'Car should be driving to GA')
success()
// Testing Car.park
console.log('Testing if car can only be parked when not running')
honda.off()
assert.strictEqual(honda.park(), true, 'Car should not be parked if running')
success()
