import { choices } from "./choices.js";
import { generatePopulation } from "./population.js";
import { fitness } from "./fitness.js";

let genomes = [];
let populationSize = 5;
let population = generatePopulation(choices.length, populationSize);


//just to test the fitness func
for (const entity of population) {
    console.log(entity,":", fitness(entity, choices, 10))
}
