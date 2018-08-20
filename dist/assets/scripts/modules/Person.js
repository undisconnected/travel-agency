
class Person {
  
  constructor(fullName, favoriteColor){
    this.name = fullName;
    this.favoriteColor = favoriteColor;
  }
  
  
  greet(){
    console.log("Hi dude oh, my name is " + this.name + " and my fav color is " + this.favoriteColor + ".");
  }
}

//module.exports = Person; node way to export
export default Person;