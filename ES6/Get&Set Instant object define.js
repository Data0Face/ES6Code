//Define isntant object for your declration class after class with two parantes
const C1 = new class {

    constructor(Name,Type){

        this.Name = Name;
        this.Type = Type;

    }
    print (){
        console.log(this.Name,this.Type)
    }
}("Amir","King")



// Get & Set
class name {
    constructor(A,B){

        this.A=A;
        this.B=B;

    }
        //Get the value of with get
    get change(){
        console.log(this.A,this.B)
    }
        //To change the value of A we can assign a new value with the newA with set
    set change(newA) {
        this.A = newA  
    }
}
const a1= new name('amir','mehrdad')
