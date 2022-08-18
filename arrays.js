/*
    In this file, we'll be continuing our story
    with Obiwan being allowed to flee his fight with Anakin.
*/

let backpack = []

backpack.push('Jedi Robe')
backpack.push('Lightsaber')
backpack.push('Crippling sense of failure and guilt')

//console.log(backpack)

backpack.splice(1,1)

//console.log(backpack)

backpack.push('Wookie Coat') 

//console.log(backpack)

backpack.pop()

//console.log(backpack)

backpack.push('Blue milk','baby yoda', 'luke', 'high ground', 'blaster')
// second backpack and how to make and put stuff in 
let stroller = backpack.splice(3,2)

console.log(backpack)
console.log(stroller)


// Loop over backpack array
// Console log each item

for(let i = 0; i < backpack.length; i++){
    console.log(backpack[i])
}