// 1

function oddIntegers(numbers) {
    const odds = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 1) {
            odds.push(numbers[i]);
        }
    }

    return odds;
}

// проверка
// 1
const numbers2 = [1, 5, 3, 8, 2];

function oddIntegers(numbers) {
    const odds = [];

    for (let i = 0; i < numbers2.length; i++) {
        if (numbers2[i] % 2 === 1) {
            odds.push(numbers2[i]);
        }
    }

    return odds;
}
console.log(oddIntegers(numbers2))
// обход

const numbers = [1, 5, 3, 8, 2];

const oddIntegers = (numbers) => numbers.filter((i) => i % 2 === 1)

console.log(oddIntegers(numbers))


// \\\\\\\\\\




//   2 
function longStrings(strings, minimumLength) {
    const longs = [];

    for (let i = 0; i < strings.length; i++) {
        if (strings[i].length >= minimumLength) {
            longs.push(strings[i]);
        }
    }

    return longs;
}
// проверка 


const strings2 = ['1', 'fsdf', 'ds', 'dsf', 'd'];

function longStrings(strings2, minimumLength) {
    const longs = [];

    for (let i = 0; i < strings2.length; i++) {
        if (strings2[i].length >= minimumLength) {
            longs.push(strings2[i]);
        }
    }

    return longs;
}
console.log(longStrings(strings2, 3))

//обход

const strings = ['1', 'fsdf', 'ds', 'dsf', 'd'];

const longStrings = (strings, minimumLength) => strings.filter((i) => i.length >= minimumLength)

console.log(longStrings(strings, 3))


// // 3   

// const phoneNumbers = [, 'asfd', 6, undefined, false];

// function getNotEmptyPhoneNumbers(phoneNumbers) {
//     const notEmpty = [];

//     for (let i = 0; i < phoneNumbers.length; i++) {
//         if (phoneNumbers[i].phone !== undefined) {
//             notEmpty.push(phoneNumbers[i]);
//         }
//     }

//     return notEmpty;
// }

// console.log(getNotEmptyPhoneNumbers(phoneNumbers))