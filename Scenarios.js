var scenarios = {
	"stage_1": [
		new Scenario("Cockroach", "You found a cockroach in the toilet, what would you do???", [
			new Choice("Put it in mouth and munch it", 
					new Outcome("Pure Protein", "Pretty dirty tho...", {health: -10, holiness: -10, happiness: 5})),
			new Choice("Ignore it", 
					new Outcome("", "Fair enough..."))
		]),
		new Scenario("Cockroach", "You found a cockroach in the toilet, what would you do???", [
			new Choice("Put it in mouth and munch it", 
					new Outcome("Pure Protein", "Pretty dirty tho...", {health: -10, holiness: -10, happiness: 5})),
			new Choice("Ignore it", 
					new Outcome("", "Fair enough..."))
		]),
	],
	"stage_2": []

}