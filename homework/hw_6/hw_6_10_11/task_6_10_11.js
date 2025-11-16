//#bolvdlhP
//
//  описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу
//
// Після опису, використовуючи функції масивів:
//
//  – знайти піковий туз
//
//  – всі шістки
//
//  – всі червоні карти
//
//  – всі буби
//
//  – всі трефи від 9 та більше
//
//
//
// Приклад моделі об’єкту карти:
//
// {
//
//     cardSuit: ”, // ‘spade’, ‘diamond’,’heart’, ‘clubs’
//
//     value: ”, // ‘6’-’10’, ‘ace’,’jack’,’queen’,’king’
//
//     color:”, // ‘red’,’black’
//
// }
//========================================================================================================//

//опис/формування колоди

const suits = [
    { name: 'spade',   color: 'black' },
    { name: 'diamond', color: 'red'   },
    { name: 'heart',   color: 'red'   },
    { name: 'club',    color: 'black' }
];
const values = ['6', '7', '8', '9', '10', 'ace','jack', 'queen', 'king'];

const deck = [];

for (const suit of suits) {
    for (const value of values) {
        deck.push({
            cardSuit: suit.name,
            value: value,
            color: suit.color
        });
    }
}

//фільтр

console.log('Ємкість колоди',deck.length); // 36
console.log('Колода карт',deck);

const aceOfSpades = deck.find(card => card.cardSuit === 'spade' && card.value === 'ace');
console.log('піковий туз', aceOfSpades);

const cardOfSix = deck.filter(card => card.value === '6');
console.log('всі шістки', cardOfSix);

const cardOfRed = deck.filter(card => card.color === 'red');
console.log('всі червоні', cardOfRed);

const cardOfDiamond = deck.filter(card => card.cardSuit === 'diamond');
console.log('всі буби', cardOfDiamond);

const cardOfClub  = deck.filter(card =>
    card.cardSuit === 'club' && card.value > '8' ||
    card.cardSuit === 'club' && card.value > +'9');   //10
console.log('всі трефи від 9 та більше',cardOfClub);

//========================================================================================================//
//========================================================================================================//

//#EP5I1UUzAX
// //
// // Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт
// //
// // Приклад моделі кінцевого об’єкту
// //
// // {
// //
// //     spades:[],
// //
// //     diamonds:[],
// //
// //     hearts:[],
// //
// //     clubs:[]
// //
// // }

let deckCardSuits = deck.reduce((previousValue, currentValue) => {
        if (currentValue.cardSuit === 'club') {
            previousValue.clubs.push(currentValue)
        }
        else if (currentValue.cardSuit === 'spade') {
            previousValue.spades.push(currentValue)
        }
        else if (currentValue.cardSuit === 'diamond') {
            previousValue.diamonds.push(currentValue)
        }
        else if (currentValue.cardSuit === 'heart') {
            previousValue.hearts.push(currentValue)
        }
        return previousValue;
    },
    {spades:[], diamonds:[], hearts:[], clubs:[]})

console.log('завдання по reduce',deckCardSuits)