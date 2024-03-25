function stringManipulation(word) {
    
    if (!word[0].match(/^[aiueo]/i)) {
        let reversedWord = word.slice(0, -1).split('').reverse().join(''); 
        let newWord = reversedWord + word[word.length - 1];
        console.log(newWord);
    } else {
        console.log(word);
    }
}

stringManipulation('NEGIE1')