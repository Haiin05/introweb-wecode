var word = 'random'

while(true) {
    var answer = prompt(word);
    if (word[word.length - 1] === answer[0]) {
        alert('Good job!')
    else {
        alert('Nope! Try again!')
    }
    }
}