{
    // Polymorphism

    class Person {
        getSleep() {
            console.log(`ahh! sleeping for 8hrs a day!`);
        }
    }

    class Student extends Person {
        getSleep() {
            console.log(`ahh! sleeping for 7hrs a day!`);
        }
    }

    class Developer extends Person {
        getSleep() {
            console.log(`ahh! sleeping for 6hrs a day!`);
        }
    }

    const getSleep = (params: Person) => {
        params.getSleep()
    }

    const person01 = new Person();
    const person02 = new Student();
    const person03 = new Developer();


    getSleep(person01)
    getSleep(person02)
    getSleep(person03)



    // another example
    class Shape {
        getArea(): number {
            return 0;
        }
    }

    class Circle extends Shape {
        radius: number
        constructor(radius: number) {
            super();
            this.radius = radius;
        }
        getArea(): number {
            return Math.PI * this.radius * this.radius;
        }
    }

    const circle101 = new Circle(3);


    // same example with different value
    class Rectangle extends Shape {
        height: number;
        width: number;

        constructor(height: number, width: number) {
            super();
            this.height = height;
            this.width = width;
        }
        getArea(): number {
            return this.height * this.width;
        }
    }

    const rect101 = new Rectangle(4, 6);


    const getShapeArea = (param: Shape) => {
        return param.getArea();
    }

    console.log(getShapeArea(rect101))
    console.log(getShapeArea(circle101))

    // 
}