export class Cuenta{

    private monto:number;
    private nombreTitular:string;
    private fechaCreacion:Date; 


    constructor(monto:number,nombreTitular:string,fechaCreacion:Date){
        this.monto=monto;
        this.nombreTitular=nombreTitular;
        this.fechaCreacion=fechaCreacion
    }

    public ingreso(){

    }

    public reintegro(){
        
    }

    public transferencia(){
        
    }
}