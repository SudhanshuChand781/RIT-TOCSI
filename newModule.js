function doSomething(){
    console.log("*********** doSomething called from newModule.js ************")
}
function againdoSomething(){
    console.log("********* again dosomething**********************")
}
//CRUD =Create Read Update Delete
let arr=[];
function create(element){
    arr.push(element);
    return arr;
}
function readFun(){
    return arr;
}
function updateFun(index,element){
 arr[index]=element;
 return arr;
}
function deleteFun(index){
arr.splice(index,1);
return arr;
}
module.exports={
    doSomething,
    againdoSomething,
    create,
    readFun,
    updateFun,
    deleteFun
};