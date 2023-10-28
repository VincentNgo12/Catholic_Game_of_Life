var scenarios = {
	"stage_1": [
		new Scenario("Cockroach", "You found a cockroach in the toilet, what would you do???", [
			new Choice("Put it in your mouth and start munching on it.", 
					new Outcome("Pure Protein", "Pretty dirty tho...", {health: -10, holiness: -10, happiness: 5, strength : 1})),
			new Choice("Ignore it", 
					new Outcome("", "Fair enough..."))
		], "https://media.tenor.com/TvqvoHiia9wAAAAC/chewing-yum.gif"),
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
				new Outcome("Don't you love me?", "It's been 3 months and your old man hasn't come home yet", {happiness: -750}),
				new Outcome("Bro forgot them toys...", "Your dad returned with some milk but no toys...", {happiness: -15}),
				new Outcome("I LOVE YOU OLD MAN", "He returned with milk and lots of toys!!! He loves you.", {happiness: 200}),
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
		new Scenario("You sir, are abusive...", "Your best friend invited you to his home for some video games but as soon as he enter the house, his old man grabed him and initiate an intense beating session. What should you say?", [
			new Choice("'Is this the Mash you were talking about?'", 
				new Outcome("Chaos but silent", "You didn't receive any answer, only incoherent agonizing scream from your best friend.", {happiness: -30})),
			new Choice("'Can I go now?'", 
				new Outcome("...", "... You left the house.", {happiness: -20, holiness:10})),
			new Choice("'Go for the head, sir'", 
				new Outcome("Accepted", "You were amazed of how the man actually executed your request.", {happiness: 20, holiness: -10})),
		], "https://i.pinimg.com/236x/be/5e/b5/be5eb5a8de8f7eed6449e8ddec4bef96.jpg"),
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
			new Choice("Steve's Browsing History", 
					new Outcome("Poor guy...", "Those materials would traumatize him for life. I wouldn't want to be him...", {happiness: -4, holiness: -3})),
			new Choice("A spider", 
					new Outcome("Understandable", "Have a good day.", {happiness: 4})),
			new Choice("Mr. Ortman newest assignments", 
					new Outcome("Stressful Workloads", "You don't blame him, he has good reasons to be traumatized by those deadlines.", {happiness: 4})),
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
		new Scenario("Birthday Party!", "You are having fun preparing a cake to celebrate the birthday of your Steve's girlfriend until you sense something is off about the candles. How many candles were on the cake?", [
			new Choice("47", 
					new Outcome("'Calm Down'", "'This has nothing to do with your mother, I promise'", {happiness: -40, holiness: -30})),
			new Choice("80", 
					new Outcome("Did I count that right?", "I recall my grandmother mentioning her new boyfriend...", {happiness: -40})),
			new Choice("25", 
					new Outcome("Hee Hee", "Lucky Fellow!", {happiness: 20})),
		], "https://static.wikia.nocookie.net/muppet/images/b/b0/CE9.JPG/revision/latest?cb=20191010050435"),
	]
}


