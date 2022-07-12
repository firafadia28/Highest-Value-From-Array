let numbers = [3, 1, 2, 3, 7, 5, 6, 8, 2, 1];

function result(numbers) {
   let highest = 0;
   for (let i = 0; i < numbers.length; i+=1) {
     if(numbers[i] > highest) {
       highest = numbers[i];
     } 
   }
   return highest;
}

console.log(result(numbers));
