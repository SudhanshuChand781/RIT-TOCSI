const {doSomething,againdoSomething,create,readFun,updateFun,deleteFun} = require(`./newModule.js`)


console.log("js test using node")
//doSomething();
//againdoSomething();
console.log(create(1));
console.log(create(10));
console.log(readFun());
console.log(updateFun(0,100));
console.log(deleteFun(1));