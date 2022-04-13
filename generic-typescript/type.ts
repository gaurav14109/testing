
function helloWorldFunc<Type>(args : Type) {return args}
// we can explicity define the type my args type explicity deining the type
// setting the explicitly
interface Hello {
email: string,
password: number
}
const args = helloWorldFunc<Hello>({email: "Gaurav", password: 123})
// console.log(args.email)
//means data sending should be of type Hello property 

//we can explicity define the type we want
//Using Type we can keep it to any type and call it explicity 

class Person<T>{ //means type will be of Engine where every it is called
    public name: string;
    public age: number;
    //where T will be used of type string
    constructor(public person:T){
        this.name="gaurav"
        this.age=14
        console.log(person instanceof Person)
        //Person object takes Type and if we define Type to any it will be of that type and
        //while calling class then contructore have been passed as Type object
    }
}
class Gaurav{
    constructor(public name:String){
        
    }
}
const p = new Person<Gaurav>(new Gaurav("Gaurav")) //type will object of Gaurav
