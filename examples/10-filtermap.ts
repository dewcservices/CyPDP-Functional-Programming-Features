export {};

// Just a slightly more typed form of parseInt
function asInteger(val: string): number | null {
  const intVal = Number.parseInt(val, 10);
  return Number.isNaN(intVal) ? null : intVal;
}

const myValues = ["12", "birthday cake", "17.2", "Hello, World!"];

//const intValues = 
//console.log(intValues);
