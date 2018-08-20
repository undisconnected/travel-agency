var $ = require("jquery");
//var Person = require("./modules/Person"); node way to import a file
import Person from "./modules/Person";

class Adult extends Person {
  
  payTaxes(){
    console.log(this.name + " owes 0$ in taxes");
  }
  
}


var john = new Person("John Doe", "blue");
john.greet();
var jane = new Adult("Jane Smith", "orange");
jane.greet();
jane.payTaxes();
jane.payTaxes();