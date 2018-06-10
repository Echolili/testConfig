//对象里面的key是字符串
let obj = function() {
  x : '1';
  y : '2'
}
console.log(obj.constructor)
let a = new obj()
console.log( 'a', a.x)
obj.prototype.y = 3
let b = new obj()
console.log(b)
obj.z = 4
let c = new obj()
console.log(c)

//原型链,继承原型链的属性但是不会更改原型链的属性
function foo(){};//定义一个函数
foo.prototype.z = 3;
var obj = new foo();//定义obj为函数的对象
obj.x = 1;
obj.y = 2;//定义对象上的两个属性
console.log(obj.z)//3
console.log(typeof obj.toString); //function,因为obj——foo——Object.prototype——null，Object.prototype有toString方法
console.log(obj.hasOwnProperty('z'))//false
'z' in obj //true,另外in会向原型链查找
obj.z = 5
console.log(obj.z)//5
console.log(foo.prototype.z)//任然是3
//另一种情况
obj.z = undefined;
console.log(obj.z)//undefined,虽然打印出undefined，obj是有z属性的，所以这时候可以根据hasOwnProperty或者in操作符区分
delete obj.z ;
obj.z//3,不会影响原型属性

//原型链中create方法
var object = Object .create({x:1});
object.x//1
object.hasOwnProperty('x')//false
console.log(typeof object.toString);//function，因为object——{x:1}——Object.prototype——null

//but
var object = Object.create(null);
console.log(typeof object.toString);//undefined,因为object——null

//属性删除，有些对象的属性是不能被删除的
delete Object.prototype//false,因为Object中的configurable属性为false
var des = Object.getOwnPropertyDescriptor(Object,'prototype');
console.log(des.configurable)//false
//全局变量、局部变量、函数声明不能被删除，
//但是隐式创建全局变量，
ohNO = 1;
window.ohNO;//1
delete window.ohNO;//true

//自定义枚举属性
Object.defineProperty(cat,'prict',{enumerable : false,value:1000});//默认不能枚举
console.log(Object.propertyIsEnumerable);//false
Object.hasOwnProperty('prict')//true

//getter(),setter()方法
var man = {
  weibo:'chenqi',
  $age : null,
  get age() {
    if (this.$age == undefined) {
      return new Date().getFullYear - 1988;
    }else {
      return this.$age;
    }
  },
  set age(val) {
    val = +val;
    console.log(val)
    if (!isNaN(val) && val>0 && val <150) {
      this.$age = +val;
    }else {
      throw new Error('In' +val)
    }
  }
}
try {
  man.age = 'a'  
} catch (error) {
  console.log('error11111111', error.message);
}
