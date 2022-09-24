"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Operation = void 0;
class Operation {
    constructor(num1, num2) {
        this.number1 = num1;
        this.number2 = num2;
    }
    sum() {
        return this.number1 + this.number2;
    }
    diff() {
        return this.number1 - this.number2;
    }
    multi() {
        return this.number1 * this.number2;
    }
    divi() {
        return this.number1 / this.number2;
    }
}
exports.Operation = Operation;
