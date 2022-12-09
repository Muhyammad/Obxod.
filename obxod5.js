const people = [
    { name: 'Sandra', age: 18 },
    { name: 'Erin', age: 28 },
    { name: 'Carl', age: 42 },
    { name: 'Lloyd', age: 12 },
    { name: 'Samuel', age: 31 },
    { name: 'William', age: 65 },
    { name: 'Ric', age: 53 },
    { name: 'Mick', age: 12 },
    { name: 'Ludwig', age: 74 },
    { name: 'Hilaire', age: 10 },
    { name: 'Menachem', age: 4 },
    { name: 'Saul', age: 52 },
    { name: 'Robert', age: 65 },
    { name: 'Blair', age: 12 },
    { name: 'Robert', age: 81 },
    { name: 'Peter', age: 69 }
];

// 1
const map = (people) => people.forEach(people => console.log(people));
console.log(map(people))

// 2
const map2 = (people) => people.forEach(people => console.log(people.name));
console.log(map2(people))

// 3
const minorPeople = (people) => people.filter((i) => i.age <= 18);
console.log(minorPeople(people))

// 4  oldPeople
const oldPeople = (people) => people.filter((i) => i.age >= 50);
console.log(oldPeople(people))

// 5

const futurePeople = people.map(({ ...item }) => {
    item.age += 30;
    return item;
});

console.log(futurePeople);
// 6

const futurePeople2 = people.map(({ ...item }) => {
    item.age += 30;
    return item;
});

const deadPeople = futurePeople.map(({ ...item }) => {
    item.age > 100 ? item['isdead'] = true : item['isDead'] = false
    return item
});

console.log(deadPeople);
//   7
total = 0;
people.forEach(function (people) {
    total += people.age;
});
console.log(total / people.length)


const aaa = people.reduce((total, item) => (total + item.age),0) / people.length;
console.log(aaa)


