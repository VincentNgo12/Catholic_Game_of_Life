var scenarios = {
	"stage_1": [
		new Scenario("Cockroach", "You found a cockroach in the toilet, what would you do???", [
			new Choice("Put it in your mouth and start munching on it.", 
					new Outcome("Pure Protein", "Pretty dirty tho...", {health: -10, holiness: -10, happiness: 5, strength : 1})),
			new Choice("Ignore it", 
					new Outcome("", "Fair enough..."))
		]),
		new Scenario("Toys", "What would be your favortie toy?", [
			new Choice("Teddy Bear", 
					new Outcome("Teddy", "Pretty decent choice, you loved it.", {happiness: 5})),
			new Choice("Barbie Doll", 
					new Outcome("Barbie", "I am not sure if you are a boy tho...")),
			new Choice("Wooden Sledge Hammer", 
					new Outcome("Power...", "You are built different", {strength: 3})),
		]),
	],
	"stage_2": [
		new Scenario("Diet", "What do you think your parents have been feeding you up to this point?", [
			new Choice("Baby Milk Formula", 
					new Outcome("Uhmm...", "Yummy... Adictive...", {health: 2, happiness: 2})),
			new Choice("Baby Soup", 
					new Outcome("I'll take what I have", "A decent meal for a day.", {health: 1, happiness: 1})),
			new Choice("Dad's Protein Powder", 
					new Outcome("A Gymer is Born...", "Old man mistake his powder with the baby formula...", {health: -5, strength: 5}))
		]),
	],
	"stage_3": [
  new Scenario("First Words", "You're three years old now. What were your first words?", [
    new Choice("Mama", 
      new Outcome("Sweet Child", "Your first word was 'Mama.' Your mother are delighted! Dad was pissed", {happiness: 2})),
    new Choice("Dada", 
      new Outcome("Daddy's Hero", "Your first word was 'Dada.' Your dad is overjoyed!", {happiness: 3})),
    new Choice("%@#*$#", 
      new Outcome("...", "What did you say to me, little s....", {happiness: -5})),
  ]),
  new Scenario("Playtime Adventure", "You have a chance to go on a fun adventure in the backyard. Do you go?", [
    new Choice("Backyard Adventure", 
      new Outcome("Backyard Explorer", "You embark on an exciting adventure in the backyard.", {happiness: 2, strength: 2})),
		new Choice("Is that an ant nest???", 
      new Outcome("Genocide", "You show your dad the nest and he started pouring molten aluminium down the nest...", {happiness: 5, strength: 2, holiness: -10, crime: 4})),
    new Choice("Stay Inside", 
      new Outcome("Indoor Fun", "You prefer to stay indoors and play with your toys.", {happiness: 1})),
  ]),
	],
	"stage_4": [
		new Scenario("It's that time of age.", "What did you want to become when you were 4?", [
			new Choice("Superheroes", 
				new Outcome("Heroic!!", "You feel like a hero.", {happiness: 5, strength: 10})),
			new Choice("Dinosaurs", 
				new Outcome("Beast!!", "Your favortie was the Spinosaurus, don't deny that", {happiness: 10, strengh: 10})),
			new Choice("Dogs", 
				new Outcome("You mean wolfs???", "Please don't be a furry...", {happiness: 5})),
		]),
		new Scenario("First Day of School", "It's your first day of preschool. How do you feel?", [
			new Choice("Excited", 
				new Outcome("Eager Learner", "You're excited to go to school and make new friends.", {happiness: 10, education: 10})),
			new Choice("Nervous", 
				new Outcome("Little Worrier", "You're a bit nervous, but it's normal for the first day.", {happiness: -5})),
			new Choice("Pumped UP", 
				new Outcome("Bring on em kids", "Looking for a worthy opponent, huh?", {happiness: 5, strength: 10})),
		]),
		new Scenario("Favorite Toy", "What's your favorite toy at age 4?", [
			new Choice("Building Blocks", 
				new Outcome("Future Engineer", "You love playing with building blocks and building amazing structures.", {happiness: 3, education: 5})),
			new Choice("Dolls", 
				new Outcome("Doll Collector", "You adore playing with dolls and creating stories with them.", {happiness: 10})),
			new Choice("Dad's Glock 17", 
				new Outcome("Whoah Woah..", "Careful over there buddy!", {happiness: 5, holiness: -10, crime: 4})),
		]),
	],
	"stage_5": [
		new Scenario("School Friends", "You've made friends at school. What's your favorite thing to do with your friends?", [
			new Choice("Play Tag", 
				new Outcome("Tag Champion", "You love playing tag with your friends and being the fastest runner.", {strength: 5})),
			new Choice("Tug of War", 
				new Outcome("Buff kids", "You were already feeling them muscles as a kid.", {strength: 7})),
			new Choice("MMA", 
				new Outcome("Oopsie...", "You punched Jeff in the back of his head and he has been playing dead for 17 hours.", {happiness: -30, holiness: -20, crime: 10, strength: 10})),
		]),
	],
	"stage_6": [
		new Scenario("*Honey, we need more milk.*", "In an evening, your Dad was leaving to get some milk, and smokes... ", [
			new RandomChoice("Daddy, bring me some toys too please.",[ 
				new Outcome("Don't you love me?", "It's been 3 months and your old man hasn't come home yet", {hapiness: -150}),
				new Outcome("Bro forgot them toys...", "Your dad returned with some milk but no toys...", {hapiness: -15}),
				new Outcome("I LOVE YOU OLD MAN", "He returned with milk and lots of toys!!! He loves you.", {hapiness: 80}),
				]),
		]),
	],
	"stage_7": [
		new Scenario("The Mysterious Package", "There was a strange package lying around in the corner of the sewer that you have been ignoring for a while now. However, the smell is getting unbearable. What would you do?", [
			new Choice("Open it up",
				new Outcome("Oh, that's a carcass...", "You opened the box to discover a rotting corpse of a kitten. This is surely not the first time this had happended aroudn here.", {happiness: -100})),
			new Choice("Not my business.",
				new Outcome("Someone else's job", "You continue to ignore the package and choose another route to school", {happiness: 5})),
			new Choice("Call the authorities",
				new Outcome("The polices are here", "Some polices and adults have gathered around the package but not a single man tell you what's inside the box. Your curiosity made you regret your choice.", {happiness: -8})),
		]),
	],
	"stage_8": [
		new Scenario("Dream Superpower", "You're daydreaming about having a superpower. What superpower do you wish for?", [
			new Choice("Flight",
				new Outcome("Airborne Explorer", "You imagine soaring through the skies and exploring the world from above.", {happiness: 5})),
			new Choice("Invisibility",
				new Outcome("Absolutely non-pervert", "You'd love to be invisible and go on secret 'non-pervert' missions.", {happiness: 5, holiness: -10})),
			new Choice("Telepathy",
				new Outcome("Mind Reader", "You dream of reading minds but you don't know how to read.", {education: -8})),
		]),
	],
	"stage_9": [
		new Scenario("The Forbidden Tree", "There was a forbidden tree in the school yard which you were told to not eat any food that it bears. You recall the Adman and Eve story from Mr. Ortman class and see yourself in that exact situation. What do?", [
			new Choice("They can't tell me what to do!",
				new Outcome("Pursuit of Strength and Wisdom!", "You climb the tree and start devouring the forbidden fruits, feeling euphoric the whole time! Turns out, the tree was deeply sprayed with pesticide and you only realized when the symptoms kick in.", {health: -200, holiness: -200})),
			new Choice("I want them but I can't climb trees.",
				new Outcome("Strength problem", "You failed to disappoint Mr. Ortman I guess...", {happiness: -5, strengh: -10})),
			new Choice("Better listen to Mr. Ortman!",
				new Outcome("Good Learner", "You avoided death there, the fruits was sprayed with pesticide leaving you with no chance of surving if you were eating them.", {education: 10, holiness: 10})),
		]),
	],
	"stage_10": [
		new Scenario("Haunted House Dare", "Your friends dare you to enter a haunted house in the middle of nowhere. What's your decision?", [
			new Choice("Fearlessly accept the dare", 
				new Outcome("Where The Ghosts Hiding???", "You enter the spooky house, get deeply disappointed as there were no ghosts to be found. it's just another meth lab with half naked men lying around.", {strength: 5, happiness: -10, holiness: -10})),
			new Choice("Decline the dare", 
				new Outcome("Wise Decision", "You avoid the haunted house, making a wise choice. Your friends may tease, but you're safe.", {happiness: 5, holiness: 10})),
		]),
		new Scenario("Mysterious Secret Discovery", "You discover a mysterious secret inside you own house. What was it?", [
			new Choice("Grandpa's Journal", 
				new Outcome("Old Man... What did you...", "You unlock the journal's secrets, revealing a darker story than you expected.", {happiness: -20})),
			new Choice("Dad's Laptop Browsing History", 
				new Outcome("Unexpected Ending", "You stumble upon your father's browsing history, only to find out he was just trying to figure out how to install Minecraft for you a few years ago. The truth is more innocent than you thought.", {happiness: 15})),
			new Choice("An Old Camcorder in Mom's bedroom", 
				new Outcome("Dear God...", "I wouldn't watch it if I were you.", {hapiness: -25})),
		]),
	],
	"stage_11": [
		new Scenario("Sleepover!", "You are at a sleepover and one of your friend is the first to fall asleep. What would you and your other friends to do him?", [
			new Choice("Leave the Poor Guy alone", 
				new Outcome("Fair enough...", "*You are right, this is not what Catholic classes have been teaching us.*", {holiness: 10})),
			new Choice("Perform a microsurgery", 
				new Outcome("Little Surgoens", "You and your friends did a small surgery on the dude, removing all his senses, and leaving him with only a pure Gateway to The Mind.", {happiness: 15, holiness: -200, crime: 100})),
			new Choice("Loot him", 
				new Outcome("Hidden treasures", "Wow, this guy is rich!", {hapiness: 10, holiness: -100, crime: 10, wealth: 20})),
		]),
	],
	"stage_12": [
		new Scenario("Uneasy Neighborhood", "On your way home, you saw a group of teenagers beating an old man. What is your next move?", [
			new Choice("Leave the old man alone!", 
				new Outcome("What were you thinking??", "The boys shove you in to beat with the old man. Who do you think you are? Muhammad Ali?", {health: -10, happiness: -10, holiness: 20})),
			new Choice("Can I join, please 👉👈.", 
				new Outcome("Sure thing, buddy.", "The group of teens gladly let you help them beat up the old man. Wholesome interaction!", {happiness: 25, strengh: 20, holiness:-30})),
			new Choice("Not my problem.", 
				new Outcome("You just don't care.", "That would be a smart choice in this situation.", {holiness: -10})),
		]),
	],
	"stage_13": [
		new Scenario("Pepsi alternative?", "In an evening, your uncle offer you a cool looking can of soda. 'Heineken'? You have never heard of it before. Wann try?", [
			new Choice("Looks cool, must be delicious.", 
				new Outcome("Disgusting", "The drink is bitter and disgusting, you thinks uncle is an idiot for drinking this.", {health: -1, happiness: -5})),
			new Choice("My mom said no sodas at night.", 
				new Outcome("", "'No drinks for you then, buddy.'", {happiness: -5, holiness:10})),
		]),
	],
	"stage_14": [
		new Scenario("First crush", "You soon realize that you were spending alot of time thinking about a paticular person in your classroom. Who was that person?", [
			new Choice("The most beautiful and talented kid in the room", 
				new Outcome("Out of your league", "'Bro, instead of thinking about someone who doesn't care about you, why don't you think for your mother?'", {happiness: -5})),
			new Choice("The science teacher", 
				new Outcome("Hol up", "'Bro... isn't that your mother???'", {happiness: 5, holiness: -10})),
		]),
	],
	"stage_15": [
		new Scenario("Lazy Sunday Walk", "You are just like any other teenagers, full of energy yet so tired. Do you want to follow mom to Church every Sunday?", [
			new Choice("Yes", 
				new Outcome("Church Child", "You barely kept your attention span during mass, but you went to it anyway. Good job!", {happiness: 10, holiness: 20})),
			new Choice("Nah, let me sleep", 
				new Outcome("Lazy Child", "Zzzzzzz...Zzzz", {holiness: -10})),
		]),
	],
	"stage_16": [
		new Scenario("Time to Shine", "You see a man assaulting a pregnant woman in a small alley at night, he was not armed just casually punching her. What would you do given you have a muscled 16-year old body?", [
			new RandomChoice("Pick up a fight with the man",[ 
				new Outcome("Devastated", "Oh, I didn't mention he was 3 times your size? Too bad. Kudo for standing up for the woman tho.", {health: -20, happiness: -20, holiness: 50}),
				new Outcome("Exhausted Warrior", "It was a long fight, you two exchange blows but no one seems to be winning. You two soon get tired and decided to leave.", {health: -2, happiness: -5, holiness: 50}),
				new Outcome("Overpowered", "You beat the man to a pulp, thinking the pregnant woman would then be your girlfriend but she said she already has a husband. Goddamit! This happens everytime!", {hapiness: -1, strengh: 20, holiness: 50}),
				]),
			new Choice("Make it a 2v2", 
				new Outcome("Fair Play", "You joined the man to punch the pregnant woman (2v2 combat). She didn't stand a single chance against you.", {holiness: -300, strengh: 10, happiness: 10})),
		]),
	],
	"stage_18": [
		new Scenario("Important One", "You just finished High School, you are Young and Strong. What would you do, spend the next 5 years studying in college, or start grinding for the rest of your", [
			new Choice("Baby Milk Formula", 
					new Outcome("Uhmm...", "Yummy... Adictive...", {health: 2, happiness: 2})),
			new Choice("Baby Soup", 
					new Outcome("I'll take what I have", "A decent meal for a day.", {health: 1, happiness: 1})),
			new Choice("Dad's Protein Powder", 
					new Outcome("A Gymer is Born...", "Old man mistake his powder with the baby formula...", {health: -5, strength: 5}))
		]),
	]
}


