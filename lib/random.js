
module.exports = function(val1, val2){
  if(val1 === val2) {
    return true;
  } else {
    return false;
  }
};

function randomNumber() {
  return Math.floor(Math.random() * 9 +1);
}
module.exports = randomNumber

function Potion(name) {
  this.types = ['strength', 'agility', 'health'];
  this.name = name || this.types[Math.floor(Math.random() * this.types.length)];

  if(this.name === 'health') {
    this.value = Math.floor(Math.random() *10 +30);
  } else {
    this.value = Math.floor(Math.random() * 5 +7);
  }
}

module.exports = Potion;

// this is a comment