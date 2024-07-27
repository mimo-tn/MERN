class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}
class Unit extends Card{
    constructor(name, cost, resilience, power){
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }
    attack( target ){
        target.resilience -= this.power;
    }
}
class Effect extends Card{
    constructor(name, cost, text, stat, magnitude){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play( target ) {
        if( target instanceof Unit ) {
            //
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}
const red_belt_ninja = new Unit("Red Belt Ninja", 3, 4, 3);
const black_belt_ninja = new Unit("Black Belt Ninja", 4, 4, 5);
const hard_algorithm = new Effect("hard_algorithm", 2, "increase target's resilience by 3", "resilience", "+3");
const Unhandled_Promise_Rejection = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", "-2");
const Pair_Programming = new Effect("Pair Programming", 3, "increase target's power by 2", "power", "+2");
console.log`${black_belt_ninja.resilience}`;
red_belt_ninja.attack(black_belt_ninja);
console.log`${black_belt_ninja.resilience}`;
