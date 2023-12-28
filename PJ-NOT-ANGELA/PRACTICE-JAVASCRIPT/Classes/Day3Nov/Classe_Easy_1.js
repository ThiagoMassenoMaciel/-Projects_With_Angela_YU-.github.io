class Company{

}

class Companny{
  constructor(name, country){
    this.name = name;
    this.country = country;
  }

}

const OBJECT = new Company();

const OBJECT_ONE = new Companny("Tesla", "USA");
const OBJECT_TWO = new Companny("Honda", "Japan");

alert(" OBJECT WITH NO data initialized : " + OBJECT );

alert( " First Bussiness name :" + OBJECT_ONE.name + "\n              country :" + OBJECT_ONE.country);
alert( " Second Bussiness name :" + OBJECT_TWO.name + "\n               country : " + OBJECT_TWO.country);

console.log(OBJECT_ONE.name);
console.log(OBJECT_ONE.country);
console.log("\n");
console.log(OBJECT_TWO.name);
console.log(OBJECT_TWO.country);