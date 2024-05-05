{
    // Statics In OOP

    class Count {
        static count: number = 0; //before static the whenever the count is being called, it is taking separate indivitual instance i.e space in memory.by making it static, all the memory alocation is coming to a single memory space. Making it static, this method doesn't requiered. have to call the class itself. 
        increament() {
            return Count.count += 1
        }
        decrement() {
            return Count.count -= 1
        }
    }

    const instance01 = new Count();
    console.log(instance01.increament()); // 1



    const instance02 = new Count();
    console.log(instance02.increament()); // 2

    class Count101 {
        static count: number = 0;
        static increament() { //making a method static 
            return Count.count += 1
        }
        decrement() {
            return Count.count -= 1
        }
    }
    // const instance03 = new Count(); no need for this
    console.log(Count101.increament()); // 1

    //
}