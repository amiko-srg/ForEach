let arr = ['non' , 'asal' , 'banan' , 'olma' , 'aziza' , 'Gul' , 'mashina']


arr.push('nanna')
let nharifimavjud = []
let nharifiyoq = []

arr.forEach((element) => {


if (element.includes('n')) {
    nharifimavjud.push(element)
} else {
    nharifiyoq.push(element)
}

})

console.log(nharifimavjud);
console.log(nharifiyoq);

