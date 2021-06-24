//interface with generics
interface IData<T> {
  name: T;
  age: number;
}

//generics with arrow functions extends interface
const getMyDetails = <T extends IData<string>>(param: T): T => {
  return param;
};

console.log(getMyDetails({ name: "krishna", age: 22 }));

//arrow function with generics extends keyword
const getValue = <T extends { name: string; age: number; rollno: string }>(
  a: T
): [T] => {
  return [a];
};
console.log(
  getValue({
    name: " krishna",
    age: 22,
    rollno: "18e4017",
    dept: "MCA",
    work: "clayfin",
  })
);
