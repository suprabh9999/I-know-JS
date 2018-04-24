
function customForEach(arrName,sumMethod){
  for(var i=0;i<arrName.length;i++){
    sumMethod(arrName[i]);
  
  }
}


let sumNum=0;
var number = [1,2,3,4,5,6,7,8,9];

function sumMethod(value)
{
  sumNum=sumNum+value;
}

customForEach(number,sumMethod);
console.log(sumNum);



