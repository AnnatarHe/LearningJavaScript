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
foo()


}());