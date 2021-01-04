const MAXIMUM_AGE = 30
const MINIMUM_AGE = 0
const MAXIMUM_FITNESS = 10
const MINIMUM_FITNESS = 0
const MAXIMUM_HUNGER = 10
const MINIMUM_HUNGER = 0

class Pet {
    constructor (name) {
    this.name = name
    this.age = 0
    this.hunger = MINIMUM_HUNGER
    this.fitness = MAXIMUM_FITNESS
    }

    checkAlive() {
        if (!this.isAlive) {
            throw new Error('Your pet is no longer alive :(');
          }
    }

    get isAlive () {

        return this.age < MAXIMUM_AGE && 
               this.hunger < MAXIMUM_HUNGER &&
               this.fitness > MINIMUM_FITNESS            
    }

    growUp() {
        this.checkAlive()

        this.age += 1
        this.hunger += 5
        this.fitness -= 3
    }
    

    walk() {
        this.checkAlive()

        if((this.fitness + 4) <= MAXIMUM_FITNESS) {
            this.fitness += 4
        } else {
            this.fitness = MAXIMUM_FITNESS
        }
    }

    feed() {
        this.checkAlive()

        if((this.hunger - 3) >= MINIMUM_HUNGER) {
            this.hunger -= 3
        } else {
            this.hunger = MINIMUM_HUNGER
        }
    }

    checkUp() {
        this.checkAlive()
        
        if (this.fitness <= 3 && this.hunger >= 5) {
            return 'I am hungry and I need a walk'
        } else if (this.fitness <= 3) {
            return 'I need a walk'
        } else if (this.hunger >= 5) {
            return 'I am hungry'
        }
        return 'I feel great'
    }
}



module.exports = Pet