const SCENARIO_INDEX = 0;
const ACTION_INDEX = 1;
const EVENT_INDEX = 2;

class Game{
	constructor(player){
		this.player = player;
		this.stage = 1;
		
		document.getElementById("next_button").addEventListener("click",()=>{this.next_clicked()});
		document.getElementById("close_button1").addEventListener("click",()=>{document.getElementById("stats_modal").style.display="none"});
		document.getElementById("close_button2").addEventListener("click",()=>{document.getElementById("stats_modal").style.display="none"});
		document.getElementById("close_button3").addEventListener("click",()=>{document.getElementById("gameEndingModal").style.display="none"});
		document.getElementById("close_button4").addEventListener("click",()=>{document.getElementById("gameEndingModal").style.display="none"});
		document.getElementById("player_name").innerHTML = `${this.player.name}'s`;
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
		}else{
			this.show_ending_modal();
			this.current_outcome = new Outcome("Thanks for playing", "You died, ending your hopefully-Catholic life. Let's hope you didn't die a silly death.", {});
			this.show_outcome();
		}
	}
	
	
	set_game_logic(){
		if(this.stage === 1){//Introduction
			this.event_index = EVENT_INDEX;
			return;
		}
		if(this.stage === 17){ // A word from the developer
			this.event_index = EVENT_INDEX;
			return;
		}
		if(this.stage < 18){
			this.event_index = 0;
			return;
		}else if(this.stage === 18 || (this.stage === 19 && !this.player.traits.college)){
			this.event_index = EVENT_INDEX;
			return;
		}else if(this.stage === 23 || this.stage === 38 || this.stage === 50){
			this.event_index = EVENT_INDEX;
			return;
		}else if(this.stage === 30){ //Marriage
			this.event_index = EVENT_INDEX;
			return;
		}else if(this.stage === 36 && this.player.traits.married){//Have kids
			this.event_index = EVENT_INDEX;
			return;
		}else{
			this.event_index = ACTION_INDEX;
			return;
		}
	}
	
	
	pick_scenario(){
		if(this.event_index === EVENT_INDEX && this.stage === 1){ // An introduction
			this.event_index--;
			return available_events["introduction"];
		}
		if(this.event_index === EVENT_INDEX && this.stage === 17){ // A word from the developer
			return available_events["rating"];
		}
		if(this.event_index === SCENARIO_INDEX && this.stage <= 18){
			return random(scenarios[`stage_${this.stage}`]);
		}else if(this.event_index === ACTION_INDEX){
			return get_available_actions(this.player);
		}else if(this.event_index === EVENT_INDEX && this.stage === 18){
			return available_events["college"];
			// If the player chose not to go to college
		}else if(this.event_index === EVENT_INDEX && this.stage === 19 && !this.player.traits.college){
			return apply_career(this.player, this.stage);
			// CAREER DAYS!
		}else if(this.event_index === EVENT_INDEX && (this.stage === 23 || this.stage === 38 || this.stage === 50)){
			return apply_career(this.player, this.stage);
			// Marriage!
		}else if(this.event_index === EVENT_INDEX && this.stage === 30){
			return available_events["marriage"];
			// have kids
		}else if(this.event_index === EVENT_INDEX && this.stage === 36){
			return available_events["have_kids"];
		}else if(this.event_index === SCENARIO_INDEX){
			return get_related_scenarios(this.player, this.stage);
		}
	}
	
	
	show_scenario(){
		let modal = document.getElementById("scenario_modal");
		modal.style.display = "block";
		document.getElementById("scenario_name").innerHTML = `${this.current_scenario.name}`;
		document.getElementById("scenario_description").innerHTML = `${this.current_scenario.description}`;
		// Image
		if(this.current_scenario.image){
			document.getElementById("scenario_image").src = this.current_scenario.image;
			document.getElementById("scenario_image").style.display = "block";
		} else{
			document.getElementById("scenario_image").style.display = "none";
		}
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
					h4Satisfaction.style.color = (trait.jobSatisfaction > 0) ? "green" : "red";
					h4Income.textContent = `Income : ${trait.income}$`;
					h4Satisfaction.textContent = `Satisfaction : ${trait.jobSatisfaction}`;
					document.getElementById("outcome_effects").appendChild(h4Income);
					document.getElementById("outcome_effects").appendChild(h4Satisfaction);
					return;
				}
				// create a new div element
				const h4Element  = document.createElement("h4");
				h4Element.style.color = (trait > 0) ? "green" : "red";
				if(effect === "crime") h4Element.style.color = "red";
				h4Element.textContent = `${effect} : ${trait}`;
				
				document.getElementById("outcome_effects").appendChild(h4Element);
			}
		}
	}
	
	// Method to show stats
	show_player_stats(){
		// If the player has a job
		if(this.player.traits.career){
			document.querySelector("#career").innerHTML = this.player.traits.career.profession;
		}else if(this.stage <=12){
			document.querySelector("#career").innerHTML = "Child";
		}else if(this.player.traits.college && this.stage <= 23){
			document.querySelector("#career").innerHTML = "College Student";
		}else if(this.stage <=19){
			document.querySelector("#career").innerHTML = "Teenager";
		}else{
			document.querySelector("#career").innerHTML = "Unemployed";
		}
		document.querySelector("#health").innerHTML = this.player.traits.health;
		document.querySelector("#kills").innerHTML = this.player.traits.killstreak;
		document.querySelector("#strength").innerHTML = this.player.traits.strength;
		document.querySelector("#happiness").innerHTML = this.player.traits.happiness;
		document.querySelector("#holiness").innerHTML = this.player.traits.holiness;
		document.querySelector("#wealth").innerHTML = this.player.traits.wealth;
		document.querySelector("#education").innerHTML = this.player.traits.education;
		document.querySelector("#crime").innerHTML = this.player.traits.crime;
		document.querySelector("#income").innerHTML = (this.player.traits.career)? this.player.traits.career.income : 0;
		document.querySelector("#annual_cost").innerHTML = this.player.traits.annual_cost;
		document.querySelector("#satisfaction").innerHTML = (this.player.traits.career)? this.player.traits.career.jobSatisfaction : 0;
		document.querySelector("#stats_modal").style.display = "block";
		return;
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
				this.show_player_stats();
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
		this.stage += (this.stage<24) ? 1 : 2;
		let stage = (this.game_ended()) ? "Game Over" : this.stage;
		while(textFadeIn<255){
			fill(0);
			rect(0, 0, width, height);
			// Display the next age in the middle
			fill(255,255,255,textFadeIn);
			stroke(255,255,255,textFadeIn);
			textSize(80);
			text(stage, width / 2, height / 2);
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


	update_player_stats(){
		if(this.player.traits.career){
			let income = this.player.traits.career.income;
			let satisfaction = this.player.traits.career.jobSatisfaction;
			this.player.traits.wealth += income;
			this.player.traits.happiness += satisfaction;
		}

		return;
	}
	
	
		// Method to show ending
	show_ending_modal(){
		document.querySelector("#ending_strength").innerHTML = this.player.traits.strength;
		document.querySelector("#ending_happiness").innerHTML = this.player.traits.happiness;
		document.querySelector("#ending_holiness").innerHTML = this.player.traits.holiness;
		document.querySelector("#ending_wealth").innerHTML = this.player.traits.wealth;
		document.querySelector("#ending_education").innerHTML = this.player.traits.education;
		document.querySelector("#ending_crime").innerHTML = this.player.traits.crime;
		document.querySelector("#ending_kills").innerHTML = this.player.traits.killstreak;
		document.querySelector("#gameEndingModal").style.display = "block";
		return;
	}
	
	
	game_ended(){
		return (this.stage >= 80 || this.player.traits.health <= 0);
	}
}


