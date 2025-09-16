let hobbies = ['Sports', 'Cooking'];

hobbies.push('Reading');
//hobbies.push(100); //error

//let users: string[] = [];
//let users: (string | number)[] = [];
let users: Array<string | number> = [];

users = [1, 'Max'];
users = [5, 1 ];
users = ['Anna', 'Manu'];

console.log(hobbies);

let possibleResults: [number, number];
possibleResults = [1, -1];

/* user = {
    name: 'Max',
    age: 32
}; */

// Type definition for an object
let user: { 
    name: string;
    age: number | string;
    hobbies: string[];
    role: {
        description: string; 
        id: number;
    }
} = {
    name: 'Max', 
    age: 32, 
    hobbies: ['Sports', 'Cooking'], 
    role: {
        description: 'Admin', 
        id: 1
    }
};

// let val: {} = null; //error
// let val: {} = undefined; //error
let val: {} = 'is a value';
const val2: object = {};

const somObject = {
    a: 'Hello',
    b: 42,
    c: true
};
let data: Record<string, number | string>;

data = {
    entry1: 100,
    entry2: 200,
    entry3: 'hello'
};

