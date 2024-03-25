let array1 = ['xc', 'dz', 'bbb', 'dz'];
let array2 =  ['bbb', 'ac', 'dz'];

function countOccurrences(array1, array2) {
    let counts = {};
    
    array2.forEach(element => {
        counts[element] = array1.filter(item => item === element).length;
    });

    return array2.map(element => counts[element] || 0);
}

console.log(countOccurrences(array1, array2));



