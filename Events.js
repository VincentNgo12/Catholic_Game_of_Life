var available_events = {
	"college" : new Event("College", "You have just finished High School, you are strong and young. Now you have to make an important decision in you life between studying in college for the next 5 years or start working from now on. What would it be?", [
								new Choice("I guess I will study further... I dunno.",
										new Outcome("A New Scholar!", "Welcome to post-secondary studies! You will study all mankind's knowledge here. It will be quite a strain on your kidney tho...", {wealth: -50000, college: true})),
								new Choice("Nah, I'm good.",
										new Outcome("Where your life starts...", "Okay, work.", {})),
							]),
	
	"marriage" : new Event(),
}


let normal_jobs = [
	new Outcome("Mc Donalds", "You are now working at Mc Donalds. Hurray, I guess...", 
			{career: new Career("Mc Donalds Employee", 23000, -50)}),
	new Outcome("Plumber", "You are now working at Mc Donalds. Hurray, I guess...", 
			{career: new Career("Mc Donalds Employee", 23000, -50)}),
	new Outcome("Mc Donalds", "You are now working at Mc Donalds. Hurray, I guess...", 
			{career: new Career("Mc Donalds Employee", 23000, -50)}),
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