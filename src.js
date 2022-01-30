/* 
src.js - An object-oriented version of the L-system.js library forked from ProgrammingParadox/LSystem.js
By kidkoder432 (Prajwal Agrawal), Jan 29, 2022

*/

// The L-system class
class LSystem {
    constructor(axiom, rules) {
        this._axiom = axiom || "";
        this._rules = rules || {};
        this.generations = [this.axiom];

    }

    get axiom() {
        return this._axiom;
    }

    get rules() {
        return this._rules;
    }

    set axiom(ax) {
        this._axiom = ax;
    }

    set rules(rl) {
        this._rules = rl;
    }

    show() {
        for (let i = 0; i < this.generations.length; i++) {
            console.log(`Generation ${i + 1}: "${this.generations[i]}"`)
        }
    }

    iterate(repeat=1) {
        let oldGeneration = this._axiom;
        let newGeneration = "";
        for (let i = 0; i < repeat; i++) {
            for (let char of oldGeneration) {
                if (! Object.keys(this._rules).includes(char)) {
                    newGeneration += char;
                }
                else {
                    newGeneration += this._rules[char];
                }
            }
            this.generations.push(newGeneration)
            oldGeneration = newGeneration;
        }

        return newGeneration; // Return the final generation
    }


}

koch = new LSystem();

koch.axiom = 'F-F++F-F'
koch.rules = {
    'F': 'F-F++F-F'
}

koch.iterate(7)
koch.show()