/**
 * 严格模式：是一种特殊的执行模式，修复了部分语言上的不足，提供更强的错误检查，提高安全性
 */
function Foo(){
    'use strict';
};
//or
'use strict';
function Foo(){
    
};
/**
 * 严格模式与普通模式的区别：1、不能使用with(SyntaxError)；
 * 2、不允许未声明的变量被赋值(ReferenceError)
 *3、arguments
 4、八进制
 5、数组重复命名
 6、eval独立作用域
 7、eval、arguments是关键字
 */