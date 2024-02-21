class Item {
    constructor(name, price, stock, sold) {
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.sold = 0;
    }

    logDetails() {
        console.log(`Item: ${this.name}, Price: $${this.price}, Stock: ${this.stock}, Total Sold: ${this.sold}`);
    }

    buy() {
        console.log("Buying");
        this.sold += 1;
    }

    return() {
        if (this.sold === 0) {
            console.log("No item has been sold yet.");
        } else {
            console.log("Returning");
            this.sold -= 1;
        }
    }
}

const itemOne = new Item("Ayphone", 3000, 12);
const itemTwo = new Item("Undroid", 5000, 8);
const itemThree = new Item("Selpon", 10, 1000);

itemOne.buy();
itemOne.buy();
itemOne.buy();
itemOne.return();
itemOne.logDetails();

itemTwo.buy();
itemTwo.buy();
itemTwo.return();
itemTwo.return();
itemTwo.logDetails();

itemThree.return();
itemThree.return();
itemThree.return();
itemThree.logDetails();