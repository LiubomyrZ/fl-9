function getClosestToZero(){
    let arr = [];
    for( let i = 0; i < arguments.length; i++){
      arr[i] = Math.abs(arguments[i]);    
    }
    return Math.min.apply(Math, arr);
  }
  