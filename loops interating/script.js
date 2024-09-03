// Write a program which uses a for loop to print all values in the array above.

let array = [73, 42, 17, 55, 97, 28, 61, 39, 84, 10, 88, 45, 7, 66, 2];

for (let index = 0; index < array.length; index++){
    const item = array[index]
    console.log(item);
}

// Write a program which uses a for loop to sum all the values in the array.
console.log("Sum")

let initialValue = 0;
let sum = array.reduce(
    (accumulator, currentvalue) => accumulator + currentvalue, initialValue
)
console.log(sum);




console.log("Given the following");
let array1 =[
[32, 75, 18, 47, 91, 66, 23, 59, 8, 3],
[88, 15, 70, 4, 53, 96, 27, 62, 100, 1],
[7, 51, 34, 82, 13, 68, 25, 90, 49, 57]
] 
console.log(array1.length);

// Write a program which uses a for loop to print all values in all the arrays
for (let index = 0; index < array1.length; index++){
    const item = array1[index]
    console.log(item);

    for(let innerIndex = 0; innerIndex < item.length; innerIndex++) {
        console.log(item[innerIndex]);
      }
}