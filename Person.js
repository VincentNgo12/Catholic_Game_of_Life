class Person{
	constructor(name, race, gender){
		this.name = name;
		this.race = race;
		this.gender = gender;
		
		this.traits = {
			married : false,
			career : null,
			college : false,
			health : round(random(80,100)),
			strength : round(random(5,20)),
			happiness : round(random(70,100)),
			annual_cost : 0,
			wealth : 0,
			education : 0,
			holiness : 0,
			crime : 0,
			killstreak : 0,
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
}


class Career {
  constructor(profession, income, jobSatisfaction) {
    this.profession = profession;
    this.income = income;
    this.jobSatisfaction = jobSatisfaction;
  }
}