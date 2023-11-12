// task 1

// function doubleNumbers(arr){
//     let newArray=[];
//     newArray=arr.map(function (params) {
//     return  params*params;
// })
//     return newArray;
// }

// console.log(doubleNumbers([1,2,3,4]));

//task2

//   function stringItUp(arr){

//     return arr.map(function (params){
//         return params.toString();
//     })

//   }
//   let array=[1,2,3,4,5];
//    console.log(stringItUp(array));

//task3
// function capitalizeNames(arr) {
//   return arr.map(function (params) {
//     params = params.toLowerCase();
//     return (params[0] = params[0].toUpperCase() + params.slice(1));

//   });
// }

// console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

//task 4

//   function namesOnly(arr)
//   {
//     let strName=[];
//     arr.map(function (params,index) {
//         strName[index]=params.name
//     })
//     return strName;
//   }

//   console.log(namesOnly([
//           {
//               name: "Angelina Jolie",
//               age: 80
//           },
//           {
//               name: "Eric Jones",
//               age: 2
//           },
//           {
//               name: "Paris Hilton",
//               age: 5
//           },
//           {
//               name: "Kayne West",
//               age: 16
//           },
//           {
//               name: "Bob Ziroll",
//               age: 100
//           },
//           {
//             name: "Bob Ziroll",
//             age: 100
//         }
//           ]));

//task5

//   function makeStrings(arr){
//     let strName=[];
//     return arr.map(function (params,index) {
//         if(params.age>=18)
//         {
//             return `${params.name} can go to The Matrix`;
//         }
//         else
//         {
//             return `${params.name} is under age!!`;
//         }
//     })

//   }

//    console.log(makeStrings([
//          {
//             name: "Angelina Jolie",
//             age: 80
//         },
//         {
//             name: "Eric Jones",
//             age: 2
//         },
//         {
//             name: "Paris Hilton",
//             age: 5
//         },
//         {
//             name: "Kayne West",
//             age: 16
//         },
//         {
//             name: "Bob Ziroll",
//             age: 100
//         }
//       ]));

//task6

//   function readyToPutInTheDOM(arr)
//   {
//     let strName=[];
//         return arr.map(function (params,index)
//         {
//             return `<h1>${params.name}}</h1><h2>${params.age}</h2>`
//         })
//   }

//     console.log(readyToPutInTheDOM([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//     ]));

//task7

// function doubleValues(arr) {
//   let strName = [];
//   strName = arr.map(function (params) {
//     return  params + params;
//   });
//   return strName;
// }

// console.log(doubleValues([1,2,3]));

//task8

//     function valTimesIndex(arr){
//    let strName = [];
//    strName = arr.map(function (params,index) {
//      return  index*params;
//    });
//    return strName;
//     }
//     console.log(valTimesIndex([1,2,3]));

//task9

//     function extractKey(arr,key){
//         let strName = [];
//    strName = arr.map(function (params,key) {
//      return  params.name;
//    });
//    return strName;

//     }
//     console.log(extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name'));

//task10
function extractFullName(people) {
  return people.map(function (person) {
    return `${person.first} ${person.last}`;
  });
}

// Test case
console.log(
  extractFullName([
    { first: "Elie", last: "Schoppik" },
    { first: "Tim", last: "Garcia" },
    { first: "Matt", last: "Lane" },
    { first: "Colt", last: "Steele" },
  ])
);
