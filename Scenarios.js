var scenarios = {
  "stage_1": [
    new Scenario("Cockroach", "You found a cockroach in the toilet, what would you do???", [
      new Choice("Put it in mouth and munch it", 
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
    new Choice("Dear Lord", 
      new Outcome("The Lord is with you...", "Amen...", {happiness: 5,holiness: 10})),
  ]),
  new Scenario("Favorite Color", "What's your favorite color at age 3?", [
    new Choice("Blue", 
      new Outcome("Blue Lover", "You adore the color blue. It's your favorite!", {happiness: 1})),
    new Choice("Yellow", 
      new Outcome("Sunshine Enthusiast", "You can't get enough of yellow. It's your favorite color!", {happiness: 1})),
    new Choice("Red", 
      new Outcome("Red Passion", "Your favorite color is red. You find it exciting!", {happiness: 1})),
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