var available_events = {
	"introduction" : new Event("Welcome!", "This is the Catholic Game of Life with the theme of Discernment and Vocation. Each stage, you will be presented with a scenraio, or an event with available choices for you to make. Be careful, these choices will affect your character's traits and therefore your gameplay will diverge into different paths. That's Discernment!", [
		new Choice("Let's Play!!!",
				new Outcome("Disclaimer", "I swear your character's race and gender don't affect the game's logics. Every outcomes are either random or based of your current traits. I'm not discriminating on anyone. I promise...", {})),
	]),

	"college" : new Event("College", "You have just finished High School, you are strong and young. Now you have to make an important decision in you life between studying in college for the next 5 years or start working from now on. What would it be?", [
								new Choice("I guess I will study further... I dunno.",
										new Outcome("A New Scholar!", "Welcome to post-secondary studies! You will study all mankind's knowledge here. It will be quite a strain on your kidney tho...", {wealth: -50000, college: true})),
								new Choice("Nah, I'm good.",
										new Outcome("Where your life starts...", "Alright, you are an adult now. Your life choices diverge from here.", {})),
							]),
	
	"marriage" : new Event("Marriage!", "You decided you have found your soulmate! You guys have been together for a few years now and this feeling doesn't seem to go away. Would you like to marry this lovely person???",[
									new Choice("Yes! I want to spend the rest of life with this person!",
											new Outcome("Friend For Life!!!", "You were born for each other, this is God's plan! This lovely feeling is real... So was the wedding bills...", {happiness: 200, holiness: 50, wealth: -40000, married: true})),
									new Choice("Woah! I heard that the wedding bills are very ex...",
											new Outcome("Soulmate my arse", "Great Job! You mange to keep yourself from spending 30000 dollars. But you couldn't keep her...", {happiness: -500, holiness: 50}))			
							]),
	"have_kids" : new Event("*Honey, let's have kids!*", "It's mating season! You and your partner are both fertilizable creatures, want to make some babies?",[
									new Choice("Oh yeah! Let's us have... You know... Sexy stuff...",
											new Outcome("Passed on the Genes!", "Your ancestors are proud, your kids are strong and is now starting their own Game of Life. However, you now have more mouths to feed...", {happiness: 200, holiness: 100, wealth: -2000, annual_cost: -7200})),
									new Choice("SCREW Them KIDS!",
											new Outcome("Natural Selection", "Why be so aggressive, you must be very sensitive about your wallet, huh? Smart choice though.", {happiness: -200, holiness: -100}))			
							]),
	"rating" : new Event("A Word from The Developer", "Respectfully, the developer is begging you to sacrifice a minute of your time to leave a 5-star review, not for the game, but a 5-star Google review for his workplace. While I was working on the game, some moron left a 1-star review for the place, AT 1 AM. You can find the place on Google Map as Spunky's Convenience Store, please leave a 5-star review and thank you very much for your consideration. I hate this place...",[
									new Choice("Yeah Sure! I'll leave a review for Spunky's Convenience Store!",
											new Outcome("THANK YOU", "THANK YOU! THANK YOU! Here, have some cash for the trouble!", {holiness: 100, wealth: 2000})),
									new Choice("Damn, I kinda... Don't care.",
											new Outcome("It's Okay...", "I don't blame you, God does.", {happiness: -20, holiness: -1000}))			
							]),
}


let normal_jobs = [
	new Outcome("Mc Donalds", "You are now working at Mc Donalds. Hurray, I guess...", 
			{career: new Career("Mc Donalds Employee", 23000, -50)}),
	new Outcome("Plumber", "'I hope it was like in the movies...'", 
			{career: new Career("Pumbler", 37000, 10)}),
	new Outcome("Construction Workers", "Please, please don't end up on LiveLeaks", 
			{career: new Career("Mc Donalds Employee", 40000, -5)}),
	new Outcome("Janitor", "You bring order to society.", 
			{career: new Career("Janitor", 33000, 5)}),
	new Outcome("Pizza Delivery", "'You have 25 minutes, GO!'", 
			{career: new Career("Pizza Delivery", 33000, 10)}),
]

let college_jobs = [
	new Outcome("Accountant", "Wow, pretty good job. Counting money n stuff. Definitely worth those 5 years in college!", 
			{career: new Career("Mc Donalds Employee", 70000, 20)}),
]

let scholar_jobs = [
	new Outcome("Doctor", "Wow, pretty good job. Counting money n stuff. Definitely worth those 5 years in college!", 
			{career: new Career("Mc Donalds Employee", 70000, 20)}),
]

function apply_career(person, stage){
	let possible_jobs;
	if(person.traits.college && person.traits.education >= 2000){
		possible_jobs = scholar_jobs;
	}else if(person.traits.college){
		possible_jobs = college_jobs;
	}else{
		possible_jobs = normal_jobs;
	}
	
	if(stage === 23 && person.traits.college){
		return new Event("Career DAY!!!", "Congratulations, it's your last day at college and now you are fully prepared to land a great job! Still depends on how smart you are tho...", [
			new RandomChoice("I hope my degree was worth it!", possible_jobs)
		])
	}else{
		return new Event("Career DAY!!!", "Hey, its career day. Would you like to apply for a new job or just stay where you are in life right now?", [
			new RandomChoice("Yes PLEASE! I want a better job!", possible_jobs),
			new Choice("Nah, I'm comfortable with my current state.", 
				new Outcome("A Satisfied Man!", "You are either a happy man or just giving up...", {}))
		])
	}
}