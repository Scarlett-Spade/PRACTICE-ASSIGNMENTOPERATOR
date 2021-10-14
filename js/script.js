const bird = {
  name: "Eliza",
  type: "Budgie",
  hungerScale: 5, // Scale from 0 (full) to 10 (starving)
  isHappy: function () {
    if (this.hungerScale <= 3) {
      return true;
    } else {
      return false;
    }
  },
  eat: function () {
    if (this.hungerScale === 0) {
      return `${bird.name} is full.`;
     } else {
      this.hungerScale -= 1
      console.log("Nom nom nom nom nom!")
     }
  }
};

bird.eat()
console.log(bird.isHappy())

bird.eat()
console.log(bird.isHappy())
