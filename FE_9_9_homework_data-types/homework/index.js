let findType = function (param){
    return typeof param;
}

function forEach(arr, displayFunction) { 
    for ( let i=0; i<arr.length; i++){
        arr[i] = displayFunction(arr[i]);
    }
}


function map(arr, calculationFunction){
    let processedArr = [];
    forEach(arr, function(el){
        processedArr.push(calculationFunction(el));
    });
    return processedArr;
}


function filter(arr, filtrationFunction){
    let processedArr = [];
    forEach(arr, function(el){
        if(filtrationFunction(el)){
            processedArr.push(el);
        }        
    });
    return processedArr;
}

function getAdultAppleLovers(data){
    let filteredArr = filter(data, function(el) {
        return el.age > 18 && el.favoriteFruit === 'apple'
    });
    return map(filteredArr, function(el) {
        return el.name
    });
}

  function keys(variable){
        return Object.keys(variable);
  }

  function values(variable){
    return Object.values(variable);
}

function showFormattedDate(date){
    let strArray=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let d = date.getDate();
    let m = strArray[date.getMonth()];
    let y = date.getFullYear();

    return `It is ${d} of ${m}, ${y}`;
}
