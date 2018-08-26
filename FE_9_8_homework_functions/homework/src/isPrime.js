function isPrime(n){
    const primeNumber = 2;
    if (n===1){
        return false;
    }else if(n === primeNumber){
        return true;
    }else{
        for(let i = 2; i < n; i++){
            if(n % i === 0){
                return false;
            }
        }
        return true;  
    }
}
