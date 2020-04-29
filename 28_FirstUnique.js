
// https://www.youtube.com/watch?v=x_m69OeOHN8

/**
 * @param {number[]} nums
 */
var FirstUnique = function(nums) {
    this.hashMap = new Map();
    this.queue = [];
    
    for(let num of nums) {
        if(this.hashMap.has(num)) {
            this.hashMap.set(num, this.hashMap.get(num) + 1)
        } else {
            this.hashMap.set(num, 1)
        }
        this.queue.push(num);
    }
};

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function() {
    while(this.queue.length > 0 && this.hashMap.get(this.queue[0]) > 1 ) {
        this.queue.shift();
    }
    
    if(this.queue.length == 0) {
        return -1
    }
    
    return this.queue[0];
};

/** 
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function(value) {
        this.queue.push(value);
    
        if(this.hashMap.has(value)) {
            this.hashMap.set(value, this.hashMap.get(value) + 1)
        } else {
            this.hashMap.set(value, 1)
        }
};

/** 
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */