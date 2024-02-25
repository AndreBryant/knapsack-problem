export function fitness(genome, choices, weightLimit) {
    //TODO put the choices on a separate file
    if (genome.length !== choices.length) {
        return new Error("Fitness error: Genome length should be equal to the length of choices.")
    }

    let weight = 0,
        value = 0;

    for (let i = 0; i < choices.length; i++) {
        let choice = choices[i]
        if (genome[i] == 1) {
            weight += choice.weight;
            value += choice.value;

            if (weight > weightLimit) {
                return 0;
            }
        }
    }

    return value;
}