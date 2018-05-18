// Let & Const
// don't use var again 
//only use let, let only runs in the scope it is
// you can't reasign value of const

//==========================

const player="Bob"
let exprienceLevel = 99
let armor = 10
console.log("Outside Armor" , armor)
// Ouside armor is 10

if (exprienceLevel > 20)
{
  armor = 20 
    
  //Inside armor is 20
  console.log("Inside Armor" , armor)
 
}

