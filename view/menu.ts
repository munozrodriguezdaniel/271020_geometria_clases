import { leerTeclado } from '../view/lecturaTeclado'

export const menu = async () => {
    let n: number
    console.log('\n')
    console.log('1.- TRIÁNGULO')
    console.log('2.- ROMBO')
    console.log('3.- RECTÁNGULO')
    console.log('4.- CÍRCULO')
    console.log('4.- PARALELOGRAMO')
    console.log('0.- SALIR')
    n = parseInt( await leerTeclado('--OPCIÓN--: ') )
    return n
}