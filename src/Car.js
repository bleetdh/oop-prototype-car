// Phase II here, don't require this file until you're done with Phase I

class Car {
  constructor (make, model, year, color, seats, previousOwners, owner, running) {
    this.make = make
    this.model = model
    this.year = year
    // TODO: add color, seats here
    this.color = color
    this.seats = seats
    this.previousOwners = []
    this.owner = 'manufacturer'
    this.running = false
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
  park() {
    if(this.running === false) {
      console.log('PARKED!!')
      return true
    } else {
      return false
    }
  }
}

var c1 = new Car('Nissan', 'Sunny', 1989, 'Gold', 5)
c1.paint('red')
c1.sell('shaun')
c1.sell('dom')
// export the Car class //
c1.start()
// c1.off()
// console.log(c1.running)
c1.driveTo('GA')
module.exports = Car
// this is required for the carTest.js to load this //
