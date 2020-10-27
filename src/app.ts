import { menu } from '../view/menu'
import { leerTeclado } from '../view/lecturaTeclado'
import { Triangulo } from './figuras/triangulo'
import { Rombo } from './figuras/rombo'
import { Rectangulo } from './figuras/rectangulo'
import { Circulo } from './figuras/circulo'
import { Paralelogramo } from './figuras/paralelogramo'

const main = async () => {
    let n: number
    do {
        n = await menu()
        switch(n){
            case 1:
                console.log('Calcular perímetro y área de un triángulo')
                let base, altura, lado1, lado2: number
                base =  parseInt( await leerTeclado('Introduzca la base del triángulo'))
                altura =  parseInt( await leerTeclado('Introduzca la altura del triángulo'))
                lado1 =  parseInt( await leerTeclado('Introduzca otro lado del triángulo'))
                lado2 =  parseInt( await leerTeclado('Introduzca el último lado del triángulo'))
                let triangulo = new Triangulo(base,lado1,lado2,altura)
                console.log("Perímetro del triángulo="+triangulo.getPerimetro())
                console.log("Área del triángulo="+triangulo.getArea())
                break
            case 2:
                console.log('Calculando perímetro y área de un rombo')
                let lado, dmenor, dmayor:number
                lado = parseInt(await leerTeclado('Introduzca el lado del rombo'))
                dmayor = parseInt(await leerTeclado('Introduzca la diagonal mayor del rombo'))
                dmenor = parseInt(await leerTeclado('Introduzca la diagonal menor del rombo'))
                let rombo = new Rombo(lado, dmayor, dmenor)
                console.log("Perímetro del rombo="+rombo.getPerimetro())
                console.log("Área del rombo="+rombo.getArea())
                break
            case 3:
                console.log('Calcular perímetro y área de un rectángulo')
                let baser, alturar:number
                baser = parseInt(await leerTeclado('Introduzca la base del rectángulo'))
                alturar = parseInt(await leerTeclado('Introduzca la altura del rectángulo'))
                let rectangulo = new Rectangulo(baser,alturar)
                console.log("Perímetro del rectángulo="+ rectangulo.getPerimetro())
                console.log("Área del rectángulo="+ rectangulo.getArea())
                break
            case 4:
                console.log('Calcular perímetro y área de un círculo')
                let radio:number
                radio = parseInt(await leerTeclado('Introduzca el radio del círculo'))
                let circulo = new Circulo(radio)
                console.log("Perímetro del círculo="+circulo.getPerimetro())
                console.log("Área del círculo="+circulo.getArea())
                break
            case 5: 
                console.log('Calcular perímetro y área de un paralelogramo')
                let basep, alturap, ladop : number
                basep =  parseInt( await leerTeclado('Introduzca la base del paralelogramo'))
                alturap =  parseInt( await leerTeclado('Introduzca la altura del paralelogramo'))
                ladop =  parseInt( await leerTeclado('Introduzca el lado del paralelogramo'))
                let paralelogramo = new Paralelogramo(basep,ladop,alturap)
                console.log("Perímetro del paralelogramo="+paralelogramo.getPerimetro())
                console.log("Área del paralelogramo="+paralelogramo.getArea())
                break
            case 0:
                console.log('\n--ADIÓS--')
                break
            default:
                console.log("Opción incorrecta")
                break
        }
    }while (n != 0)
}
main()