function get_available_actions(person){
	let choices = [
		new Choice("Workout",
				new ActionOutcome("Working Out Them Muscles", [
					"They don't know me son!",
					"Who's gonna carry the boats!",
					"You felt like a beast!",
					"Pumping Iron!"
				], {strength: 50})
		),
		new Choice("Pray",
				new ActionOutcome("Thoughts and Prayers", [
					"The Holy Spirit is within you.",
					"God protects you.",
					"You have gained tremendous strength... spiritually.",
					"Amen..."
				], {holiness: 50})
		),
		new Choice("Serve the Church",
				new ActionOutcome("Thoughts and Prayers", [
					"You always felt Church as your home.",
					"It's peaceful to serve the Church and God Himself.",
					"The Catholic girls are impressed at how many stack of chairs you can carry.",
					"You feel like this is where you belong."
				], {holiness: 100, wealth: -1000})
		)]
	
	
	if(person.traits.career){
		choices.push(
		new Choice("Gind",
				new ActionOutcome("Keeping the grind up!", [
					"Can you keep this up for the rest of your life?",
					"I've earned more, but at what cost??",
					"I will be happy once I earn enough, right???",
					"Those extra hours will pay out, I promise."
				], {wealth: person.career.income*0.3, hapiness: -100})
		));
	}


	if(person.traits.college){
		choices.push(
			new Choice("Study",
					new ActionOutcome("Dedicated Student", [
						"One day, all your hard work will pay off.",
						"That Bachelor's degree can't guaranteed you a good job, only you can.",
						"Do what's right, not what's easy.",
						"I just need to be a virgin for a few more years..."
					], {education: 100, happiness: -50})
			));
	}
	
	
	return new Action("New year plans!", "What would you dedicate this year for?", choices);
}
