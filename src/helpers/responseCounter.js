function responseCount(data,responses){
    var count=0;
    for(var i=0;i<responses.length;i++){
         if(responses[i] !== null){
             count=count+1;
         }
    }
    console.log(count)
    return count;
}







var Counter = {
    responseCount : responseCount,
}

export default Counter;