var mid_life_scenarios = [
		new Scenario("It's that time of age.", "What did you want to become when you were 4?", [
			new Choice("Superheroes", 
				new Outcome("Heroic!!", "You feel like a hero.", {happiness: 5, strength: 10})),
			new Choice("Dinosaurs", 
				new Outcome("Beast!!", "Your favortie was the Spinosaurus, don't deny that", {happiness: 10, strengh: 10})),
			new Choice("Dogs", 
				new Outcome("You mean wolfs???", "Please don't be a furry...", {happiness: 5})),
		]),
		new Scenario("First Day of School", "It's your first day of preschool. How do you feel?", [
			new Choice("Excited", 
				new Outcome("Eager Learner", "You're excited to go to school and make new friends.", {happiness: 10, education: 10})),
			new Choice("Nervous", 
				new Outcome("Little Worrier", "You're a bit nervous, but it's normal for the first day.", {happiness: -5})),
			new Choice("Pumped UP", 
				new Outcome("Bring on em kids", "Looking for a worthy opponent, huh?", {happiness: 5, strength: 10})),
		]),
		new Scenario("Favorite Toy", "What's your favorite toy at age 4?", [
			new Choice("Building Blocks", 
				new Outcome("Future Engineer", "You love playing with building blocks and building amazing structures.", {happiness: 3, education: 5})),
			new Choice("Dolls", 
				new Outcome("Doll Collector", "You adore playing with dolls and creating stories with them.", {happiness: 10})),
			new Choice("Dad's Glock 17", 
				new Outcome("Whoah Woah..", "Careful over there buddy!", {happiness: 5, holiness: -10, crime: 4})),
		]),
	]


