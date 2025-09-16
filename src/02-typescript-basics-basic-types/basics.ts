console.log('Basics module loaded');

let userName: string;
//let userAge = 38;
//let age: any = 36;  //not recommended

let age: number | string = 38;

// ...

userName = 'Max';

function add(a: number, b = 5) {
    return a + b;
}

add(10);
add(10, 2);