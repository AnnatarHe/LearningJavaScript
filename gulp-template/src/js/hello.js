function scorll(selector) {
  this.defautSettings.selector = document.querySelector(selector);
  this.listenerLeft();
  this.listenerRight();
  return this;
}

scorll.prototype.defautSettings = {
  selector: null,
  speed : 14
}

scorll.prototype.listenerLeft = function() {
  var obj = this.defautSettings.selector;
  obj.addEvent
};

scorll.prototype.listenerRight = function() {
  
};

var test = new scorll('.container');