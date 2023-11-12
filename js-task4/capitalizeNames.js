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
//   /*
//    * Exercise 3:
//    *
//    * Capitalize each of an array of names
//    *
//    * Test Case:
//    *
//    * console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));
//    *
//    * Result:
//    *  ["John", "Jacob", "Jingleheimer", "Schmidt"]
//   */
function capitalizeNames(arr) {
  return arr.map(function (params) {
    params = params.toLowerCase();
    // params[0] = params[0].toUpperCase();
    params[0] = params[0].toUpperCase();
    return params;
  });
}
