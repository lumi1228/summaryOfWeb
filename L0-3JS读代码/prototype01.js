
function A() {}
var a = new A()
console.log(a.__proto__ === A.prototype) //true
console.log(a.prototype) //undefined
console.log(A.__proto__ === Function.prototype) //true

// 1、分析 console.log(a.__proto__ === A.prototype) //true
// - 当使用 new A() 创建对象时，JavaScript会将新创建的对象 a 的内部 [[Prototype]] （在浏览器中通过 __proto__ 访问）指向构造函数 A 的 prototype 属性。
// - 这是JavaScript原型继承机制的核心：实例对象通过 __proto__ 链接到其构造函数的原型对象。

// 2、分析 console.log(a.prototype) //undefined
// - prototype 属性 只存在于函数对象 上，用于存储将被所有实例共享的属性和方法。
// - a 是通过 new A() 创建的普通实例对象，不是函数，因此它没有 prototype 属性。

// 3、分析 console.log(A.__proto__ === Function.prototype) //true
// - 在JavaScript中， 函数本身也是对象 。当创建函数 A 时，它会被视为 Function 的实例。
// - 因此， A 的内部 [[Prototype]] （即 A.__proto__ ）会指向 Function.prototype ，这体现了JavaScript中函数的原型链结构。