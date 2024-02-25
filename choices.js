class Thing {
    constructor(name, value, weight) {
        this.name = name;
        this.value = value;
        this.weight = weight;
    }
}

const phone = new Thing("phone", 12, 1);
const laptop = new Thing("laptop", 20, 4);
const pencil = new Thing("pencil", 2, 1);
const headphones = new Thing("headphones", 15, 3);
const speakers = new Thing("speakers", 10, 4);
const papers = new Thing("papers", 25, 5);

export const choices = [ phone, laptop, pencil, headphones, speakers, papers ];
export const weightLimit = 7;