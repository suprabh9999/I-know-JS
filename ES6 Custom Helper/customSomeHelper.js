function customSomeHelper(arr,callBackMethod){
    var value;
    for(var i=0;i<arr.length;i++){
        value = callBackMethod(arr[i]);
        if(value){
            return value;
        }
    }
    return false;
  }

  var arr = [{name:'tanu',likes:100,comments:400}
    ,{name:'suprabh',likes:100,comments:500}
    ,{name:'juhi',likes:300,comments:200}
    ,{name:'disha',likes:87,comments:85}
    ,{name:'rupitha',likes:200,comments:500}
    ,{name:'neha',likes:10,comments:40}];

function someHelper(value){
    return (value.likes > 5 && value.comments > 30);

}
var result = customSomeHelper(arr,someHelper);
console.log(result);

