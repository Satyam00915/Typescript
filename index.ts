// function greeting(name: string): void {
//   console.log("Hello there " + name + " Good morning");
// }

// greeting("satyam");

function sum(a: number, b: number): string {
  return a.toString() + b.toString();
}
let a = sum(2, 5);
console.log(a);

function delay(fn: (name: string) => void) {
  setTimeout(fn, 5000);
}

function greeting(name) {
  console.log("Hello " + name);
}

delay(() => greeting("satyam"));

const greet = () => {
  console.log("end");
};

greet();
