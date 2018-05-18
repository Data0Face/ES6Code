// Refrence Types

var object1 = { value:10,name:2}
var object2 = object1   
var object3 = {value:110}



//Object assign

let ObjectCombine = Object.assign({},object1,object2,object3)

// Context
const object4 = {
a:function(){
 console.log(this);   
}
}

//Instantination
//How to code a class
class Player {
//every class have a Constructor with special parameters
    constructor(name,type){
        console.log(this)
        // THIS
    this.name = name;
    this.type = type;
    }
    //this function introduce the class on type
    introduce(){
    console.log(`Yo I'm ${this.name} i'm here to be the ${this.type}`);
    } 
}
// now the class of wizard is a sub class of player 
class wizard extends Player{
    constructor(name,type){
        // Every time you extends something you need to put the parameters
        // of the function you extends with a Super tag
        super(name,type)
    }
    play(){
        console.log(`WEEEEE I'm the number one ${this.type}.`)
    }
}
const a1 = new wizard ("Mehrdad","Ostad")
// oh we have a new wizard so we put the new information in Wizard Function 
// replace the name , type with new data 
const wizard1 = new wizard('Shawn','Dark Magic')
const wizard2 = new wizard ('Angela','Healer')
