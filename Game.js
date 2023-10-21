const SCENARIO_INDEX = 0;
const ACTION_INDEX = 1;
const EVENT_INDEX = 2;

class Game{
	constructor(player){
		this.player = player;
		this.stage = 1;
		
		player.print_traits();
		document.getElementById("next_button").addEventListener("click",()=>{this.next_clicked()});
	}
	
	
	play(){
		this.set_game_logic();
		this.play_current_stage();
	}
	
	
	play_current_stage(){
		if(!this.game_ended()){
			this.current_scenario = this.pick_scenario();
			this.current_choices = this.current_scenario.choices;
			this.show_scenario();
		}
	}
	
	
	set_game_logic(){
		if(this.stage < 18){
			this.event_index = 0;
			return;
		}else if(this.stage === 18 || (this.stage === 19 && !this.player.traits.college)){
			this.event_index = EVENT_INDEX;
			return;
		}else if(this.stage === 23 || this.stage === 35 || this.stage === 50){
			this.event_index = EVENT_INDEX;
			return;
		}else{
			this.event_index = ACTION_INDEX;
			return;
		}
	}
	
	
	pick_scenario(){
		if(this.event_index === SCENARIO_INDEX){
			return random(scenarios[`stage_${this.stage}`]);
		}else if(this.event_index === ACTION_INDEX){
			return get_available_actions(this.player);
		}else if(this.event_index === EVENT_INDEX && this.stage === 18){
			return available_events["college"];
			// If the player chose not to go to college
		}else if(this.event_index === EVENT_INDEX && this.stage === 19 && !this.player.traits.college){
			return apply_career(this.player, this.stage);
			// CAREER DAYS!
		}else if(this.event_index === EVENT_INDEX && (this.stage === 23 || this.stage === 35 || this.stage === 50)){
			return apply_career(this.player, this.stage);
		}
	}
	
	
	show_scenario(){
		let modal = document.getElementById("scenario_modal");
		modal.style.display = "block";
		document.getElementById("scenario_name").innerHTML = `${this.current_scenario.name}`;
		document.getElementById("scenario_description").innerHTML = `${this.current_scenario.description}`;
		this.display_choices(this.current_choices);
	}
	
	
	show_outcome(){
		let modal = document.getElementById("outcome_modal");
		modal.style.display = "block";
		document.getElementById("outcome_name").innerHTML = `${this.current_outcome.name}`;
		document.getElementById("outcome_description").innerHTML = `${this.current_outcome.description}`;
		
		//Print each effects if available
		if(this.current_outcome.effects){
			let effects = this.current_outcome.effects;
			for (let effect in effects) {
				// effect on trait
				const trait = effects[effect];
				// If its a career type
				if(effect === "career"){
					const h4Income  = document.createElement("h4");
					const h4Satisfaction = document.createElement("h4");
					h4Satisfaction.style.color = (trait > 0) ? "green" : "red";
					h4Income.textContent = `Income : ${trait.income}$`;
					h4Satisfaction.textContent = `Satisfaction : ${trait.jobSatisfaction}`;
					document.getElementById("outcome_effects").appendChild(h4Income);
					document.getElementById("outcome_effects").appendChild(h4Satisfaction);
					return;
				}
				// create a new div element
				const h4Element  = document.createElement("h4");
				h4Element.style.color = (trait > 0) ? "green" : "red";
				h4Element.textContent = `${effect} : ${trait}`;
				
				document.getElementById("outcome_effects").appendChild(h4Element);
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
		let choice = this.current_choices[choiceIndex];
		let outcome = choice.selectOutcome(this.player.traits);
		this.current_outcome = outcome;
		this.player.apply_effects(outcome.effects);
		// Close the scenario modal
		document.getElementById("scenario_modal").style.display = "none";
		this.show_outcome();
	}
	
	
	next_clicked(){
		document.getElementById("outcome_modal").style.display = "none";
		document.getElementById("outcome_effects").innerHTML = "";
		// The game moves to next stage
		if(this.event_index === 0){
			this.progress_stage()
			.then(() => {
				this.set_game_logic();
				this.play_current_stage();
			});
		}else{
			this.event_index--;
			this.play_current_stage()
		}
	}
	
	
	// Method for stage transition
	async progress_stage(){
		let fadeIn = 0;
		let textFadeIn = 0;
		let fadeOut = 255;
		noLoop();

		while(fadeIn<255){
			// Fade to black
			fill(0, 0, 0, fadeIn);
			rect(0, 0, width, height);
			fadeIn += 5;
			await new Promise(resolve => setTimeout(resolve, 2000 / frameRate()));
		}
		this.stage++;
		while(textFadeIn<255){
			fill(0);
			rect(0, 0, width, height);
			// Display the next age in the middle
			fill(255,255,255,textFadeIn);
			stroke(255,255,255,textFadeIn);
			textSize(80);
			text(this.stage, width / 2, height / 2);
			textFadeIn += 5;
			await new Promise(resolve => setTimeout(resolve, 1000 / frameRate()));
		}while(fadeOut>0){
			draw();
			fill(0,0,0,fadeOut);
			rect(0, 0, width, height);
			fadeOut -= 5;
			await new Promise(resolve => setTimeout(resolve, 3000 / frameRate()));
		}

		loop();
	}
	
	
	game_ended(){
		return !this.player.alive;
	}
}


