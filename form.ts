const inputEl = document.getElementById('user-name') as HTMLInputElement | null;

if(!inputEl) {
  throw new Error('Could not find element with id user-name');
}

console.log(inputEl?.value);