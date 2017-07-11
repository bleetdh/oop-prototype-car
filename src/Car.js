// Phase II here, don't require this file until you're done with Phase I

class Car {
  constructor (make, model, year, color, seats, previousOwners, owner, running, passengers) {
    this.make = make
    this.model = model
    this.year = year
    // TODO: add color, seats here
    this.color = color
    this.seats = seats
    this.previousOwners = []
    this.owner = 'manufacturer'
    this.running = false
    this.passengers = passengers || []
  }

  // add the sell function
  sell (newOwner) {
    if (isNaN(newOwner)) {
      this.previousOwners.push(this.owner)
      this.owner = newOwner
    }
  }
  // add the paint function
  paint (newColor) {
    this.color = newColor
  }
  // add the start function
  start () {
    this.running = true
  }
  off () {
    this.running = false
  }
  driveTo (destination) {
    if (this.running === true) {
      console.log('driving to ' + destination)
      return true
    } else {
      return false
    }
  }
  park () {
    if (this.running === false) {
      console.log('PARKED!!')
      return true
    } else {
      return false
    }
  }
  pickUp (name) {
    if (this.running === true && this.passengers.length < this.seats - 1) {
      console.log('driving to pick up ' + name)
      this.passengers.push(name)
      return true
    } else {
      return false
    }
  }
  dropOff (name) {
    if (this.passengers.includes(name) === true && this.running === true) {
      var search = name
      for (var i = 0; i < this.passengers.length; i++) {
        if (this.passengers[i] === name) {
          this.passengers.splice(i, 1)
        }
      }
      console.log('driving to drop off '+ name)
      return true
    }
  }
  passengerCount() {
    var numOfPassengers = this.passengers.length
    return numOfPassengers
  }
}

// var c1 = new Car('Nissan', 'Sunny', 1989, 'Gold', 5)
// c1.start()
// c1.pickUp('shaun')
// c1.pickUp('brian')
// c1.pickUp('prima')
// c1.pickUp('shimei')
// console.log(c1.passengers)
// c1.dropOff('shaun')
// c1.dropOff('prima')
// c1.dropOff('shimei')
// c1.dropOff('brian')
// console.log(c1.passengers)
// c1.passengerCount()
module.exports = Car
// this is required for the carTest.js to load this //
