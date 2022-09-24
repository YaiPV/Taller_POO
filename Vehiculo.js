"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
class Vehiculo {
    constructor(brand, color, type, serialNumber) {
        this.brand = brand;
        this.color = color;
        this.type = type;
        this.serialNumber = serialNumber;
    }
    encender() {
        console.log('Gire la llave para encender el vehiculo.');
    }
    arrancar() {
        console.log('Pise el acelerador para que arranque el vehiculo.');
    }
    apagar() {
        console.log('Estacione el vehiculo y luego retire la llave para que lo pueda apagar.');
    }
}
exports.Vehiculo = Vehiculo;
class Moto extends Vehiculo {
    constructor(wheels, helmet) {
        super("", "", 0, 0);
        this.wheels = "";
        this.helmet = "";
        this.wheels = wheels;
        this.helmet = helmet;
    }
    estacionar() {
        console.log('Pise el freno y detenga la marcha');
    }
    manejar() {
        console.log('Tome la moto fuerte de los manubrios y apriete el acelerador.');
    }
}
const moto = new Moto("", "");
console.log(moto);
class Carro extends Vehiculo {
    constructor(doors, windows) {
        super("", "", 0, 0);
        this.doors = 0;
        this.windows = 0;
        this.doors = doors;
        this.windows = windows;
    }
    calentar() {
        console.log('Encienda en auto y encienda el aire acondicionado y coloquelo en caliente.');
    }
    enfriar() {
        console.log('Encienda en auto y encienda el aire acondicionado y coloquelo en frio.');
    }
}
const carro = new Carro(0, 0);
console.log(carro);
