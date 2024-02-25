import { choices, weightLimit } from "./choices.js";
import { generatePopulation, select_pair } from "./population.js";
import { fitness } from "./fitness.js";
import { singlePointCrossover, mutate } from "./dna.js";

const populationSize = 1000;
const generationLimit = 100;
const fitnessLimit = 100;

let cum = 0;
for (let i = 0; i < 11; i++){
    const bestSolution = startEvolution(choices, weightLimit, generatePopulation, fitness, fitnessLimit, select_pair, singlePointCrossover, mutate, generationLimit)[0];
    const fit = fitness(bestSolution, choices, weightLimit);

    cum += fit
    console.log(bestSolution, '-fitness->' ,fit)
}

console.log("average fitness", cum/10)

function startEvolution(choices, weightLimit, generatePopulation, fitnessFunc, fitnessLimit, select_pair, crossover, mutate, generationLimit) {
    let population = generatePopulation(choices.length, populationSize);
    
    for (let gen = 0; gen < generationLimit; gen++){
        population.sort((a,b) => fitnessFunc(b, choices, weightLimit) - fitnessFunc(a, choices, weightLimit));
        
        if (population[0] >= fitnessLimit) {
            break;
        }
        
        let nextGeneration = population.slice(0,2);
        for (let i =  0; i < parseInt(population.length/2) - 1; i++) {
            const parents = select_pair(population, fitness, choices, weightLimit);
            let children = crossover(parents[0], parents[1]);
            nextGeneration.push(mutate(children[0]));
            nextGeneration.push(mutate(children[1]));
        }
        population = nextGeneration;
    } 

    population.sort((a,b) => fitnessFunc(b, choices, weightLimit) - fitnessFunc(a, choices, weightLimit));

    return population;

}

