// generic reusable interface

interface Developer<T> {
    devName: string;
    deviceName: {
        brand: string;
        model: string;
        realeaseYear: number;
    }
    smartWatch: T
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

const devNum2: Developer<smartwatch2> = {
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
    }
}