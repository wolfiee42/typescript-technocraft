{

    // Abstraction In OOP
    // 1. interface 2. Class

    // the concept of abstaction is that, the method or class doesnot implement the func in the parent function rather it implements at child instance.

    // interface
    interface Car {
        startEngine(): void;
        stopEngine(): void;
        moveCar(): void
    }

    class Vehicle01 implements Car {
        startEngine(): void {
            console.log(`Car is starting.`);
        }
        stopEngine(): void {
            console.log(`car is stoping.`);
        }
        moveCar(): void {
            console.log(`car is moving`);
        }
        test(): void {
            console.log(`testing the car.`);
        }
    }
    const ToyotaCamry = new Vehicle01()
    console.log(ToyotaCamry.startEngine());




    // class

    abstract class Vehicle02 implements Car {
        abstract startEngine(): void
        abstract stopEngine(): void
        abstract moveCar(): void
        test(): void {
            console.log(`testing the car.`);

        }
    }

    class hondaAccord extends Vehicle02 {
        startEngine(): void {
            console.log('engine starting.');
        }
        stopEngine(): void {
            console.log('stoping the engine.');
        }
        moveCar(): void {
            console.log('moving the car');
        }
    }



    //
}