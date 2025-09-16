function generateError(msg?: string) {
  throw new Error(msg);
}

generateError("This is an error message!")

type User = {
  name: string;
  age: number;
  role?: 'admin' | 'guest';
};

// JS Trick to check if a value is provided
// let input = '';
// const didProvideInput = null || false;

let input = null;
const didProvideInput = input ?? generateError("Input is required!");

console.log(didProvideInput);