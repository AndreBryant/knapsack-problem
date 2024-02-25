import { generateGenome } from "./dna.js"

export function generatePopulation(genomeLength, size) {
    let population = [];
    
    for (let i = 0; i < size; i++) {
        population.push(generateGenome(genomeLength));
    }
    return population;
}

export function select_pair(population, fitnessFunc, choices, weightLimit) {
    //This implementation can be easily made without creating entity objects but this is scalable for later implementation and refactoring, so this will have to stay.

    //most probable to be chosen are those with higher fitness
    let entities = [];
    for (let i = 0; i < population.length; i++) {
        const entity = {
            genome: population[i],
            fitness: fitnessFunc(population[i], choices, weightLimit)
        }

        entities.push(entity)
    }

    //NOTE: I dont really know yet if the selection pair can be a little bit randomized (with replacement). Right now, this only pick the top 2 without replacement.

    // Sort the array (descending)
    entities.sort((a,b) => b.fitness - a.fitness)

    //return the top 2
    return entities.splice(0, 2)
}