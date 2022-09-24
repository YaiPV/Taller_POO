export class Vehiculo{
    public brand: string;
    public color: string;
    public type: any;
    public serialNumber: number;


    constructor(brand:string,color:string,type:number,serialNumber:number,){
        this.brand=brand;
        this.color=color;
        this.type=type;
        this.serialNumber=serialNumber;

}
public encender(){
    console.log('Gire la llave para encender el vehiculo.')
}

public arrancar(){
    console.log('Pise el acelerador para que arranque el vehiculo.')
}

public apagar(){
    console.log('Estacione el vehiculo y luego retire la llave para que lo pueda apagar.')
}

}

    class Moto extends Vehiculo {
    public wheels: string = ""
    public helmet: string = ""   
    
    constructor(wheels: string, helmet: string) {
        super("", "", 0, 0);
        this.wheels = wheels;
        this. helmet = helmet;}

        public estacionar(){
            console.log('Pise el freno y detenga la marcha') 
        }

        public manejar(){
            console.log('Tome la moto fuerte de los manubrios y apriete el acelerador.')
        }
         
}

        const moto = new Moto( "", "");
         console.log(moto);
    
         
         class Carro extends Vehiculo {
            public doors: number = 0
            public windows: number = 0   
            
            constructor(doors: number, windows: 0) {
                super("", "", 0, 0);
                this.doors = doors;
                this. windows = windows;}
        
                public calentar(){
                    console.log('Encienda en auto y encienda el aire acondicionado y coloquelo en caliente.') 
                }
        
                public enfriar(){
                    console.log('Encienda en auto y encienda el aire acondicionado y coloquelo en frio.')
                }
                 
        }
        
                const carro = new Carro( 0, 0);
                 console.log(carro);
            
        