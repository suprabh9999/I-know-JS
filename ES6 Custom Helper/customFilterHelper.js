function customMap(arr,callBackMethod){
    var arr2=[];
    for(var i=0;i<arr.length;i++){
        var value = callBackMethod(arr[i]);
        if(value){
            arr2.push(arr[i]);
        }
        
    }
    return arr2;
  }


  var arr = [{name:'suprabh',dept:'it',salary:500},{name:'jeet',dept:'medical',salary:100},
                {name:'shivam',dept:'it',salary:550}, {name:'mohit',dept:'agriculture',salary:300}];

function callBackMethod(arrItem){
    return (arrItem.dept === 'it' && arrItem.salary>200);
}
var arr2 = customMap(arr,callBackMethod);

console.log(arr2);