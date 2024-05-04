"use strict";
// OOP --> Class
class Animal {
    constructor(name, species, sound) {
        this.makeArrowSound = () => {
            console.log(`the ${this.name} says ${this.sound}`);
        };
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
cat.makeSound();
dog.makeSound();
cat.makeArrowSound();
