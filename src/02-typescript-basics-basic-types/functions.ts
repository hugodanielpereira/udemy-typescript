function add(a: number, b: number): number {
  return a + b;
}

function log(message: string): void {
  console.log(message);
}

function logAndThrow(errorMessage: string): never {
    console.log(errorMessage);
    throw new Error(errorMessage);
}

const logMsg = (msg: string): void => {
    console.log(msg);
}

// function performJob(cb: (msg: string) => void) {
//     cb('Job done!');
//     console.log(result);
// }

function performJob(cb: Function): void {
    const result = cb(8, 8);
    console.log(result);
}

performJob(log);

type User = { 
    name: string; 
    age: number;
    greeting: (message: string) => void; 
};

let user: User = {
    name: 'Max', 
    age: 32,
    greeting(message: string) {
        console.log(message + ' ' + this.name);
        return this.name;
    }
};

user.greeting('Hi there - I am');
