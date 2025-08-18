async function async1() {
    console.log('async1 start'); //2
    await async2();
    console.log('async1 end');//6
  }
  async function async2() {
    console.log('async2'); //3
  }
  
  console.log('script start'); //1
  
  setTimeout(function () {
    console.log('setTimeout');//8
  }, 0);
  
  async1();
  
  new Promise(function (resolve) {
    console.log('promise1'); //4
    resolve();
  }).then(function () {
    console.log('promise2');//7
  });
  console.log('script end'); //5



// 执行结果：

//   promise.js:10 script start
//   promise.js:2 async1 start
//   promise.js:7 async2
//   promise.js:19 promise1
//   promise.js:24 script end
//   promise.js:4 async1 end
//   promise.js:22 promise2
//   promise.js:13 setTimeout

// JavaScript的事件循环遵循以下优先级：
// 1.首先执行所有同步代码 （执行栈）
// 2.然后执行所有微任务 （Microtasks Queue）
// 3. 最后执行宏任务 （Macrotasks Queue）

// ### 逐行解析执行过程
// 1.script start （行10）：执行全局同步代码的第一条输出
// 2. async1 start （行2）：调用async1()函数，执行其内部的同步代码
// 3. async2 （行7）：async1内部调用async2()，执行其同步代码
// 4. promise1 （行19）：创建Promise对象，执行其构造函数中的同步代码
// 5. script end （行24）：执行全局最后一条同步代码
// 此时同步代码执行完毕，开始执行微任务队列：
// 6. async1 end （行4）：async2()返回的Promise完成后，执行async1中await后面的代码
// 7. promise2 （行22）：Promise构造函数中的resolve()触发then回调，作为微任务执行
// 微任务队列清空后，开始执行宏任务队列：
// 1.setTimeout （行13）：执行setTimeout的回调函数
