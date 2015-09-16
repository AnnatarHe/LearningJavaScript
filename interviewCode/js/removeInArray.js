/**
 * 任务：
 * 要求传入一个数组，在不改变数组的前提下剔除数组中item的内容
 */
const test = [1,2,2,3,4,5,2];
/**
 * 利用api，简洁
 * @param  {array} arr  array
 * @param  {string|integer} item 
 * @return {array}      新建立的数组
 */
function remove (arr, item) {
	return arr.filter((x) => x !== item);
}
function remove2 (arr, item) {

	var newArr = [];

	for(var i in arr) {
		if(arr[i] != item) {
			newArr.push(arr[i]);
		}
	}
	return newArr;
}

(() => {
	var count = 1;
	console.log(`第 ${count} 次调用：` + remove(test, 2));
	count++;
	console.log(`第 ${count} 次调用：` + remove2(test, 2));
})();