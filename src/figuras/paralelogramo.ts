export class Paralelogramo{
    private _basep: number
    private _ladop: number
    private _alturap: number

    public constructor(basep : number, ladop : number ,alturap : number){
        this._basep = basep
        this._ladop = ladop
        this._alturap = alturap
    }

    public get base(){
        return this._basep
    }

    public get lado2(){
        return this._ladop
    }

    public get altura(){
        return this._alturap
    }

    public getPerimetro(){
        return (this._ladop+this._basep)*2
    }

    public getArea(){
        return this._basep*this._alturap
    }

}
