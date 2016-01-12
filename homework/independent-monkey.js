function monkey(name, species) {
  this.name = name;
  this.species = species;
  this.foodsEaten = [];

  this.eatSomething = function (food) {
    this.foodsEaten.push(food);
  };

  this.introduce = function () {
    console.log("Name: " + this.name + "\n" + "Species: " + this.species + "\n" + "Foods Eaten: " + this.foodsEaten);
  };

}

var orangUtan = new monkey("Ian", "Orang Utan");

orangUtan.eatSomething("bananas");
orangUtan.eatSomething("mangoes");

orangUtan.introduce();

var chimpanzee = new monkey("Try", "Chimpanzee");

chimpanzee.eatSomething("apple");
chimpanzee.eatSomething("orange");

chimpanzee.introduce();

var gorilla = new monkey("Aaron", "Gorilla");

gorilla.eatSomething("durian");
gorilla.eatSomething("watermelon");

gorilla.introduce();