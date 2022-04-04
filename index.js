const pizza = ['harina', 'huevo', 'levadura', 'aceite', 'sal', 'agua', 'queso', 'salsa', 'jamon', 'tomate'];


function calcularParesImpares(array){
    let pares =  [];
    let impares = []

        for (let i=0; i <= array.length -1; i++){
             
         if(array[i].length % 2 == 0){
             pares.push(array[i])
         }else{
             impares.push(array[i])
         }
        
        }
        console.log('Los ingredientes pares son: ',pares)
        console.log('Los ingredientes impares son:',impares)
    
}


calcularParesImpares(pizza)



let pares = []
let impares =[];

pizza.map(item => item.length % 2 == 0? pares.push(item) : impares.push(item))

console.log('Los ingredientes pares son: ',pares)
console.log('Los ingredientes impares son:',impares)


