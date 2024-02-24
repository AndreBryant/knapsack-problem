export function generateGenome(genomeLength) {
    let genome = "";
    for (let i = 0; i < genomeLength; i++) {
        genome += (Math.random() < 0.5) ? "0" : "1";
    }
    return genome;
}

// crossover fucntions and stuff
// mutate

