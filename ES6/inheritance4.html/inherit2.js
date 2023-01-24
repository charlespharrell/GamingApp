import Gadget  from "./inherit1.js";

 export class Phone extends Gadget{
    constructor(model, price, name, RAM, CPU, battery, ){
        super(model, price, name)
        this.RAM = RAM;
        this.CPU = CPU;
        this.battery = battery;
    } 
    getPhoneInfo(){
        return `The Iphone 12 series has a ram space of ${this.RAM},
         wit a processing speed of ${this.CPU}, and has a battery
          capacity  of ${this.battery}. The model of the gadget 
          is ${this.Model}. its name is $${this.Name},
           and its price value is ${this.Price}`
    }
}
// const phone = new Phone('Elitebook', 300000, 'HP','8gb', '2.5Ghz', 'Iphone 12')
// console.log(phone.getPhoneInfo())
// document.writeln(phone.getPhoneInfo())