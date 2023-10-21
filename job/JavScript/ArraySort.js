function sortArrayDescending(arr) {
    const len = arr.length;
    for (let indexI = 0; indexI < len - 1; indexI++) {
      for (let indexJ = 0; indexJ < len - 1 - indexI; indexJ++) {
        if (arr[indexJ] < arr[indexJ + 1]) {
          // Swap the elements
          const temp = arr[indexJ];
          arr[indexJ] = arr[indexJ + 1];
          arr[indexJ + 1] = temp;
        }
      }
    }
  }
  const input = prompt('Enter numbers separated by spaces:');
  const numbers = input.split(' ').map(Number);
  sortArrayDescending(numbers);
  console.log(numbers);
  alert("Sorted Array of numbers: "+numbers);