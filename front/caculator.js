/**
 * 特殊运算符，create by 18-5-24
 */
//删除运算符,删除对象上的属性
var obj = {x:1};
obj.x//1
delete obj.x;
obj.x//undefined
//删除运算符可以根据设置使其生效或不生效
var obj = {};
Object.defineProperty(obj,'x',{
    configurable:false,
    value:1
});
delete obj.x;//false
obj.x//还是1，configurable属性设为false时，删除运算符未生效
//逗号表达式
var val = (1,2,3); //val = 3
//in运算符，可以判断对象中是否有指定的key
    var obj = {x:1,y:2};
    x in obj//true
//new运算符
function Foo(){};
Foo.prototype.x = 1;
var obj = new Foo();
obj.x = 1;
obj.hasOwnPrototype('x');//false
obj._poto_.hasOwnPrototype('x');//true
//this运算符
//typeof用于判断原始类型或函数对象，instanceof用于判断对象的原型链
//void运算符,后面接什么都是undefined
void 0//undefined
void (0)//undefined
//了解运算符优先级
