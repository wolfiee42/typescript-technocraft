// Type Guard Using Instance Of
{
    // 


    class Animal {
        name: string;
        species: string;

        constructor(name: string, species: string) {
            this.name = name;
            this.species = species
        }
        makeSound() {
            console.log(`${this.name} is making sound.`);
        }
    }


    class Dog extends Animal {
        constructor(name: string, species: string) {
            super(name, species)
        }
        makeBark() {
            console.log(`${this.name} is barking!`);
        }
    }

    class Cat extends Animal {
        constructor(name: string, species: string) {
            super(name, species)
        }
        makeMeowing() {
            console.log(`${this.name} is Meowing for food.`);
        }
    }

    // there is a way to handle Instance of by creating separate function.

    function isDog(animal: Animal): animal is Dog {
        return animal instanceof Dog;
    }
    const isCat = (animal: Animal): animal is Cat => {
        return animal instanceof Cat;
    }

    // implementing Instance of 
    const getAnimal = (animal: Animal) => {
        if (isDog(animal)) {
            animal.makeBark()
        } else if (isCat(animal)) {
            animal.makeMeowing()
        } else {
            animal.makeSound()
        }
    }


    const animal1 = new Dog('shunamiya', 'Dog')
    const animal2 = new Cat('mighty cat', 'Cat')


    getAnimal(animal1);
    getAnimal(animal2);

    // 
}