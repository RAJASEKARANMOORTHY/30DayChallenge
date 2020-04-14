/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.input = [];
    this.min = null;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.min = this.min != null && this.min < x ? this.min : x;

    var node = {
        val: x,
        min: this.min
    }

    this.input.push(node);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    if (this.input.length > 0) {
        var node = this.input.pop();
        this.min = this.input.length > 0 ? this.input[this.input.length - 1].min : null;
        return node.val;
    }
    this.min = null;
    return null;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    if (this.input.length > 0) {
        var node = this.input[this.input.length - 1];
        return node.val;
    }

    return null;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

var minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); //--> Returns -3.
minStack.pop();
minStack.top(); //--> Returns 0.
minStack.getMin(); //--> Returns -2.