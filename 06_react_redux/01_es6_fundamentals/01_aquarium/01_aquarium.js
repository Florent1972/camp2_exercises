
class Aquarium{
  constructor (fishes, algaes) {
    this.fishes = fishes;
    this.algaes = algaes;
  }
  addFish(fish) {
    this.fishes.push(fish);
  }
  addAlgae(algae) {
    this.algaes.push(algae);
  }
  endTurn() {
    this.fishes.map(element => {
      if (element.type === 0){
        this.fishes.splice(this.fishes.lenght-1, 1);
      }
      else {
        this.algaes.splice(this.algaes.lenght-1, 1);
      }
      return true;
    }
    );
  }
}

class Fish{
  constructor(name, sex, type) {
    this.name = name;
    this.sex = sex;
    this.type = type;
  }
}

class Algae{
  constructor(number) {
    this.number = number;
  }
}





module.exports = {
  aquarium: Aquarium,
  fish: Fish,
  algae: Algae
};
