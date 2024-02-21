class House {
    constructor(location, price, lot, type) {
        this.location = location;
        this.price = price;
        this.lot = lot;
        this.type = type;
        this.discountPercentage = (type === "Pre-selling") ? 0.2 : 0.05;
    }

    computeDiscount() {
        return this.price * (1 - this.discountPercentage);
    }

    show_all() {
        console.log(`Location: ${this.location}`);
        console.log(`Price: $${this.price}`);
        console.log(`Lot: ${this.lot}`);
        console.log(`Type: ${this.type}`);
        console.log(`Total Price: $${this.computeDiscount()} (${this.discountPercentage * 100}%)`);
    }
}

const house1 = new House("Labsan", 200000, 200, "Pre-selling");
const house2 = new House("Loakan", 150000, 300, "Resale");
const house3 = new House("Camp 7", 300000, 400, "Pre-selling");
const house4 = new House("Palengke", 500000, 500, "Resale");
const house5 = new House("Tothemoon", 250000, 350, "Pre-selling");

house1.show_all();
house2.show_all();
house3.show_all();
house4.show_all();
house5.show_all();