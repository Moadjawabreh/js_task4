// task1

// let arr1=[1,2,3];

// function doubleValues(array) {
//     let newArray=[];
//     array.forEach(function (item,index,)
//      {
//         newArray[index]=item*2;
//     })
//     return newArray;
// }

// console.log(doubleValues(arr1));
// console.log(arr1);

//task2

// let arr1=[1,2,3];

// function doubleValues(array) {
//     let newArray=[];
//     array.forEach(function (item,index)
//      {
//         if(item %2==0)
//         newArray.push(item);
//     })
//     return newArray;
// }

// console.log(doubleValues(arr1));

// task3

//  let strArr=['colt','matt', 'tim', 'udemy'];

// function showFirstAndLast(array)
// {
//     let newArray=[];
//     array.forEach(function (params,index)
//     {
//         let firstLast=params[0]+params[params.length -1 ];
//         newArray.push(firstLast);
//     })
//     return newArray;
// }

// console.log(showFirstAndLast(strArr));

//task4

// function addKeyAndValue(arr,key,value)
// {
//     let newArray=[];
//     arr.forEach(function (par)
//     {
//             par[key]=value;
//             newArray.push(par);
//         }

//     );
//     return newArray;
// }

// console.log(addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor'));

// task5

// function vowelCount(str) {
//   var obj = {};

//   var vowelsChars = str.split("");

//   var vowelsCount = [0, 0, 0, 0, 0];

//   vowelsChars.forEach(function (params) {
//     switch (params) {
//       case "A":
//       case "a":
//         {
//           obj["a"] = ++vowelsCount[0];
//         }
//         break;
//       case "U":
//       case "u":
//         {
//           obj["u"] = ++vowelsCount[1];
//         }
//         break;
//       case "I":
//       case "i":
//         {
//           obj["i"] = ++vowelsCount[2];
//         }
//         break;
//       case "O":
//       case "o":
//         {
//           obj["o"] = ++vowelsCount[3];
//         }
//         break;
//       case "E":
//       case "e":
//         {
//           obj["e"] = ++vowelsCount[4];
//         }
//         break;
//       default:
//         break;
//     }
//   });
//   console.log(obj);
//   return obj;
// }

// vowelCount("elit");
// vowelCount("uuii");
// vowelCount("aaaeiou");
