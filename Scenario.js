class Scenario{
  constructor(name, description, choices) {
    this.name = name;
    this.description = description;
    this.choices = choices;
  }
}


class WeightedChoice{
  constructor(name, outcomes) {
    this.name = name;
    this.outcomes = outcomes;
  }


  // Method to select an outcome based on player traits and probabilities
  selectOutcome(playerTraits){
    const totalWeight = this.outcomes.reduce((acc, outcome) => acc + outcome.weight(playerTraits), 0);
    let randomValue = random(totalWeight);

    for (const outcome of this.outcomes) {
      randomValue -= outcome.weight(playerTraits);
      if (randomValue <= 0) {
        return outcome;
      }
    }

    // If no outcome is selected, return the last one (fallback)
    return this.outcomes[this.outcomes.length - 1];
  }
}


class WeightedOutcome{
  constructor(name, description, effects=null, probability=null) {
    this.name = name;
    this.description = description;
    this.effects = effects;
    // Define default probability factors (equal distribution)
    this.defaultProbabilityFactors = {
    };

    // Use custom probability factors if provided, or use the defaults
    this.probabilityFactors = (probability) ? probability : this.defaultProbabilityFactors;
  }


  // Method to calculate the weight (probability) of the outcome based on player traits
  weight(playerTraits) {
    let weight = 1.0;
    for (const trait in this.probabilityFactors) {
      weight *= 1 + this.probabilityFactors[trait] * playerTraits[trait];
    }
    return weight;
  }
}


class Choice{
  constructor(name, outcome) {
    this.name = name;
    this.outcome = outcome;
  }

  // Select the only outcome
  selectOutcome(playerTraits){
    return this.outcome;
  }
}


class Outcome{
  constructor(name, description, effects=null) {
    this.name = name;
    this.description = description;
    this.effects = effects;
  }
}


class RandomChoice{
  constructor(name, outcomes) {
    this.name = name;
    this.outcomes = outcomes;
  }


  // Method to select an outcome randomly
  selectOutcome(){
    return random(this.outcomes);
  }
}
