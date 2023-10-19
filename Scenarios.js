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
  ]

}