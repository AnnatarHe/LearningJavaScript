(function(){
	let a = 1;
	const b = 3;
	class hello {
		hi(){
			console.log('hello world');
		}
	}


// proxy
var target = {};
var handler = {
  get: function (receiver, name) {
    return `Hello, ${name}!`;
  }
};

var p = new Proxy(target, handler);
console.log(p.world === "Hello, world!");

// default values in function

function foo(x = 'foo') {
	console.log(`hello ${x}`);
}
foo();

// rest
function bar(...params) {
	let sum = 0;
	for(let i = 0 of params){
		sum += i;
	}
	return sum;
}

bar(3,6,9,5,4,2);


let sum = (num1, num2) => num1 + num2;

var getJson = id => ({ id: id, name: "Temp" });


function factorial(n, total) {
  if (n === 1) return total;
  return factorial(n - 1, n * total);
}

factorial(5, 1) // 120



let s = new Set();

[2,3,5,4,5,2,2].map(x => s.add(x));

for (i of s) {console.log(i)}


}());