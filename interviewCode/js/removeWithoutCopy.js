function removeWitchCopy (arr, item) {
	for (var i = 0; i < arr.length; i++) {
		if(arr[i] == item) {
			arr.splice(i, 1);
			// 因为改变了数组的长度，所以得减1
			i--;
		}
	}
	return arr;
}

console.log(removeWitchCopy([1, 2, 3, 4, 2], 2));