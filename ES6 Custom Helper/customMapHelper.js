function customMap(arrName,callBackMethod){
    var arr2=[];
    for(var i=0;i<arrName.length;i++){
        var value = callBackMethod(arrName[i]);
        arr2.push(value);
    }
    return arr2
  }

var arr = [1,2,3,4,5,6]
function multiply(num){
    return 2*num
}
var returnArray = customMap(arr,multiply);
console.log(arr);
console.log(returnArray);