function sum(numbers) {
    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }

    return total;
}

/* ставит тире между словами */
function hyphenate(words) {
    let hyphenatedWords = '';

    for (let i = 0; i < words.length; i++) {
        if (hyphenatedWords === '') {
            hyphenatedWords = words[i];
        } else {
            hyphenatedWords += `-${ words[i]}`;
        }
    }

    return hyphenatedWords;
}

// asdddddddddddddddddddddddddddddddddddddddddddddd

const words = ['mama', 'papa', 'cиcтер']

function hyphenate(words) {
    let hyphenatedWords = '';

    for (let i = 0; i < words.length; i++) {
        if (hyphenatedWords === '') {
            hyphenatedWords = words[i];
        } else {
            hyphenatedWords += `-${ words[i]}`;
        }
    }

    return hyphenatedWords;
}
console.log(hyphenate(words))
// sadddddddddddddddddddddddddddddddddddddddddddddddd


const words2 = ['mama', 'papa', 'cиcтер'];
const hyphenate2 = (words2) => words2.reduce((i) => i + `--${words2[i]}`);
console.log(hyphenate2(words2))
