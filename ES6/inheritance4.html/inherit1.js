

export default class Gadget {
    constructor (model, price, name){
        this.Model = model;
        this.Price = price;
        this.Name = name;
    }
    getGadgetInfo(){
        return `The model of the gadget is ${this.Model}. its name is $${this.Name}, and its price value is ${this.Price}`
    }
}
const gad = new Gadget('Elitebook', 300000, 'HP')

 console.log(gad.getGadgetInfo())