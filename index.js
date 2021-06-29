/* Nested Loop is a loop within a loop. It runs an Iteration within another Iteration.

In a nested loops there is one loop inside another.

for (statement1; statement2; statement3)  {
  code to be excuted

  for (statement4; statement5; statement6)  {

    code to be excuted
  }

}

*/

let twoDimentionalArray = [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]];


// I initialised a varible i
let i;


/*  I use the for keyword to create a for loop, in the parentheses, 
statement1: I set the i varible to 0 value. The counting will start from 0. 
statement2: is Condidtional i < twoDimentionalArray.length; As long as a varible i is less than the length of an Array in my case the length of the array is 5. So the loop will run untill the varible i is no longer less than 5.
statement3 is the incrementor: i ++, increments the value by 1 */


for (i = 0; i < twoDimentionalArray.length; i ++) {
  // the i in twoDimentionalArray[i] is incremented by 1 in each iteration.


  console.log (twoDimentionalArray[i]);
  console.log (twoDimentionalArray[2]); // [5, 6]
  // we access items in the array by there index [0]
}