var college_scenarios = [
		new Scenario("It's that time of age.", "What did you want to become when you were 4?", [
			new Choice("Superheroes", 
				new Outcome("Heroic!!", "You feel like a hero.", {happiness: 5, strength: 10})),
			new Choice("Dinosaurs", 
				new Outcome("Beast!!", "Your favortie was the Spinosaurus, don't deny that", {happiness: 10, strengh: 10})),
			new Choice("Dogs", 
				new Outcome("You mean wolfs???", "Please don't be a furry...", {happiness: 5})),
		]),
		new Scenario("First Day of School", "It's your first day of preschool. How do you feel?", [
			new Choice("Excited", 
				new Outcome("Eager Learner", "You're excited to go to school and make new friends.", {happiness: 10, education: 10})),
			new Choice("Nervous", 
				new Outcome("Little Worrier", "You're a bit nervous, but it's normal for the first day.", {happiness: -5})),
			new Choice("Pumped UP", 
				new Outcome("Bring on em kids", "Looking for a worthy opponent, huh?", {happiness: 5, strength: 10})),
		]),
		new Scenario("Favorite Toy", "What's your favorite toy at age 4?", [
			new Choice("Building Blocks", 
				new Outcome("Future Engineer", "You love playing with building blocks and building amazing structures.", {happiness: 3, education: 5})),
			new Choice("Dolls", 
				new Outcome("Doll Collector", "You adore playing with dolls and creating stories with them.", {happiness: 10})),
			new Choice("Dad's Glock 17", 
				new Outcome("Whoah Woah..", "Careful over there buddy!", {happiness: 5, holiness: -10, crime: 4})),
		]),
	]


