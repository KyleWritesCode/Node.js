//Class Notes

// Arrays are a container for other things
var arrayNumberOne = [];		// [] means an empty array
console.log('arrayNumberOne = ' , arrayNumberOne);

var arrayWithValues = ['Mo' , 4 , "two" , {
name: 'basketball'
}]; 
console.log('arrayWithValues = ' , arrayWithValues);
// We use arrays to group items in order
// Arrays use indexes to access items, starting with 0
console.log('arrayWithValues Starting term = ', arrayWithValues[0]);

// .length gives you the number of items in an array
console.log(arrayWithValues.length);

// .push adds an item to the END of the array
arrayWithValues.push('push value');
console.log(arrayWithValues);

//.unshift adds an item to the beginning of the array.
arrayWithValues.unshift('unShift');
console.log(arrayWithValues);

//.pop removes an item from the END of the array.
arrayWithValues.pop();
console.log(arrayWithValues);

//.shift removes and item from the beginning of the array.
arrayWithValues.unshift();
console.log(arrayWithValues);

//.sort
arrayWithValues.sort();
console.log(arrayWithValues);

// .reverse
arrayWithValues.reverse();
console.log(arrayWithValues);

//.indexOf will return the integer index of each item, or -1 if not found
console.log(arrayWithValues.indexOf(4));
console.log(arrayWithValues.indexOf("asd"));
console.log(arrayWithValues.indexOf({name: 'basketball'}));








