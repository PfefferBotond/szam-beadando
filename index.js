let zenék = [];

class zene{
  #zene;
  #length;

  constructor(zene, length){
    this.#zene = zene;
    this.#length = length;
  }

  get zene(){
    return this.#zene;
  }

  get length(){
    return this.#length;
  }
}

function sum(){
  var sum = 0;
  for (let i = 0; i < zenék.length; i++){
    sum += zenék[i].length;
  }
  return sum;
}

function addToList(){
  var data = new zene(
    document.getElementById("zene").value,
    parseInt(document.getElementById("length").value)
  );
  zenék.push(data);
  var sPlaceHolder = sum();
  document.getElementById("sum").innerText =
    "A zeneszámok össz hossza: " + sPlaceHolder + " perc";
}

function init(){
  document.getElementById("add").addEventListener("click", addToList);
}

document.addEventListener("DOMContentLoaded", init);
console.log(sum());