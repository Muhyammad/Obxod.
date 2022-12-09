// ищем число в массиве numbers, которое меньше чем limit 
function firstUnder(numbers, limit) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < limit) {
            return numbers[i];
        }
    }

    return undefined;
}

// рабочий
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

function firstUnder(numbers, limit) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < limit) {
            return numbers[i];
        }
    }

    return undefined;
}
console.log(firstUnder(arr, 4))

// Обход

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const firstUnder2 = (number, num) => number.find((i) => i < num);

console.log(firstUnder2(number, 5));


////////////////////////////////////////////////////////////////////////////////

// ищет строку в массиве strings, которая начинается с указанной буквы 

function startsWith(strings, letter) {
    for (let i = 0; i < strings.length; i++) {
        if (strings[i][0] === letter) {
            return strings[i];
        }
    }

    return undefined;
}


// рабочий

const strings = ['a', 'B', 'd']

function startsWith(strings, letter) {
    for (let i = 0; i < strings.length; i++) {
        if (strings[i][0] === letter) {
            return strings[i];
        }
    }

    return undefined;
}
console.log(strings, B)

// обход


const strings2 = ['a', 'B', 'd'];

const find = (strings2, letter) => strings2.find((i) => i === letter);

console.log(find(strings2,'B'));