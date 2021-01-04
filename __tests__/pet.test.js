const Pet = require('../src/pet')


describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Albie')).toBeInstanceOf(Object)
    })

    it('sets the name property', () => {
        const pet = new Pet('Albie')

        expect(pet.name).toEqual('Albie')
    })

    it('has an initial age of 0', () => {
        const pet = new Pet('Albie')

        expect(pet.age).toEqual(0)
    })

    it('has an initial hunger of 0', () => {
        const pet = new Pet('Albie')

        expect(pet.hunger).toEqual(0)
    })

    it('has an initial fitness of 10', () => {
        const pet = new Pet('Albie')

        expect(pet.fitness).toEqual(10)
    })
})

describe('growUp', () => {
    it('increments the age by 1', () => {
        const pet = new Pet('Albie')

        pet.growUp()

        expect(pet.age).toEqual(1)
    })

    it('increments hunger by 5', () => {
        const pet = new Pet('Albie')

        pet.growUp()

        expect(pet.hunger).toEqual(5)
    })

    it('decreases fitness by 3', () => {
        const pet = new Pet('Albie')

        pet.growUp()

        expect(pet.fitness).toEqual(7)
    })
})

describe('walk', () => {
    it('increases fitness by 4 to a maximum of 10', () => {
        const pet = new Pet('Albie')

        pet.fitness = 8
        pet.walk()

        expect(pet.fitness).toEqual(10)
    })
})

describe('feed', () => {
    it('decreases hunger by 3 to a maximum of 0', () => {
        const pet = new Pet('Albie')

        pet.hunger = 2
        pet.feed()

        expect(pet.hunger).toEqual(0)
    })
})

describe('checkUp', () => {
    it('returns "I need a walk" if fitness is 3 or less', () => {
        pet.fitness = 2

        expect(pet.checkUp()).toBe('I need a walk')
    })

    it('returns "I am hungry" if hunger is 5 or more', () => {
        pet.hunger = 6

        expect(pet.checkUp()).toBe('I am hungry')
    })

    it('returns "I am hungry and need a walk" if fitness is 3 or below & pet hunger is 5 or more ',() => {
        pet.fitness = 3
        pet.hunger = 5

        expect(pet.checkUp()).toBe('I am hungry AND I need a walk')
    })

    it('returns "I feel great" if fitness is above 3 & hunger is less than 5', () => {
        pet.fitness = 4
        pet.hunger = 3

        expect(pet.checkUp()).toBe('I feel great')
    })
})

describe('isAlive', () => {

    it('returns true if age is below 30, hunger is below 10 and fitness is above 0', () => {
      expect(pet.isAlive).toBe(true);
    })
    it('returns false if age is above 30', () => {
      pet.age = 31

      expect(pet.isAlive).toBe(false)
    })
    it('returns false if hunger is above 10', () => {
      pet.hunger = 11

      expect(pet.isAlive).toBe(false)
    })
    it('returns false if fitness is 0', () => {
      pet.fitness = 0

      expect(pet.isAlive).toBe(false)
    })
})

describe('throws an error', () => {

    test('throws an error if the pet is not alive', () => {
      pet.age = 30
      expect(() => pet.feed()).toThrow('Your pet is no longer alive :(')

      expect(() => pet.walk()).toThrow('Your pet is no longer alive :(')

      expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(')

      expect(() => pet.checkUp()).toThrow('Your pet is no longer alive :(')
    })
})


