// class Ninja{
//     constructor(name){
//         this.name = name;
//         this.health = 90;
//         this.speed = 3;
//         this.strength = 3;
//     }
//     sayName(){
//         console.log(` Ninja's ${this.name}`);
//     }
//     showStats(){
//         console.log(`name : ${this.name}, strength : ${this.strength}, speed : ${this.speed}, health : ${this.health}`)
//     }
//     drinkSake(){
//         this.health += 10;
//         console.log(`${this.health}`);
//     }
// }
// class Sensei extends Ninja{
//     constructor(name){
//         super(name);
//         this.health = 200;
//         this.speed = 10;
//         this.strength = 10;

//     }
//     speakWisdom(){
//         this.drinkSake();
//         console.log("Wisdom: What one programmer can do in one month, two programmers can do in two months.");
//     }
//     showStats(){
//         super.showStats();
//         // console.log(message);
//     }
// }
// const ninja1 = new Ninja('mimo');
// ninja1.sayName();
// ninja1.showStats();
// ninja1.drinkSake();
// const sensei = new Sensei('yathrouba');
// sensei.showStats();
class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 90;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(`Ninja's name: ${this.name}`);
    }
    showStats() {
        console.log(`name: ${this.name}, strength: ${this.strength}, speed: ${this.speed}, health: ${this.health}`);
    }
    drinkSake() {
        this.health += 10;
        console.log(`Health after drinking sake: ${this.health}`);
    }
}

class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10; // Adding an additional attribute for Sensei
    }
    speakWisdom() {
        this.drinkSake();
        console.log("Wisdom: What one programmer can do in one month, two programmers can do in two months.");
    }
    showStats() {
        super.showStats();
        console.log(`wisdom: ${this.wisdom}`);
    }
}

const sensei = new Sensei('Yathrouba');
sensei.speakWisdom();
sensei.showStats();