var criminal_scenarios = [
		new Scenario("It's that time of age.", "What did you want to become when you were 4?", [
			new Choice("Superheroes", 
				new Outcome("Heroic!!", "You feel like a hero.", {happiness: 5, strength: 10})),
			new Choice("Dinosaurs", 
				new Outcome("Beast!!", "Your favortie was the Spinosaurus, don't deny that", {happiness: 10, strengh: 10})),
			new Choice("Dogs", 
				new Outcome("You mean wolfs???", "Please don't be a furry...", {happiness: 5})),
		]),
		new Scenario("First Day of School", "It's your first day of preschool. How do you feel?", [
			new Choice("Excited", 
				new Outcome("Eager Learner", "You're excited to go to school and make new friends.", {happiness: 10, education: 10})),
			new Choice("Nervous", 
				new Outcome("Little Worrier", "You're a bit nervous, but it's normal for the first day.", {happiness: -5})),
			new Choice("Pumped UP", 
				new Outcome("Bring on em kids", "Looking for a worthy opponent, huh?", {happiness: 5, strength: 10})),
		]),
		new Scenario("Favorite Toy", "What's your favorite toy at age 4?", [
			new Choice("Building Blocks", 
				new Outcome("Future Engineer", "You love playing with building blocks and building amazing structures.", {happiness: 3, education: 5})),
			new Choice("Dolls", 
				new Outcome("Doll Collector", "You adore playing with dolls and creating stories with them.", {happiness: 10})),
			new Choice("Dad's Glock 17", 
				new Outcome("Whoah Woah..", "Careful over there buddy!", {happiness: 5, holiness: -10, crime: 4})),
		]),
	]


