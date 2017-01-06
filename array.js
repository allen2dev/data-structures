/**
 * 定义：
 * Array 数据结构是由至少一个数组索引或键标识的元素（值或变量）组成的数据结构，
 * 最简单的数据结构类型是线性数组，也叫一维数组。
 * */

function MyArray() {
  this.array = [];
}

MyArray.prototype.add = function (data) {
  this.array.push(data);
};

MyArray.prototype.remove = function (data) {
  this.array = this.array.filter(function (current) {
    return current !== data;
  });
};

MyArray.prototype.search = function (data) {
  var foundIndex = this.array.indexOf(data);
  // ?
  if (~foundIndex) {
    return foundIndex;
  }

  return null;
};

MyArray.prototype.getAtIndex = function (index) {
  return this.array[index];
};

MyArray.prototype.length = function () {
  return this.array.length;
};

MyArray.prototype.print = function () {
  console.log(this.array.join(' '));
};

var array = new MyArray();
array.add(1);
array.add(2);
array.add(3);
array.add(4);
array.print(); // => 1 2 3 4

console.log('搜索元素为数字3的索引位置', array.search(3)); // => 2
console.log('返回索引位置2的元素', array.getAtIndex(2)); // => 3
console.log('返回array的长度', array.length()); // => 4

array.remove(3);
array.print(); // 1 2 4

array.add(5);
array.add(5);
array.print(); // 1 2 4 5 5
array.remove(5);
array.print(); // 1 2 4