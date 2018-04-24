function customReduceHelper(arr,callBackMethod,element){
    var accumulator=0;
    for(var i=0;i<arr.length;i++){
        if(element === undefined){
            accumulator = callBackMethod(accumulator,arr[i]);
            if(accumulator === 0 ){
                accumulator = callBackMethod(accumulator=1,arr[i]);
            }
        }
        else{
            accumulator = callBackMethod(element,arr[i]);
            if(accumulator === 0 ){
                accumulator = callBackMethod(accumulator=1,arr[i]);
            }
        }
        
    element = undefined;
    }
    return accumulator;
  }

  var arr = [1,2,5,6,7];
  function reducer(accumulator,currentValue){
       return accumulator / currentValue;
  }
  var output = customReduceHelper(arr,reducer,5);
  console.log(output);