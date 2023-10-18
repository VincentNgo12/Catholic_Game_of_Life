class Person{
	constructor(name){
		this.name = name;
		this.age = 0;
		this.race = random(["white","yellow","black","blue","grey","ginger"]);
		this.gender = random(["male","female"]);
		this.alive = true;
		
		this.traits = {
			health : random(80,100),
			strength : random(5,20),
			happiness : random(70,100),
			wealth : random([0,0,0,0,200000]),
			holiness : 0,
			crime : 0,
			married: false
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