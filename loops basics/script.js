console.log("Write a program which uses a for loop to print all numbers from 1 to 20.")

for (let index = 0; index <= 20; index++){
    console.log(index);
}

console.log("Write a program which uses a for loop to print all “even” numbers between 1 to 20.")

for (let index = 0; index <= 20; index = index + 2){
    console.log(index);
}

console.log("Write a program which uses a while loop to print all odd numbers between 1 to 20")

let index = 1
while (index <= 20){
    console.log(index);
    index = index + 2;
}