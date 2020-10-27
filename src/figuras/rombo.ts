export class Rombo{
    private _lado: number
    private _dmayor: number
    private _dmenor: number

    public constructor(lado : number, dmayor : number, dmenor : number){
        this._lado = lado
        this._dmayor = dmayor
        this._dmenor = dmenor 
    }

    public get lado(){
        return this._lado
    }

    public get dmayor(){
        return this._dmayor
    }

    public get dmenor(){
        return this._dmenor
    }

    public getPerimetro(){
        return this._lado*4
    }

    public getArea(){
        return (this._dmayor*this._dmenor)/2
    }

}
