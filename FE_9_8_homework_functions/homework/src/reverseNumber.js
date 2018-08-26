function reverseNumber (number) {
    let reversedNumber = 0;
    const spetialNumber = 10; 

    while (number !== 0) {
    reversedNumber *= spetialNumber;
    reversedNumber += number % spetialNumber;
    number -= number % spetialNumber;
    number /= spetialNumber;
    }
       
    return reversedNumber;
}
