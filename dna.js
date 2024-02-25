class Genome {
    constructor(genome, fitness){
        this.genome = genome;
        this.fitness = fitness;
    }
}

export function generateGenome(genomeLength) {
    let genome = "";
    for (let i = 0; i < genomeLength; i++) {
        genome += (Math.random() < 0.5) ? "0" : "1";
    }
    return genome;
}

// crossover fucntions and stuff
export function singlePointCrossover(a,b) {
    if (a.length != b.length) {
        return new Error("Single Point CrossOver error: The length of the genomes should be equal.");
    }

    if (a.length < 2) {
        return [ a, b ]
    }

    const randomInt = Math.floor(Math.random()*(a.length - 1) + 1);
    
    let cross1 = a.substring(0, randomInt) + b.substring(randomInt); 
    
    let cross2 = b.substring(0, randomInt) + a.substring(randomInt);
    
    return [ cross1, cross2 ];
}

// mutate
export function mutate(genome, probability) {
    const randomInt = Math.floor(Math.random()*(genome.length - 1) + 1);

    return (Math.random() <= probability)? replace(genome, randomInt, Math.abs(parseInt(genome.charAt(randomInt)) - 1)): genome;
}

function replace(str, index, replacement) {
    // https://bobbyhadz.com/blog/javascript-string-replace-character-at-index
    return str.slice(0, index-1) + replacement + str.slice(index, str.length);
}


