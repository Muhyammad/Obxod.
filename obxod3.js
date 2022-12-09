/* добавляет восклицательный знак в конец каждого элемента массива */
function exclamations(strings) {
    const loudStrings = [];

    for (let i = 0; i < strings.length; i++) {
        loudStrings.push(strings[i] + '!');
    }

    return loudStrings;
}

//проверка
const strings = ['arr', 'aee', 'att', 'ayy', 'auu']
function exclamations(strings) {
    const loudStrings = [];

    for (let i = 0; i < strings.length; i++) {
        loudStrings.push(strings[i] + '!');
    }

    return loudStrings;
}
console.log(exclamations(strings))

// обход

const strings2 = ['arr', 'aee', 'att', 'ayy', 'auu'];

const exclamations2 = (strings2) => strings2.map((i) => i + '!');

console.log(exclamations2(strings2));

/* преобразует все числа из массива в квадрат */
function squareAll(numbers) {
    const squares = [];

    for (let i = 0; i < numbers.length; i++) {
        squares.push(numbers[i] * numbers[i]);
    }

    return squares;
}
// проверка 
const numbers = [1, 2, 3, 4, 5];

function squareAll(numbers) {
    const squares = [];

    for (let i = 0; i < numbers.length; i++) {
        squares.push(numbers[i] * numbers[i]);
    }

    return squares;
}
console.log(squareAll(numbers));
// обход
const numbers2 = [1, 2, 3, 4, 5];

const squareAll2 = (numbers2) => numbers2.map((i) => i ** 2)

console.log(squareAll2(numbers2))

/* заменяет все слова в массиве на их первые буквы */
function firstLetters(words) {
    const letters = [];

    for (let i = 0; i < words.length; i++) {
        letters.push(words[i][0]);
    }

    return letters;
}
// ?????????????
const words = ['v=s0adafs', 'sdfasdf']

function firstLetters(words) {
    const letters = [];

    for (let i = 0; i < words.length; i++) {
        letters.push(words[i][0]);
    }

    return letters;
}
console.log(firstLetters(words))
// obxod
const words2 = ['v=s0adafs', 'sdfasdf'];
const firstLetters2 = (words2) => words2.map((i) => i[0]);
console.log(firstLetters2(words2));
