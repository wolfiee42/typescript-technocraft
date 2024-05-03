// conditional type



type a1 = null;
type b1 = undefined;

type x = a1 extends null ? true : false;
type y = b1 extends null ? true : a1 extends undefined ? string : boolean


// example

type Ashik = {
    bike: string;
    car: string;
    ship: string;
    plane: string
}

type checkVehicle<T> = T extends keyof Ashik ? true : false;

type hasCar = checkVehicle<'car'> //true
type hasTractor = checkVehicle<'tractor'> //false