var catholic_scenarios = [
		new Scenario("It's that time of age.", "What did you want to become when you were 4?", [
			new Choice("Superheroes", 
				new Outcome("Heroic!!", "You feel like a hero.", {happiness: 5, strength: 10})),
			new Choice("Dinosaurs", 
				new Outcome("Beast!!", "Your favortie was the Spinosaurus, don't deny that", {happiness: 10, strengh: 10})),
			new Choice("Dogs", 
				new Outcome("You mean wolfs???", "Please don't be a furry...", {happiness: 5})),
		]),
		new Scenario("First Day of School", "It's your first day of preschool. How do you feel?", [
			new Choice("Excited", 
				new Outcome("Eager Learner", "You're excited to go to school and make new friends.", {happiness: 10, education: 10})),
			new Choice("Nervous", 
				new Outcome("Little Worrier", "You're a bit nervous, but it's normal for the first day.", {happiness: -5})),
			new Choice("Pumped UP", 
				new Outcome("Bring on em kids", "Looking for a worthy opponent, huh?", {happiness: 5, strength: 10})),
		]),
		new Scenario("Favorite Toy", "What's your favorite toy at age 4?", [
			new Choice("Building Blocks", 
				new Outcome("Future Engineer", "You love playing with building blocks and building amazing structures.", {happiness: 3, education: 5})),
			new Choice("Dolls", 
				new Outcome("Doll Collector", "You adore playing with dolls and creating stories with them.", {happiness: 10})),
			new Choice("Dad's Glock 17", 
				new Outcome("Whoah Woah..", "Careful over there buddy!", {happiness: 5, holiness: -10, crime: 4})),
		]),
	]


