import {Cuenta} from './Cuenta';
import { Contador } from './Contador';
import { Operation } from './Operation';
import { Vehiculo } from './Vehiculo';


const cuenta = new Cuenta(0, "", () );
console.log(cuenta)

const operacion = new Operation(30,20);
console.log(operacion.diff())

const counter= new Contador();
console.log(counter.counter)
counter.increment()
console.log(counter.counter)
counter.increment()
console.log(counter.counter)
counter.decrement()
console.log(counter.counter)

const vehiculo = new Vehiculo("", "", 0, 0);
console.log(vehiculo)
