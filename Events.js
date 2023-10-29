var available_events = {
	"introduction" : new Event("Welcome!", "This is the Catholic Game of Life with the theme of Discernment and Vocation. Each stage, you will be presented with a scenraio, or an event with available choices for you to make. Be careful, these choices will affect your character's traits and therefore your gameplay will diverge into different paths. That's Discernment!", [
		new Choice("Let's Play!!!",
				new Outcome("Disclaimer", "Your character's race and gender don't affect the game's logics At ALL. Every outcomes are either random or based of your current traits. I'm not discriminating on anyone. I promise...", {})),
	]),

	"college" : new Event("College", "You have just finished High School, you are strong and young. Now you have to make an important decision in you life between studying in college for the next 5 years or start working from now on. What would it be?", [
								new Choice("Yes, I will study harder in college",
										new Outcome("A New Scholar!", "Welcome to post-secondary studies! You will study all mankind's knowledge here. It will be quite a strain on your kidney tho...", {wealth: -50000, college: true, annual_cost: -18000})),
								new Choice("Nope",
										new Outcome("Where your life starts...", "Alright, you are an adult now. Your life choices diverge from here.", {annual_cost: -18000})),
							]),
	
	"marriage" : new Event("Marriage!", "You decided you have found your soulmate! You guys have been together for a few years now and this feeling doesn't seem to go away. Would you like to marry this lovely person???",[
									new Choice("Yes! I want to spend the rest of life with this person!",
											new Outcome("Friend For Life!!!", "You were born for each other, this is God's plan! This lovely feeling is real... So was the wedding bills...", {happiness: 200, holiness: 50, wealth: -40000, married: true, annual_cost: -20000})),
									new Choice("Woah! I heard that the wedding bills are very ex...",
											new Outcome("Soulmate my arse", "Great Job! You mange to keep yourself from spending 30000 dollars. But you couldn't keep her...", {happiness: -500, holiness: 50}))			
							]),
	"have_kids" : new Event("*Honey, let's have kids!*", "It's mating season! You and your partner are both fertilizable creatures, want to make some babies?",[
									new Choice("Oh yeah! Let's us have... You know... Sexy stuff...",
											new Outcome("Passed on the Genes!", "Your ancestors are proud, your kids are strong and is now starting their own Game of Life. However, you now have more mouths to feed...", {happiness: 200, holiness: 100, wealth: -2000, annual_cost: -7200})),
									new Choice("SCREW Them KIDS!",
											new Outcome("Natural Selection", "Why be so aggressive, you must be very sensitive about your wallet, huh? Smart choice though.", {happiness: -200, holiness: -100}))			
							]),
	"rating" : new Event("A Word from The Developer", "Please give Spunky's Convenience Store a 5-star rating on Google Maps. Some guy gave my a 1-star while I was making this.",[
									new Choice("Yeah Sure! I'll leave a review for Spunky's Convenience Store!",
											new Outcome("THANK YOU", "THANK YOU! THANK YOU! Here, have some cash for the trouble!", {holiness: 100, wealth: 2000})),
									new Choice("Damn, I kinda... Don't care.",
											new Outcome("It's Okay...", "I don't blame you, God does.", {happiness: -20, holiness: -1000}))			
							]),
}


let normal_jobs = [
	new Outcome("Mc Donalds", "You are now working at Mc Donalds.", 
			{career: new Career("Mc Donalds Employee", 23000, -30)}),
	new Outcome("Plumber", "'I hope it was like in the movies...'", 
			{career: new Career("Pumbler", 37000, 10)}),
	new Outcome("Construction Workers", "Please, please don't end up on LiveLeaks", 
			{career: new Career("Mc Donalds Employee", 40000, -5)}),
	new Outcome("Warehouse Worker", "Go easy on your lower back.", 
			{career: new Career("Warehouse Worker", 30000, 5)}),
	new Outcome("Security Guard", "Those night shifts are sooo scary...", 
			{career: new Career("Security Guard", 27000, 10)}),
	new Outcome("Cashier", "You manage fininacial transactions for big companies!", 
			{career: new Career("Cashier", 22000, -5)}),
]

let college_jobs = [
	new Outcome("Accountant", "Wow, pretty good job. Counting money n stuff. Definitely worth those 5 years in college!", 
			{career: new Career("Accountant", 70000, 40)}),
	new Outcome("Human Resources", "'I got reports that you made a really funny joke yesterday. Wanna share it to me?'", 
			{career: new Career("Human Resources", 75000, 30)}),
	new Outcome("Financial Analyst", "Oohh, fancy name. I wonder what you guys do?", 
			{career: new Career("Financial Analyst", 90000, 30)}),
	new Outcome("Material Scientist", "You want to believe LK-99 is true...", 
			{career: new Career("Material Scientist", 100000, 70)}),
]

let scholar_jobs = [
	new Outcome("Doctor", "You studied hard and deserve this position.", 
			{career: new Career("Doctor", 200000, 200)}),
	new Outcome("Mechanical Engineer", "You are nerds fixing stuff, good pay tho.", 
			{career: new Career("Mechanical Engineer", 140000, 100)}),
	new Outcome("Software Engineer", "You are overpaid too much for just sitting infront of a screen. What do you guys even do?", 
			{career: new Career("Software Engineer", 130000, 150)}),
	new Outcome("Lawyer", "Rumours said lawyers don't go to Heaven, but you are too busy getting paid to even bother.", 
			{career: new Career("Software Engineer", 200000, 180)}),		
]

function apply_career(person, stage){
	let possible_jobs;
	if(person.traits.college && person.traits.education >= 1500){
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