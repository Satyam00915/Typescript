//Unions and inters

type firstType = {
  name: string;
  age: number;
};

type SecondType = {
  age: number;
  dept: string;
};

type Combined = firstType | SecondType;

let a: Combined = {
  age: 25,
  dept: "sada",
};
console.log(a);
