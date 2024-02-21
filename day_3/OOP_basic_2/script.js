class Character {
    constructor(name, health, stamina, manna) {
        this.name = name;
        this.health = 100;
        this.stamina = 100;
        this.manna = 100;
    }
    walk() {
        this.stamina -= 1;
        console.log(`Walking... Stamina: ${this.stamina}`);
    };
    run() {
        this.stamina -= 3;
        console.log(`Running... Stamina: ${this.stamina}`);
    };
    showStats() {
        console.log(`Character name: ${this.name}`);
        console.log(`Health: ${this.health}`);
        console.log(`Stamina: ${this.stamina}`);
        console.log(`Manna: ${this.manna}`);
    }
}

const character = new Character("Macky");
character.walk();
character.walk();
character.walk();
character.run();
character.run();
character.showStats();

class Shaman extends Character {
    constructor(name, health, stamina, manna) {
        super(name, health, stamina, manna);
        this.health = 150; 
    };
    heal() {

        this.health += 5;
        this.stamina += 5;
        this.manna += 5;
        console.log(`Heal... Health: ${this.health} Stamina: ${this.stamina} Manna: ${this.manna} `);
    }
}

const shaman = new Shaman("Carol");
shaman.walk();
shaman.walk();
shaman.walk();
shaman.run();
shaman.run();
shaman.heal();
shaman.showStats();

class Swordsman extends Character {
    constructor(name, health, stamina, manna) {
        super(name, health, stamina, manna);
        this.health = 170; 
    };
    slash() {
        this.manna -= 10;
        console.log(`Slash ${this.manna}`);
    };
    showStats() {
        console.log("I am powerful!");
        super.showStats();
    }
}

const swordsman = new Swordsman("Sinoka");
swordsman.walk();
swordsman.walk();
swordsman.walk();
swordsman.run();
swordsman.run();
swordsman.slash();
swordsman.slash();
swordsman.showStats();

// character.heal();
// character.slash();