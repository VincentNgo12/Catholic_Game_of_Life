var scenarios = {
	"stage_1": [
		new Scenario("Cockroach", "You found a cockroach in the toilet, what would you do???", [
			new Choice("Put it in your mouth and start munching on it.", 
					new Outcome("Pure Protein", "Pretty dirty tho...", {health: -10, holiness: -10, happiness: 5, strength : 1})),
			new Choice("Ignore it", 
					new Outcome("", "Fair enough..."))
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
				new Outcome("Oopsie...", "You punched Jeff in the back of his head and he has been playing dead for 17 hours.", {killstreak: 1, happiness: -30, holiness: -20, crime: 10, strength: 10})),
		]),
	],
	"stage_6": [
		new Scenario("*Honey, we need more milk.*", "In an evening, your Dad was leaving to get some milk, and smokes... ", [
			new RandomChoice("Daddy, bring me some toys too please.",[ 
				new Outcome("Don't you love me?", "It's been 3 months and your old man hasn't come home yet", {happiness: -150}),
				new Outcome("Bro forgot them toys...", "Your dad returned with some milk but no toys...", {happiness: -15}),
				new Outcome("I LOVE YOU OLD MAN", "He returned with milk and lots of toys!!! He loves you.", {happiness: 80}),
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
				new Outcome("Dear God...", "I wouldn't watch it if I were you.", {happiness: -25})),
		]),
	],
	"stage_11": [
		new Scenario("Sleepover!", "You are at a sleepover and one of your friend is the first to fall asleep. What would you and your other friends to do him?", [
			new Choice("Leave the Poor Guy alone", 
				new Outcome("Fair enough...", "*You are right, this is not what Catholic classes have been teaching us.*", {holiness: 10})),
			new Choice("Perform a microsurgery", 
				new Outcome("Little Surgoens", "You and your friends did a small surgery on the dude, removing all his senses, and leaving him with only a pure Gateway to The Mind.", {killstreak: 1, happiness: 15, holiness: -200, crime: 100})),
			new Choice("Loot him", 
				new Outcome("Hidden treasures", "Wow, this guy is rich!", {happiness: 10, holiness: -100, crime: 10, wealth: 20})),
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
		new Scenario("What's the matter?", "You saw a man running from a room, panicking and terrified. You grabeb him and asked calmly - 'What did you see?'. What did he answer?", [
			new Choice("Morgan's Browsing History", 
					new Outcome("Poor guy...", "Those materials would traumatize him for life. I wouldn't want to be him...", {happiness: -4, holiness: -3})),
			new Choice("A spider", 
					new Outcome("Understandable", "Have a good day.", {happiness: 4})),
			new Choice("Mr. Ortman newest assignments", 
					new Outcome("Stressful Workloads", "You don't blame him, he has good reasons to be traumatized by those deadlines.", {happiness: 4})),
			new Choice("Morgan's Basement", 
					new Outcome("Stressful Workloads", "You don't blame him, he has good reasons to be traumatized by those deadlines.", {happiness: 20})),
		]),
	],
	"stage_17": [
		new Scenario("Alley Hero", "You see a man assaulting a pregnant woman in a small alley at night, he was not armed just casually punching her. What would you do given you have a muscled 17-year old body?", [
			new RandomChoice("Pick up a fight with the man",[ 
				new Outcome("Devastated", "Oh, I didn't mention he was 3 times your size? Too bad. Kudo for standing up for the woman tho.", {health: -20, happiness: -20, holiness: 50}),
				new Outcome("Exhausted Warrior", "It was a long fight, you two exchange blows but no one seems to be winning. You two soon get tired and decided to leave.", {health: -2, happiness: -5, holiness: 50}),
				new Outcome("Overpowered", "You beat the man to a pulp, thinking the pregnant woman would then be your girlfriend but she said she already has a husband. Goddamit! This happens everytime!", {happiness: -1, strengh: 20, holiness: 50}),
				]),
			new Choice("Make it a 2v2", 
				new Outcome("Fair Play", "You joined the man to punch the pregnant woman (2v2 combat). She didn't stand a single chance against you.", {holiness: -300, strengh: 10, happiness: 10})),
		]),
	],
	"stage_18": [
		new Scenario("Birthday Party!", "You are having fun preparing a cake to celebrate the birthdate of Morgan's girlfriend until you sense something is off about the candles. How many candles were on the cake?", [
			new Choice("3", 
					new Outcome("Oh God...", "Should I call the police?", {happiness: -40, holiness: -30})),
			new Choice("80", 
					new Outcome("Did I count that right?", "I recall my grandmother mentioning her new boyfriend...", {happiness: -40})),
			new Choice("25", 
					new Outcome("Hee Hee", "Lucky Fellow!", {happiness: 20})),
		]),
	]
}


var mid_life_scenarios = [
		new Scenario("Social Interaction", "A homeless man offer you 20$ to kiss him on the cheeks, what would you do?", [
			new Choice("20$ is 20$", 
				new Outcome("Night Night", "You kissed the man goodnight", {happiness: 5, wealth: 20})),
			new Choice("Ignore him", 
				new Outcome("Normal Day in Downtown", "It does not bother you.", {})),
			new Choice("Beat Him Up", 
				new Outcome("Rewarding", "You beat him up and took his 20$", {happiness: 5, strength: 5, wealth: 20, holiness: -10})),
		]),
		new Scenario("Stressful Day", "You had a paticular bad day today, what would you do to ease the stress?", [
			new Choice("Eat Junk Foods", 
				new Outcome("My comfort zone", "You are happy and comfy eating junk food in your cozy place. Surely life can't get better than this. Still pretty unhealthy tho.", {happiness: 10, health: -1})),
			new Choice("Consume Alcohol", 
				new Outcome("Alcoholic", "Those stuff are depressant, they not going to make you feel any better.", {happiness: -20, health: -10, holiness: -10})),
			new Choice("Suck it up", 
				new Outcome("Doomers", "You go home and cried in the shower. Don't be so hard on yourself, you have options", {happiness: -30})),
			new Choice("Beat up a homeless man", 
				new Outcome("Satisfying...", "You found a homeless man and paid him to let you beat him up. You only paid 10$ but beat him to the hospital. You felt really sastifying afterward.", {happiness: 30, strengh: 20, wealth: 10, holiness: -50, crime: 50})),
		]),
		new Scenario("Public Washrooms", "You went to a public washroom and found out that somebody has clogged the toilet with thick tissues.", [
			new Choice("Choose a different stall", 
				new Outcome("Common Sense", "You just want to finish your businesses", {happiness: 3})),
			new Choice("Unclog the toilet", 
				new Outcome("Considerate Person", "You care about the janitor's feelings so you did his job. Good job!", {happiness: 10, holiness: 20})),
			new Choice("Nuke The Toilet", 
				new Outcome("Pure Evil", "You just had Taco Bells and decided to nuke this particular stall beyond repair just because you can. Now no one is fixing anything...", {killstreak: 1, happiness: 5, holiness: -20})),
		]),
		new Scenario("Moral Problem", "You are driving at night and you see an old woman on the lane you are driving. You can change lane but there is also a small child on the other lane. What will you do in this situation? No worries, no one will be there to witness a thing (except the old woman).", [
			new Choice("Sacrifice the Old Woman", 
				new Outcome("You have seen enough...", "You have killed the old woman. Wise choice, the child is too small to report you...", {killstreak: 1, happiness: -50})),
			new Choice("Sacrifice the Child", 
				new Outcome("I'm sorry little one", "You killed the child, devastated. However, the old woman immediately start screaming for help and she might call the police on you.", {killstreak: 1, happiness: -80, crime: 100})),
			new Choice("Steer the car to the tree to save both", 
				new Outcome("Heroic Ending", "You managed to save both souls, but the tree wasn't so forgiving. You died that tragic night as a silent hero. The old woman remembers, the child don't give a damn. Good for you.", {holiness: 5000, health: -2000})),
			new Choice("Drift sideways and aim for both", 
				new Outcome("Tokyo Night", "The drift was executed flawlessly. Both the old woman and the child stood no chance against the great momentum of the car. You then sped away, painting the road red.", {killstreak: 2, holiness: -500, crime: 800})),
		]),
		new Scenario("Little Douchebag", "You are standing in a martial art dojo minding your own business and a little child start perform his martial art moves on your leg. What to do?", [
			new Choice("Tell Morgan (instructor) to handle him", 
				new Outcome("Beating is Teaching", "You saw Morgan pull the kid to the far side and start smacking the life out of him (John Cena style). You are happy as education is done right", {happiness: 80})),
			new Choice("Punch the Kid", 
				new Outcome("Oneshot", "KnockOut!", {happiness: 50, crime: 100, holiness: -50})),
			new Choice("Punch the Kid and the Mother", 
				new Outcome("Tough One", "The kid was easy, the Mother... Not so much.", {holiness: -50, health: -10, happiness: 12, crime: 100})),
		]),
		new Scenario("Lost Wallet", "You find a wallet on the street with cash and identification. What's your next move?", [
			new Choice("Return the Wallet", 
				new Outcome("Good deed", "You did something right, good job!", {happiness: 30, holiness: 50})),
			new Choice("keep the Cash", 
				new Outcome("Mhh..", "Good stuff", {happiness: 30, crime: 50, holiness: -50, wealth: 1000})),
			new Choice("Find the address and loot his House", 
				new Outcome("Big Pay!", "This man is quite wealthy, you have benefited alot from this.", {holiness: -100, happiness: 20, crime: 200, wealth: 50000})),
		]),
		new Scenario("Monke", "You went to the zoo and see a big monkey smiling, show its teeth, and opening his arms toward you. It must be a sign of friendship! What would you do?", [
			new Choice("Hug the money", 
				new Outcome("Life lesson", "Turns out, showing teeth is a sign of threat in the animal kingdom. The monkey ended up assaulting you, leaving you on the verge of death. Don't ever do that again.", {happiness: -200, health: -70, holiness: -100})),
			new Choice("Stay away from it", 
				new Outcome("Sorry friend", "But I am aware that you have much more muscle mass than I am.", {happiness: -10})),
			new Choice("Banana", 
				new Outcome("Monke Treats", "You throw your half-eaten banana at him and he glady devour it. Everyone is happy.", {holiness: 50, happiness: 30})),
		]),
		new Scenario("Strange street", "You were walking in a neighborhood when an Elmo-looking guy approached you. 'You are in the wrong Sesame Street motherforkor!', said Elmo. The dude didn't look armed, what did you do in that situation?", [
			new Choice("Engage Combat", 
				new Outcome("Soft stuff", "The guy didn't stand a chance against you but you notice something odd. The dude's body was really soft, much like muppets'. Elmo, was that you?", {killstreak: 1, happiness: -20, health: -2, holiness: -100, crime: 100})),
			new Choice("Appologize and walk away", 
				new Outcome("So weird..", "As you walked away, Elmo guy kept on swearing something in Alphabetical order. 'Sesame Street is not for me'.", {happiness: -10})),
			new Choice("Order a Drone Strike", 
				new Outcome("The Pentagon answered", "They started pouring down a heavy strike on the neighborhood. Forget Elmo, Sesame Street was no more...", {killstreak: 157, holiness: -300, crime: 200, happiness: 30})),
		]),
		new Scenario("High Ground", "You are chilling on the roof of a building and you see a man standing on the edge. He looks very scared, is he going to jump? What do I do?", [
			new Choice("Snap his neck", 
				new Outcome("Night night", "You killed him before he got the chance to do so. He will not go to Hell, you Will!", {killstreak: 1, happiness: 40, holiness: -100, crime: 200})),
			new Choice("Threaten Him", 
				new Outcome("'Consider your mother!'", "You said that if he jump, you are going to slaughter his entire family, and his Mother. The man was scared s***less and decided to take the elevator down. The world needs more people like you.", {happiness: 40, holiness: 50})),
			new Choice("'Do a Flip!'", 
				new Outcome("Amazing scence", "The stunt was breathtaking, you stand in awe as the man flawlessy execute a backflip 7 or 20 times something, you lost count.", {holiness: -100, crime: 200, happiness: 30})),
		]),
		new Scenario("Birthday Party!", "You are chilling on the roof of a building and you see a man standing on the edge. He looks very scared, is he going to jump? What do I do?", [
			new Choice("Snap his neck", 
				new Outcome("Night night", "You killed him before he got the chance to do so. He will not go to Hell, you Will!", {killstreak: 1, happiness: 40, holiness: -100, crime: 200})),
			new Choice("Threaten Him", 
				new Outcome("'Consider your mother!'", "You said that if he jump, you are going to slaughter his entire family, and his Mother. The man was scared s***less and decided to take the elevator down. The world needs more people like you.", {happiness: 40, holiness: 50})),
			new Choice("'Do a Flip!'", 
				new Outcome("Amazing scence", "The stunt was breathtaking, you stand in awe as the man flawlessy execute a backflip 7 or 20 times something, you lost count.", {holiness: -100, crime: 200, happiness: 30})),
		]),
	]


var college_scenarios = [
		new Scenario("NSFW", "What did you want to become when you were 4?", [
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
		new Scenario("Sketchy Contract", "Some stranger asked you to deliver a package to an abandoned warehouse for some good cash. Do you accept?", [
			new Choice("Sure thing!", 
				new Outcome("Good Money", "You delivered the package at the right location. No one said a thing, they just hand you a block of cash and tell you to leave. Good interaction!", {happiness: 20, wealth: 2000, crime: 100, holiness: -50})),
			new Choice("Take the package and run away", 
				new Outcome("The people didn't think it was funny..", "They shot you on the spot. You died the most stupid death possible.", {happiness: -100, health: -1000})),
			new Choice("No thanks", 
				new Outcome("Risky", "You walked away but the people kept on looking toward you. Weird...", {happiness: -10})),
		]),
		new Scenario("Sir, I'm lost", "A small child approached you to seek help. He was lost and is very vulnerable right now. What would you, a criminal do?", [
			new Choice("Bring the kid to the nearest office", 
				new Outcome("I'm changed", "The kid felt more safe around you. But don't forget, you can never change the fact that you are a criminal", {happiness: 50, holiness: 90})),
			new Choice("Kidnap Him", 
				new Outcome("Wholesome", "You kidnapped the kid, hoping to receive a compensation from his parents", {crime: 100, holiness: -100})),
		]),
		new Scenario("Good looking toys", "What's your favorite toy at age 4?", [
			new Choice("Building Blocks", 
				new Outcome("Future Engineer", "You love playing with building blocks and building amazing structures.", {happiness: 3, education: 5})),
			new Choice("Dolls", 
				new Outcome("Doll Collector", "You adore playing with dolls and creating stories with them.", {happiness: 10})),
			new Choice("Dad's Glock 17", 
				new Outcome("Whoah Woah..", "Careful over there buddy!", {happiness: 5, holiness: -10, crime: 4})),
		]),
	]


var catholic_scenarios = [
		new Scenario("Help the poor", "The Church invites you to visit a large orphanage house because you are an active Church memeber. What would you do?", [
			new Choice("Accept it", 
				new Outcome("", "You went to the orphanage and helped maked the kids day better. Your Faith grows exponentially.", {happiness: 100, holiness: 100})),
			new Choice("Deny it because you are busy", 
				new Outcome("Regret", "You deeply regret that decission, you are not even that busy.", {happiness: -50, holiness: -10})),
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
		new Scenario("Everywhere at the end of time.", "You are getting old, what is something you would like to make sure before Dementia kick in?", [
			new Choice("Express love with family", 
				new Outcome("Before it's too late", "You tell every single loved one of your that you love them. They all have the same feeling.", {happiness: 50, holiness: 10})),
			new Choice("Erase the browsing history", 
				new Outcome("Burn them down", "You can leave anything on this Earth but the browsing history", {happiness: 30})),
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


var career_scenarios = [
		new Scenario("NSFW", "You are getting old, what is something you would like to make sure before Dementia kick in?", [
			new Choice("Express love with family", 
				new Outcome("Before it's too late", "You tell every single loved one of your that you love them. They all have the same feeling.", {happiness: 50, holiness: 10})),
			new Choice("Erase the browsing history", 
				new Outcome("Burn them down", "You can leave anything on this Earth but the browsing history", {happiness: 30})),
		]),
	]


function get_related_scenarios(person,stage){
	let related_scenarios = [];
	if(person.traits.college && stage<=23){
		related_scenarios = related_scenarios.concat(college_scenarios);
	}else if(stage <= 60){
		related_scenarios = related_scenarios.concat(mid_life_scenarios);
	}else if(stage > 60){
		related_scenarios = related_scenarios.concat(late_life_scenarios);
	}
	
	// Additional Scnarios
	if(person.traits.crime >= 1000){
		related_scenarios = related_scenarios.concat(criminal_scenarios);
	}if(person.traits.holiness >= 1000){
		related_scenarios = related_scenarios.concat(catholic_scenarios);
	}if(person.traits.career){
		related_scenarios = related_scenarios.concat(career_scenarios);
	}
	
	return random(related_scenarios);
}


