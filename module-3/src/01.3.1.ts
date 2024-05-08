// OOP --> Class



// basic
class Animal {
    name: string;
    species: string;
    sound: string;

    constructor(name: string, species: string, sound: string) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    makeSound() {
        console.log(`the ${this.name} says ${this.sound}`);
    }
}


const dog = new Animal('German Shepard', 'Dog', 'Ghew Ghew');
const cat = new Animal('Persian', 'Cat', 'Meow Meow');
const bullDog = new Animal('Persian', 'Dog', 'bark bark');
cat.makeSound()
dog.makeSound();



// using parameter properties
class AnimalAdvance {
    constructor(public name: string, public species: string, public sound: string) { }
    makeSound() {
        console.log(`the ${this.name} says ${this.sound}`);
    }
}