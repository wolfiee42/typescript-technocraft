// generic reusable interface

interface Developer<T, Y = null> {
    devName: string;
    deviceName: {
        brand: string;
        model: string;
        realeaseYear: number;
    }
    smartWatch: T;
    bike?: Y;
}


// interface for smart watch
interface smartWatch1 {
    brand: string;
    realeaseYear: number;
    modelName: string;
    display: string;
}

const devNum1: Developer<smartWatch1> = {
    devName: 'Saif Siraj',
    deviceName: {
        brand: 'Apple',
        model: "Macbook Pro M3 14inch",
        realeaseYear: 2023,
    },
    smartWatch: {
        brand: 'Apple smartwatch',
        realeaseYear: 2022,
        modelName: 'series 7',
        display: 'Oled'
    }
}


// interface for smart watch
interface smartwatch2 {
    brand: string;
    model: string;
    heartrateCheck: boolean;
    pulseCheck: boolean;
}

interface bikeInterface {
    brand: string;
    model: string;
    releaseYear: number;
}

const devNum2: Developer<smartwatch2, bikeInterface> = {
    devName: 'Mamun',
    deviceName: {
        brand: 'AMD Ryzen',
        model: '5600g',
        realeaseYear: 2022
    },
    smartWatch: {
        brand: 'LG',
        model: 'gama series',
        heartrateCheck: false,
        pulseCheck: true
    },
    bike: {
        brand: 'yamaha',
        model: 'r15',
        releaseYear: 2016,
    }
}