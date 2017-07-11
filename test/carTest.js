// load the assert plugin (for testing)
var assert = require('assert')
var success = require('./helpers/success')

// //// TEST PHASE III /////////////////////////////////////////
// load the Car object for
var Car = require('../src/Car')
// update the car instantiation below according to the test given
var honda = new Car('Honda', 'Vuzel', 2017, 'Blue', 5)

// starter code - testing constructor
console.log('Testing Constructor')
assert.strictEqual(honda.make, 'Honda', 'Constructor did not set make.')
assert.strictEqual(honda.model, 'Vuzel', 'Constructor did not set model.')
assert.strictEqual(honda.year, 2017, 'Constructor did not set year.')
assert.strictEqual(honda.color, 'Blue', 'Constructor did not set color.')
assert.strictEqual(honda.seats, 5, 'Constructor did not set seats.')

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
success()
// Testing Car.park
console.log('Testing if car can only be parked when not running')
honda.off()
assert.strictEqual(honda.park(), true, 'Car should not be parked if running')
success()
// Testing Car.pickUp(name)
console.log('Testing if car can pick up only when running and enough seats')
honda.start()
assert.strictEqual(honda.pickUp('brian'), true, 'Car cannot pick up if not running or not enough seats!')
success()

console.log('Testing if name is pushed into passengers array')
honda.start()
honda.pickUp('prima')
assert.strictEqual(honda.passengers.length, 2, 'Passenger name is not entered into array')
success()

console.log('Testing if still can pick up after car is full')
honda.start()
honda.pickUp('shimei')
honda.pickUp('shaun')
assert.strictEqual(honda.pickUp('dom'), false, 'Should not be able to pick up anymore passenger after car is full')
success()

// Testing Car.dropOff(name)
console.log('Testing if name is in array')
assert.strictEqual(honda.dropOff('brian'), true, 'This name is not in your passenger list')
success()

console.log('Testing if can drop off only when car is running')
assert.strictEqual(honda.dropOff('prima'), true, 'Cannot drop off if car is not running!')
success()

console.log('Testing if name is removed from passengers list after dropping')
assert.strictEqual(honda.passengers.includes('prima'), false, 'Name is not removed')
success()

// Testing Car.passengerCount()
console.log('Testing for number of passengers in the car')
assert.strictEqual(honda.passengerCount(), 2, 'You have only dropped 2 passengers')
success()