var late_life_scenarios = [
		new Scenario("It's that time of age.", "What did you want to become when you were 4?", [
			new Choice("Superheroes", 
				new Outcome("Heroic!!", "You feel like a hero.", {happiness: 5, strength: 10})),
			new Choice("Dinosaurs", 
				new Outcome("Beast!!", "Your favortie was the Spinosaurus, don't deny that", {happiness: 10, strengh: 10})),
			new Choice("Dogs", 
				new Outcome("You mean wolfs???", "Please don't be a furry...", {happiness: 5})),
		]),
		new Scenario("First Day of School", "It's your first day of preschool. How do you feel?", [
			new Choice("Excited", 
				new Outcome("Eager Learner", "You're excited to go to school and make new friends.", {happiness: 10, education: 10})),
			new Choice("Nervous", 
				new Outcome("Little Worrier", "You're a bit nervous, but it's normal for the first day.", {happiness: -5})),
			new Choice("Pumped UP", 
				new Outcome("Bring on em kids", "Looking for a worthy opponent, huh?", {happiness: 5, strength: 10})),
		]),
		new Scenario("Favorite Toy", "What's your favorite toy at age 4?", [
			new Choice("Building Blocks", 
				new Outcome("Future Engineer", "You love playing with building blocks and building amazing structures.", {happiness: 3, education: 5})),
			new Choice("Dolls", 
				new Outcome("Doll Collector", "You adore playing with dolls and creating stories with them.", {happiness: 10})),
			new Choice("Dad's Glock 17", 
				new Outcome("Whoah Woah..", "Careful over there buddy!", {happiness: 5, holiness: -10, crime: 4})),
		]),
	]


function get_related_scenarios(person,stage){
	let related_scenarios = [];
	if(person.traits.college && stage<=23){
		related_scenarios.concat(college_scenarios);
	}else if(stage <= 60){
		related_scenarios.concat(mid_life_scenarios);
	}else if(stage > 60){
		related_scenarios.concat(late_life_scenarios);
	}
	
	// Additional Scnarios
	if(person.traits.crime >= 1000){
		related_scenarios.concat(criminal_scenarios);
	}if(person.traits.holiness >= 1000){
		related_scenarios.concat(catholic_scenarios);
	}
	
	return random(related_scenarios);
}


