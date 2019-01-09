// 1、尾部添加，头部添加数组 push unshift
// 2、尾部删除，头部删除数组 pop shift
// 3、arr[2] = undefined和delete arr[2]是不一样的，虽然2位置打印出来的都是undefined。但是in arr 的结果是不一样的
// 4、for in 会遍历到原型链上的东西，且遍历的顺序不是按照顺序来的

// 数组方法：
var arr = [1,2,3];
//1
arr.join();
arr.join("_");
//2
arr.reverse();//倒序，会修改原有数组
//3
arr.sort();//排序，转换字符串的基础上进行排序，且原数组会修改
//因为是转换为字符串去排序，所以[13,24,51,3],会排序成[13,24,3,51]
//解决方法，在sort方法中传入参数，如：
arr.sort(function(a,b) {
    return a-b;
});//[3,13,24,51]
//还可以进行对象数组排序
arr = [{age:12},{age:23},{age:3}];
arr.sort(function(a,b) {
    return a.age-b.age;
});//[{age:3},{age:12},{age:23}]

//4、合并数组
arr.concat(4,5);//[1,2,3,4,5]
arr;//[1,2,3]//不会改变原数组
arr.concat([4,5],6);//[1,2,3,4,5,6]//数组元素会被折叠一次
arr.concat([[7,8],9]);//[1,2,3,[7,8],9]//合并的数组中如果还有数组。则不会再在折叠一次

//5.返回部分数组
var arr= [1,2,3,4,5];
arr.slice(1,3)//[2,3]//取左不取右，取arr[1],arr[2]
arr.slice(1)//[2,3,4,5],1位到最后
arr.slice(1,-1)//[2,3,4],-1表示倒数第一位
arr.slice(-4,-3)//[2].从倒数第4位到倒数第3位

//拼接数组
var arr= [1,2,3,4,5];
arr.splice(2);//拿到下标为2开始以后的元素，即return [3,4,5]
console.log(arr)//[1,2],原数组被修改
//指定删除几个元素
arr.splice(2,2);//从下标为2的元素开始删掉2个元素，即arr为[1,2,5]
//还可以添加元素
arr.splice(1,1,'a','b');//从下标为1的元素开始删掉1个元素，且在其后加上'a','b'，即arr为[1,"a","b",3,4,5]

//数据遍历foreach,原数组不修改
//函数里面的三个参数x,index,a
var arr= [1,2,3,4,5];
arr.forEach(function (x,index,a) {
  console.log(x + '|' + index + '|' + (a===arr));//1|0|true,依次
});//x表示每个元素的值，index表示位置/下标，a表示数组本身

//数组映射map()原数组不修改
var arr= [1,2,3,4,5];
arr.map(function (x) {
  return x+10;
});

//数组过滤filter()原数组不修改
var arr= [1,2,3,4,5];
arr.filter(function (x,index) {
    return index % 3 === 0 || x >= 9;
});

//数组判断，原数组不修改
// every()数组中每一个元素都要符合某一条件，发现一个不符合的元素返回false ，都符合返回true
//some()数组中某一个元素符合某一条件，只要有一个符合返回true，都不符合返回false

//元素间关联，reduce() 原数组不修改
//reduceRight(),原理相同，是从右往左
var arr= [1,2,3,4,5];
arr.reduce(function (x,y) {
  return x+y;
},0);//6
//第一次0+1 = 1
//第二次1+2 = 3
//第三次3+3 = 6，这里的0为第一次遍历的x的值，如果不定义则为数组第一个元素，y为x后面的元素

//数组检索
var arr= [1,2,3,4,5];
arr.indexOf(x);//存在返回元素下标,不存在返回-1，从左到右找
arr.indexOf(x,y);//从下标为y的位置开始往右查找x，
arr.indexOf(2,1);//1
arr.lastIndexOf(x);//在返从右到左找

//判断是否数组
Array.isArray([]);//Arary构造器上的方法
[] instanceof Array;//true
({}).toString().apply([]) === "[object Array]";//true
[].constructor === Array;//true 若构造器constructor没被修改可以用这判断

//字符串和数组
var str= "hello world";
Array.prototype.join().call(str,"_");//"h_e_l_l_o_ _w_o_r_l_d"




