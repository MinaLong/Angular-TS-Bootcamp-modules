// Section 12: Typescript Overview

import { Observable } from "rxjs";
import { pluck } from "rxjs/operators"

console.log('hello world');

// 1. 
// Type Annotation : string
// string, number, boolean, undefined, null, any
const myName: string = 'Mina';
const myName2 = 'Mina'; // Type Inference

let variableAnyType: any = 123;
variableAnyType = 'Mina';
variableAnyType = ['good', 'bad', 123];

// 2. 
// Type any is the default type here, not string
let myName3;
if (true) {
    myName3 = 'Mina';
}

// 3.
// Working with objects
const post = {
    title: 'Latest Typescript News',
    daysOld: 10,
    published: true
};

// In this function, it's a lot of work to describe all types of input
const printPost = (postToPrint: {
    title: string;
    daysOld: number;
    published: boolean;
}) => {
    return `${postToPrint.title} (${postToPrint.daysOld} days old)`;
};

// 4.
// To make things easier, we can define objects in interface
interface PostGatekeeper {
    title: string;
    daysOld: number;
    published: boolean;
}

const post2 = {
    title: 'Latest Typescript News',
    daysOld: 10,
    published: true
};

const printPost2 = (postToPrint: PostGatekeeper) => {
    return `${postToPrint.title} (${postToPrint.daysOld} days old)`;
};

printPost(post);

// 5. 
// Class and Properties
class Car {
    color: string;
    year: number;

    constructor(color: string, year: number) {
        this.color = color;
        this.year = year;
    }

    //   when we write in ts file
    //   color = 'red';
    //   year = 2000; 
    //   it is exactly the same as the above property assignments using constructor

    drive() {
        console.log('Vroom');
    }
}

const myCar = new Car('red', 2000);
myCar.drive();

console.log(myCar.color, myCar.year); // 'red', 2000

// 6.
// Private and Public
// private: not accessable outside of class
// public: accessable outside of class
class Car2 {
    public color: string;
    private year: number;

    constructor(color: string, year: number) {
        this.color = color;
        this.year = year;
    }

    drive() {
        this.putInGear();
        this.pressPedal();
        this.turnWheel();
    }

    private putInGear() { }

    private pressPedal() { }

    private turnWheel() { }
}

const myCar2 = new Car2('red', 2000);
myCar.drive();

myCar.drive();
// will not find putInGear() method since it's private
// myCar.putInGear();

console.log(myCar2.color); // 'red'

// 7. 
// Decorators @
// decorator is a simple function that can be used on class, property..
const Component = (target: any) => {
    console.log(target);
};

@Component
class Car3 { }


// 8.
// Strict mode
// if we turn on strict mode, then any time we define a value
// we will need to initialize it
// then the below wouldn't work
class Car4 {
    year: number;
    // the second will work
    year2: number = 0;
}


// 9.
// Class Generics
// <T> for a class is usually defined to replace a generic type to be defined later.
class ValueHolder<T> {
    value: T;
}

const numberHolder = new ValueHolder<number>();
numberHolder.value;

// 10.
// Function Generics
// function can also take <T> type 


// 11. 
// applying typescript to rxjs
const observable = new Observable<number>((observer) => observer.next(1));

// value will be of number type due to ts restrictions
observable.subscribe((value) => {
    console.log(value);
});

// 12. 
// generics with rxjs
interface House {
    year: number;
    color: string;
    damanged: boolean;
    constructor: {
        name: string,
        foundYear: number,
    }
}

const observable2 = new Observable<House>(
    // below next(1) will have type error
    // error: Argument of type 'number' is not assignable to parameter of type 'House'.ts(2345)
    // (observer) => observer.next(1)
    (observer) => {
        observer.next({
            year: 1990,
            color: 'red',
            damanged: false,
            constructor: {
                name: 'abc constructor company',
                foundYear: 1800,
            },
        });
    }).pipe(
        pluck('constructor', 'name'),
    );

// ts knows that value would be a string
observable2.subscribe((value) => {
    console.log(value);
});
