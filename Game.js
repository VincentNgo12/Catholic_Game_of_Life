class Game{
	constructor(player){
		this.player = player;
		this.stage = 1;
		
		player.print_traits();
	}
	
	
	play(){
		//while(!this.game_ended()){
			this.current_scenario = random(scenarios[`stage_${this.stage}`]);
			this.current_choices = this.current_scenario.choices;
			this.show_scenario();
		//}
	}
	
	
	show_scenario(){
		let modal = document.getElementById("modal");
		modal.style.display = "block";
		document.getElementById("name").innerHTML = `${this.current_scenario.name}`;
		document.getElementById("description").innerHTML = `${this.current_scenario.description}`;
		this.display_choices(this.current_choices);
	}
	
	
	show_outcome(){
		let modal = document.getElementById("modal");
		modal.style.display = "block";
		document.getElementById("name").innerHTML = `${this.current_outcome.name}`;
		document.getElementById("description").innerHTML = `${this.current_outcome.description}`;
		
		//Print each effects if available
		if(this.current_outcome.effects){
			let effects = this.current_outcome.effects;
			for (let effect in effects) {
				// effect on trait
				const trait = effects[effect];
				// create a new div element
				const newDiv = document.createElement("div");
				// and give it some content
				const newContent = document.createTextNode(`${effect} : ${trait}`);
				newDiv.appendChild(newContent);
				
				document.getElementById("choiceContainer").appendChild(newDiv);
			}
		}
	}
	
	// method to dynamically create and display choice buttons
	display_choices(choices) {
		const choiceContainer = document.getElementById("choiceContainer");

		// Clear any existing choice buttons
		choiceContainer.innerHTML = '';

		// Create and append choice buttons based on the choices array
		for (let i = 0; i < choices.length; i++) {
			const choice = choices[i];
			const button = document.createElement("button");
			button.textContent = choice.name;
			button.addEventListener("click", () => this.selectChoice(i));
			choiceContainer.appendChild(button);
		}
	}
	
	
	selectChoice(choiceIndex){
		document.getElementById("choiceContainer").style.display = "none";
		let choice = this.current_choices[choiceIndex];
		let outcome = choice.selectOutcome(this.player.traits);
		this.current_outcome = outcome;
		this.player.apply_effects(outcome.effects);
		this.show_outcome();
	}
	
	
	game_ended(){
		let ended = true;
		for(let player of this.players){
			if(player.alive){
				ended = false;
			}
		}
		return ended;
	}
}


