/**
 * Set 是一种抽象数据类型，它可以存储某些值，而不需要任何特定的顺序，
 * 也没有重复值。它是计算机实现有限集合的数学概念
 * */

function Set() {
  this.values = [];
  this.numberOfValues = 0;
}

Set.prototype.add = function (value) {
  if ( !~this.values.indexOf(value) ){
    this.values.push(value);
    this.numberOfValues++;
  }
};

Set.prototype.remove = function (value) {
  var index = this.values.indexOf(value);
  if ( ~index ){
    this.values.splice(index, 1);
    this.numberOfValues--;
  }
};

Set.prototype.contains = function (value) {
  return this.values.indexOf(value) !== -1;
};

Set.prototype.union = function (set) {
  var newSet = new Set();
  set.values.forEach(function (value) {
    newSet.add(value);
  });
  this.values.forEach(function (value) {
    newSet.add(value);
  });

  return newSet;
};

Set.prototype.intersect = function (set) {
  var newSet = new Set();
  this.values.forEach(function (value) {
    if(set.contains(value)){
      newSet.add(value);
    }
  });

  return newSet;
};

Set.prototype.difference = function (set) {
  var newSet = new Set();
  this.values.forEach(function (value) {
    if(!set.contains(value)){
      newSet.add(value);
    }
  });

  return newSet;
};

Set.prototype.isSubset = function (set) {
  set.values.every(function (value) {
    return this.contains(value);
  }, this);
};

Set.prototype.length = function () {
  return this.numberOfValues;
};

Set.prototype.print = function () {
  console.log(this.values.join(' '));
};

var set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(4);
set.print(); // => 1 2 3 4
set.remove(3);
set.print(); // => 1 2 4
console.log('是否含有数字4:', set.contains(4)); // => true
console.log('是否含有数字3:', set.contains(3)); // => false
console.log('---');
var set1 = new Set();
set1.add(1);
set1.add(2);
var set2 = new Set();
set2.add(2);
set2.add(3);
var set3 = set2.union(set1);
set3.print(); // => 1 2 3
var set4 = set2.intersect(set1);
set4.print(); // => 2
var set5 = set.difference(set3); // 1 2 4 diff 1 2 3
set5.print(); // => 4
var set6 = set3.difference(set); // 1 2 3 diff 1 2 4
set6.print(); // => 3
console.log('set1 是 set 的子集:', set.isSubset(set1)); // => true
console.log('set2 是 set 的子集:', set.isSubset(set2)); // => false
console.log('set1 长度为:', set1.length()); // => 2
console.log('set3 长度为:', set3.length()); // => 3