var mid_life_scenarios = [
		new Scenario("Social Interaction", "A homeless man offer you 20$ to kiss him, what would you do?", [
			new Choice("20$ is 20$", 
				new Outcome("Night Night", "You kissed the man goodnight, wholesome!!", {happiness: 20, holiness: 50, wealth: 20})),
			new Choice("Ignore him", 
				new Outcome("Normal Day in Downtown", "It does not bother you.", {})),
			new Choice("Beat Him Up", 
				new Outcome("Rewarding", "You beat him up and took his 20$", {happiness: 30, strength: 5, wealth: 20, holiness: -80})),
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
		new Scenario("Mother Nature is calling", "You have a huge urge to pee while in the middle of the road. What should you do?", [
			new Choice("Work with an Aquafina bottle", 
				new Outcome("Tea Time!", "The bottle fits perfectly, you felt relief with this solution.", {happiness: 40})),
			new Choice("Hold it in", 
				new Outcome("Overload", "Your bladder exploded, leaving you with a mess and a huge hospital bill.", {happiness: -40, health: -40, wealth: -100000})),
			new Choice("Return what's nature's", 
				new Outcome("Caught Yellow-handed", "An officer caught you doing this dirty act and charge you accordingly.", {holiness: -100, crime: 80, happiness: -30, wealth: -5000})),
		]),
		new Scenario("Chicken Man", "You met this old man on the street and he kept on bragging and tell you something about his enormous chicken. He then invited you to his place so he can 'fulfill you'. You are really hungry and this offer seems perfectly suit your needs. What was your answer? ", [
			new Choice("Sure thing, let's go old man", 
				new Outcome("Farm Life", "Turns out, the man is a farmer and his chickens are indeed certainly huge. He fed you with a big chicken dinner meal and even gave you a dozen of farm eggs. You are not fulfilled", {happiness: 50, holiness: 50})),
			new Choice("No, I'm good. THanks", 
				new Outcome("Emptiness", "You denied the man's offer and ended with no food that night.", {happiness: -80})),
		]),
		new Scenario("It's Steve again", "It's snowing really heavy today, you and your neighbor Steve is shoving the snow to the street. You soon notice that this dude has the tendency to shove his snow over to your property instead of the street. How do you react?", [
			new Choice("calmy explain to him that's wrong", 
				new Outcome("Lesson learnt", "He soon realize his mistake and appologize. Steve is not so bad.", {happiness: 50, holiness: 50, education: 100})),
			new Choice("Feed rat poison to his children", 
				new Outcome("You get what you deserve", "The candies you gave them was heavily dosed with rat poison and you didn't forget his mother. Especially his Mother....", {killstreak: 4, happiness: 20, holiness: -400, crime: 500})),
		]),
		new Scenario("Mc Pretty", "While ordering at McDonald, you find that the cashier is very cute. What should you say in this situation?", [
			new Choice("'Keep the change babe'", 
				new Outcome("End of the month...", "Sir, your card has been McDeclined...", {happiness: -50, holiness: -20})),
			new Choice("'Thank you'", 
				new Outcome("Standard Citizen", "You didn't harrass anyone today, great job! It takes dedication!", {happiness: 50, holiness: 40})),
			new Choice("'Bomb has been planted'", 
				new Outcome("McPanic", "The whole place broke down in panic, the scene was chaos. The police arrived and you were charged with McHarrssment.", {happiness: -50, holiness: -70, crime: 100})),
		]),
		new Scenario("Feelings...", "Your mother has been spanking your butt because you kicked the neighbor's dog today. Was it hurt?", [
			new Choice("Nope", 
				new Outcome("Oh Mother...", "You soon realized that your mother is quite frail and weak now. You are getting old, right mother?", {happiness: -50, holiness: -30})),
			new Choice("Godmakeitstop!", 
				new Outcome("Hell on earth", "Your mother spanked you with great intensity, inflicting critical damage on her every hit. You were on the verge of falling unconcious due to pain, but mom won't let that happen...", {happiness: -100, holiness: -80, health: -5})),
			new Choice("Yes", 
				new Outcome("I deserved it", "You respected mom beating as a valuable lesson. You certainly won't do that again.", {happiness: 50, holiness: 50})),
		]),
		new Scenario("What's this?", "A group of men blocked you in the middle of the night on a street. They said they are going to jump you and asked if you have any last speech. What did you answer?", [
			new Choice("'I accept my fate'", 
				new Outcome("No wa...", "They started jumping you without any explanation, you didn't like it that much.", {happiness: -80, holiness: -30, health: -10})),
			new Choice("'I know your mothers'", 
				new Outcome("Mercy", "They started freaking out and begged you not to tell their mother about this. One of them even peed his pant.", {happiness: 80, holiness: 50})),
			new Choice("'Double it and give to the next person'", 
				new Outcome("'Understood'", "You observed as the men moved to the homeless nearby and start to beat the living hell out of him. What a save!", {happiness: 80, holiness: -30})),
		]),
		new Scenario("Little happy accident", "You are alone in an aisle in Home Depot and you decided to climb the shelf to find your stuff. Because of the weight distrubution, the large shelf fall over, knocking down heavy objects in various directions. This has led to several injuries, knocking a few children unconscious and killing one of Steve's child. What did you say afterward?", [
			new Choice("'Sorry'", 
				new Outcome("Classic Canadian", "Everyone laugh it off because Canadians are kind. Except Steve.", {happiness: 80, holiness: 40})),
			new Choice("'Watch Out'", 
				new Outcome("Very Helpful", "But at least they knew you tried to warn them, you are just a bit slow.", {happiness: 50, holiness: 20})),
			new Choice("'Cha Cha real smooth'", 
				new Outcome("Do them Cha-Cha slides", "Steve didn't think it was very smooth", {happiness: -20, holiness: -50})),
		]),
	]


var college_scenarios = [
		new Scenario("", "While working on a physic assignment. A classmate approached and pointed out that you have violated some of the laws in your work. How do you react?", [
			new Choice("Accept the suggestion and fix your work.", 
				new Outcome("Effective learner", "Learning from fellow classmates is an effective way to study.", {happiness: 25, education: 80})),
			new Choice("'How about I violate you instead?'", 
				new Outcome("Toxic environment", "You are certain that classmate won't dare to bother you and your work again.", {happiness: 30, holiness: -50})),
		]),
		new Scenario("Educational Opportunity", "You are invited to an educational theme party with alcohols, drugs and firearms. Do you accpet.", [
			new Choice("Absolutely!", 
				new Outcome("Great lesson learnt", "You attend the party and consumed a lot of alcohol and uplifting substances. You felt you were reborn again.", {happiness: 120, education: -30, holiness: -100, health: -10})),
			new Choice("Nerd out and study", 
				new Outcome("Is it worth it?", "You completed all of your deadlines but didn't sense any feeling of accomplishment or fulfillment.", {happiness: -50, education: 300})),
		]),
		new Scenario("Having a hard time", "Your professor notices that you are struggling with a certain topic and he asked if you can stay after class so he can help.", [
			new Choice("Spend time with him", 
				new Outcome("Useful Advices", "Your proffessor explained the concept in a way that helped you clear out all of the ambiguities around it.", {happiness: 50, education: 100})),
			new Choice("Figure it out on your own", 
				new Outcome("try Hard", "Your understanding of the concept was messed up and you screw up the following test.", {happiness: -60, education: -100})),
		]),
		new Scenario("The essay", "Your 5000 words essay is due tomorrow. What would you do?", [
			new Choice("Type 10 words and take a well earned rest.", 
				new Outcome("Hard Worker", "You don't expect to receive high grades. Just taking what you deserved.", {happiness: 30, education: -50})),
			new Choice("Cramp through the night", 
				new Outcome("Flowing words", "The well-written essay gradually formed as you typed it with your ha;f-conscious body. Good job!", {happiness: 50, education: 50})),
			new Choice("Relax because it's already done.", 
				new Outcome("Good work", "You respect deadlines and your essay shows no sign of hasting. Great Job!", {happiness: 50, education: 50})),
		]),
		new Scenario("Who dropped the soap?", "You are in a public shower washing yourself for the next class. You then accidentally dropped your brand new soap infront of a few other people. Remember, you are only a college student, this bar of soap means alot to you financially...", [
			new Choice("Pick up the soap", 
				new Outcome("Risky Maneuver", "You slowly crouch down near the soap, trying your best to avoid exposing your vulnerable parts to the others around you. You stand straight up immediately the moment you get a grip of the soap bar. *Soap successfully recovered*", {happiness: 50})),
			new Choice("Watch as the soap slip away from you on the floor.", 
				new Outcome("I will never recover financially from this...", "At least no one will see your tears in the shower at this moment...", {happiness: -50})),
		]),
		new Scenario("The tale of the iron Log", "Your crush invited you to her parent house to do homeworks and have dinner together. You then excused her father yo use the toilet and proceed to do your business. But the plumber has played you, as soon as you flush, the sea level kept on rising along with the newborn log you just made. Standing before your Archimedes, you see no sign of improvement and your log is on the verge of traversing to the floor. Desperate and panicking, you hear your crush's slamming the toilet door, threatening that he will call the FBI if you don't open up. Broke down crying, it has been 95 minutes, what do you do?", [
			new Choice("Jump out the window", 
				new Outcome("Until we see again", "You jumped out the window, broke an arm and ran away. At least you still have a chance with your crush by doing this, right?", {happiness: -30, health: -3})),
			new Choice("Pick it up and throw", 
				new Outcome("*Mash!*", "The neighbor didn't appreciate this gift", {happiness: -50, holiness: -50})),
			new Choice("Be truthful and explain everything to the family", 
				new Outcome("Good Ending", "Sobbing as you explain the thing you did to their toilet, the family in turn felt empathize for your feelings. They started huggin you and reasure you that everything is going to be okay. You have never felt more welcomed and loved by a stranger before. You might actually want to spend the rest of time with your crush...", {happiness: 120, holiness: 70})),
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
		new Scenario("Pulled Over", "The police pulled you over in the middle of the night to check your ID. How do you react?", [
			new Choice("Reach in your pocket with godspeed", 
				new Outcome("Not fast enough", "You were quick but the officer was quicker. He didn't miss any of his 5 shots while you are only halfway to your pocket", {health: -1000, education: -1000})),
			new Choice("Speed off the road", 
				new Outcome("Too quick Too fast", "You sped off like a professional racist. What is the police going to do? Run?", {happiness: 70, holiness: -80, crime: 200})),
			new Choice("Give him your ID", 
				new Outcome("Have a good evening", "The officer scanned through your ID carefully, he sent you off without any doubt. Too bad he didn't notice the corpes in the trunk.", {happiness: 50, holiness: -200, crime: 200})),
		]),
	]


var catholic_scenarios = [
		new Scenario("Help the poor", "The Church invites you to visit a large orphanage house because you are an active Church memeber. What would you do?", [
			new Choice("Accept it", 
				new Outcome("", "You went to the orphanage and helped maked the kids day better. Your Faith grows exponentially.", {happiness: 100, holiness: 100})),
			new Choice("Deny it because you are busy", 
				new Outcome("Regret", "You deeply regret that decission, you are not even that busy.", {happiness: -50, holiness: -10})),
		]),
	]


var late_life_scenarios = [
		new Scenario("Everywhere at the end of time.", "You are getting old, what is something you would like to make sure before Dementia kick in?", [
			new Choice("Express love with family", 
				new Outcome("Before it's too late", "You tell every single loved one of your that you love them. They all have the same feeling.", {happiness: 50, holiness: 10})),
			new Choice("Erase the browsing history", 
				new Outcome("Burn them down", "You can leave anything on this Earth but the browsing history", {happiness: 30})),
		]),
		new Scenario("Shower time!", "Taking showers at such age requires dedication. Where did you leave the shampoo?", [
			new Choice("On top of the shelf", 
				new Outcome("Reacher", "You slipped uncontrollably and hit your head against the floor. That's alot of damage!", {health: -100})),
			new Choice("Forgot", 
				new Outcome("It's Close...", "You soon realize this is the early signs of Dementia and you can't do anything about it...", {happiness: -200, health: -30, holiness: -50})),
			new Choice("I don't use shampoo", 
				new Outcome("Water is good enough", "Using shampoo at this age will only increase the risk of slippery surfaces", {happiness: 60})),
		]),
		new Scenario("Pick up speed", "You are walking down an alley and a kid start complaining about how slow you are. How do you react?", [
			new Choice("Move aside", 
				new Outcome("Heart Broken", "The child run past you, leaving you with a deep scar in your feelings. Man, I'm getting old...", {happiness: -100})),
			new Choice("Do some teaching", 
				new Outcome("Muscle memory", "Swiftly without any flaws, you pulled out a metal baton and smack the child's head. Hope he is more open-minded now.", {happiness: 80, holiness: -100, crime: -100})),
		]),
		new Scenario("Swimming Pool", "You are an old person in a public swimming pool, how do you act your age?", [
			new Choice("Go butt ass naked in the changing room", 
				new Outcome("Senior Galleries", "You got the approval of the seniors and the admiration of the juniors.", {happiness: 100, holiness: 50})),
			new Choice("Camp in the sauna", 
				new Outcome("Focus on the now", "You sit motionlessly hours and hours in the sauna room. Not even the staffs can move you. You don't fear death now", {happiness: 100, holiness: 50, health: 20})),
			new Choice("Act like any body else.", 
				new Outcome("I'm still fit in", "You are old doesn't mean you have to behave differently. You enjoyed this activity as much as when you were young.", {happiness: 100, holiness: 50})),
		]),
	]


var career_scenarios = [
		new Scenario("NSFW", "Your co-worker ask if you want to see him do some NSFW (not safe for work) stuff. What do you answer?", [
			new Choice("Sure!", 
				new Outcome("Literally", "You expected him to show you something seductive, but instead he jumped out of the building's window which is not safe for work. Disappointed...", {happiness: -20})),
			new Choice("Don't make me call HR", 
				new Outcome("Unhealthy colleague", "Your co-worker was very sad about your behaviour, he expected something much more friendly from you.", {happiness: -30})),
		]),
		new Scenario("Emotional Work Day", "One of your co-worker just got suddenly fired, everyone in the room doesn't seem to care. Would you do anything?", [
			new Choice("I am too busy for this", 
				new Outcome("Workaholic", "This guy have nothing to do with my business, quite literally.", {happiness: 10, wealth: 500})),
			new Choice("Give him a hug", 
				new Outcome("What you doing dawg", "The dude sniffs you as soon as you hug him. You soon figure out the reason he was fired.", {happiness: -30, holiness: -20})),
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


