// 1、--------------------
// 「百度1」
const obj = {a: 1}
obj.a = 2 
const arr =[1,2]
arr =[] //报错 Uncaught TypeError: Assignment to constant variable.

// 注意：obj.a=2是允许的，因为只是修改对象的属性而不是重新赋值整个变量
// arr =[] 仍然不允许，因为const变量不能被重新赋值