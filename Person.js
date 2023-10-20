class Person{
  constructor(name){
    this.name = name;
    this.age = 0;
    this.race = random(["white","yellow","black","blue","grey","ginger"]);
    this.gender = random(["male","female"]);
    this.alive = true;
    this.married = false;
    this.career = null;
    this.annual_cost = 0;

    this.traits = {
      college : false,
      health : random(80,100),
      strength : random(5,20),
      happiness : random(70,100),
      wealth : random([0,0,0,0,200000]),
      education : 0,
      holiness : 0,
      crime : 0,
    }
  } 


  apply_effects(effects){
    for(let effect in effects){
      this.traits[effect] += effects[effect];
    }
  }


  print_traits(){
    console.log(`${this.name} is a ${this.race} ${this.gender}`);
  }
}


class Career {
  constructor(profession, income, jobSatisfaction) {
    this.profession = profession;
    this.income = income;
    this.jobSatisfaction = jobSatisfaction;
  }
}