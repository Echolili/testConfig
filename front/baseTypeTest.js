//基本类型
/**
 * 1.加号和减号
 */
var q = '32' + 32;//当做字符串连接
var p = '32' - 32;//被当做减法运算
console.log(q)
console.log(p)
//巧用，类型转换
q = 32 + '';
p = 32 - 0;
console.log(q)
console.log(p)
/**
 * 强等于和弱等于
 */
if ('1.23' == 1.23) {
    console.log(1)
}
if (0 == false) {
    console.log(2)
}
if (null == undefined) {
    console.log(3)
}
if (new Object() == new Object()) {
    console.log(4)
}
if ([1,2] == [1,2]) {
    console.log(5)
}
if (null === null) {
    console.log(6)
}
if (NaN == NaN) {
    console.log(7)
}
if (undefined === undefined) {
    console.log(8)
}
if (new String('hi') == 'hi') {
    console.log(9)
}
/**
 * 包装 对象,当将基本类型做对象的操作，系统会先将基本类型转换成对象再进行操作
 * string/number/boolean 
 */
var Str = 'string' ;
console.log(Str.length);
Str.t = '3';
console.log(Str.t)//undefined Str.t设置完之后，这个临时对象会被销毁

/**
 * 类型检测
 */
//typeof/instanceof/Object.prototype.toString/constructor/duck type

console.log(typeof(null))
console.log(typeof(undefined))
console.log(typeof(new Object()))

/**
 * instanceof
 * 
 * obj instanceof object
 * 左边一定要是对象，否则返回false
 * 右边一定要是函数对象或函数构造器，否则抛出taperror异常
 * 注意：不同的window或iframe时不能用instanceof
*/
function Person(){};
function Student(){};
Student.prototype = new Person();
console.log(Student.prototype.constructor)
Student.prototype.constructor = Student;
console.log(Student.prototype.constructor)
console.log(Student.prototype)

var bson = new Student();
var one = new Person();

if (bson instanceof Student) {
    console.log('bson instanceof Student')
}
if (one instanceof Person) {
    console.log('one instanceof Person')
}
if (one instanceof Student) {
    console.log('one instanceof Student')
}
if (bson instanceof Person) {//student.prototype指向person.prototype
    console.log('bson instanceof Person')
}
