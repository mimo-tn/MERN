class Ninja{
    constructor(name){
        this.name = name;
        this.health = 90;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(` Ninja's ${this.name}`);
    }
    showStats(){
        console.log(`name : ${this.name}, strength : ${this.strength}, speed : ${this.speed}, health : ${this.health}`)
    }
    drinkSake(){
        this.health += 10;
        console.log(`${this.health}`);
    }
}
const ninja1 = new Ninja('mimo');
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();