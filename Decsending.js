// Decsending order
const array = [4, 8, 6, 3, 5, 7, 2, 0, 1];
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length ; j++) {
    if (array[j] < array[j + 1]) {  
      const temp = array[j];
      array[j] = array[j + 1];
      array[j + 1] = temp;
    }
  }
}

console.log("Sorted Elements in Descending Order: " + array);
