/*
Write a function called hasOddNumber which accepts an array and returns true if the array contains at least one odd number, otherwise it returns false.

Examples:
    hasOddNumber([1,2,2,2,2,2,4]) // true
    hasOddNumber([2,2,2,2,2,4]) // false
*/

// let evenNumArray = [2, 4, 6];
// let oddNumArray = [1, 3, 5];

// evenNumArray.some(function (value) {
//     return (value % 2 === 0);
// });
// // True

// evenNumArray.some(function (value) {
//     return (value % 2 === 1);
// });
// // False

// oddNumArray.some(function (value) {
//     return (value % 2 === 0);
// });
// // False

// oddNumArray.some(function (value) {
//     return (value % 2 === 1);
// });
// // True

function hasOddNumber(arr) {
    return arr.some(function (value) {
        return (value % 2 === 1);
    });
};

/*
Write a function called hasAZero which accepts a number and returns true if that number contains at least one zero. Otherwise, the function should return false

Examples:
    hasAZero(3332123213101232321) // true
    hasAZero(1212121) // false
*/

// let num = 45698772;
// let str = num.toString();
// for (let i = 0; i < str.length; i++){
//     if (str.indexOf('0') !== -1) {
//         console.log(true);
//     }
//     else {
//         console.log(false);
//     };
// };

function hasAZero(num) {
    const str = num.toString()
    return str.split('').some(function (value) {
        return value.indexOf('0') !== -1;
    });
};

/*
Write a function called hasOnlyOddNumbers which accepts an array and returns true if every single number in the array is odd. If any of the values in the array are not odd, the function should return false. 

Examples:
    hasOnlyOddNumbers([1,3,5,7]) // true
    hasOnlyOddNumbers([1,2,3,5,7]) // false
*/

function hasOnlyOddNumbers(arr) {
    return arr.every(function (value) {
        return (value % 2 === 1);
    });
};

/*
Write a function called hasNoDuplicates which accepts an array and returns true if there are no duplicate values (more than one element in the array that has the same value as another). If there are any duplicates, the function should return false.

Examples:
    hasNoDuplicates([1,2,3,1]) // false
    hasNoDuplicates([1,2,3]) // true
*/

let noDupesArray = [1, 2, 3, 4, 5, 6];
let dupeArray = [1, 2, 3, 4, 2, 5];

// First attempt with just a plain for loop.
// function hasNoDuplicates(arr) {
//     for (let i = 0; i < arr.length; i++){
//         if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
//             // console.log('This array has duplicate numbers.');
//             // console.log(`Duplicate number at index ${i}.`);
//             return 'This array has duplicate numbers.';
//         };
//         // else if (arr.indexOf(i) === arr.lastIndexOf(i)) {
//         //     // console.log('This array doesn\'t have duplicate numbers.')
//         //     return 'This array doesn\'t have duplicate numbers.';
//         // }
//         // else {
//             // console.log('This array doesn\'t have duplicate numbers.');
//             // console.log(`Index ${i} is not a duplicate number.`)
//             // return 'This array doesn\'t have duplicate numbers.';
//         // }
//     };
//     return 'This array doesn\'t have duplicate numbers.';
//     // return arr.some(function (value, index) {
//     //     return arr.indexOf(value) !== index;
//     // });
//     // return arr.some( function(item) {
//     //     return arr.indexOf(item) === arr.lastIndexOf(item);
//     // });
// };

function hasNoDuplicates(arr) {
    // return arr.some(function (value, index) {
    //     return arr.indexOf(value) !== index;
    // });
    return arr.every(function(value) {
        return arr.indexOf(value) === arr.lastIndexOf(value);
    });
};

/*
Write a function called hasCertainKey which accepts an array of objects and a key, and returns true if every single object in the array contains that key. Otherwise it should return false.

Examples:
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
    
    hasCertainKey(arr,'first') // true
    hasCertainKey(arr,'isCatOwner') // false
*/

const survey = [
    { first: 'Michael', last: 'Wheeler', isDogOwner: true },
    { first: 'Steven', last: 'Wilson' },
    { first: 'William', last: 'Johnson', isDogOwner: true },
    { first: 'Benjamin', last: 'Franklin' }
];

// for (let i = 0; i < survey.length; i++){
//     if (survey[i].hasOwnProperty('isDogOwner')) {
//         console.log(survey[i]);
//     };
// };

function hasCertainKey(arr, key) {
    return arr.every(function (value) {
        return value[key];
    });
};

/*
Write a function called hasCertainValue which accepts an array of objects and a key, and a value, and returns true if every single object in the array contains that value for the specific key. Otherwise it should return false.

Examples:
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
    
    hasCertainValue(arr,'title','Instructor') // true
    hasCertainValue(arr,'first','Elie') // false
    
*/

const roster = [
    { first: 'George', last: 'Washington', title: 'president' },
    { first: 'Thomas', last: 'Jefferson', title: 'president' },
    { first: 'Abraham', last: 'Lincoln', title: 'president' },
    { first: 'Franklin', last: 'Roosevelt', title: 'president' }
];

// for (let i = 0; i < roster.length; i++){
//     if (roster[i].hasOwnProperty('title')) {
//         console.log(roster[i]);
//     };
// };

function hasCertainValue(arr, key, searchValue) {
    return arr.every(function (value) {
        return value[key] === searchValue;
    });
};