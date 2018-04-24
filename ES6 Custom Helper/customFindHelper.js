function customFindHelper(arrName,callBackMethod){
    for(var i=0;i<arrName.length;i++){
      if(callBackMethod(arrName[i])){
          return arrName[i];
      }
    }
    return undefined;
  }

var arr = ['suprabh','ajay','ashish','preeti','juhi','suprabh'];

function findHelper(value){
    return value.length === 40;
}
var output = customFindHelper(arr,findHelper);
console.log(output);