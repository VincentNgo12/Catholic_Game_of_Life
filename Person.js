class Person{
	constructor(name){
		this.name = name;
		this.age = 0;
		this.race = random(["white","yellow","black","blue","grey","ginger"]);
		this.gender = random(["male","female"]);
		this.alive = true;
		
		this.traits = {
			married : false,
			career : null,
			college : false,
			health : round(random(80,100)),
			strength : round(random(5,20)),
			happiness : round(random(70,100)),
			annual_cost : 0,
			wealth : random([0,0,0,0,200000]),
			education : 0,
			holiness : 0,
			crime : 0,
		}
	} 
	
	
	apply_effects(effects){
		for(let effect in effects){
			if(effect === "college" || effect === "married" || effect === "career"){
				this.traits[effect] = effects[effect];
			}else{
				this.traits[effect] += effects[effect];
			}
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