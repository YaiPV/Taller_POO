export class Operation{

    private number1:number;
    private number2:number;

    constructor(num1:number,num2:number){
        this.number1=num1;
        this.number2=num2;
    }

    public sum(){
        return this.number1+this.number2;
    }

    public diff(){
        return this.number1-this.number2;
    }

    public multi(){
        return this.number1*this.number2;
    }

    public divi(){
        return this.number1/this.number2;
    }
}