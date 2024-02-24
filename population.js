import { generateGenome } from "./dna.js"

export function generatePopulation(genomeLength, size) {
    let population = [];
    
    for (let i = 0; i < size; i++) {
        population.push(generateGenome(genomeLength));
    }
    return population;
}

export function select_pair(population, fitnessFunc) {
    //most probable to be chosen are those with higher fitness
}