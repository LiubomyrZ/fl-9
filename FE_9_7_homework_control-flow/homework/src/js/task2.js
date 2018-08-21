if (confirm('Do you want to play a game?')) {
    let maxRange = 5;
    const topattemptPrize = 10;
    const middleattemptPrize = 5;
    const negativeNumber = -1;
    let attemptPrize = [topattemptPrize, middleattemptPrize, 2];
    let sumPrize = 0;
    let continueGame = true;
    let rangeMultiplier = 1;
    let prizeMultiplier = 1;
    do {
        var attemptCount = 3;
        var randomNumber = Math.floor(Math.random() * maxRange);

        for (var i = 0; i < attemptCount; i++) {
            
            var numberPrompt = parseInt(prompt(`Enter a number in range [ 0 ; ${maxRange} ] 
            Attempts left: ${attemptCount-i}
            Total prize: ${sumPrize} $
            Posible prize on carrent attempt: ${attemptPrize[i] * prizeMultiplier} $ `));
            
            if (randomNumber === numberPrompt) {
                sumPrize += attemptPrize[i] * prizeMultiplier;
                attemptCount = negativeNumber;
                continueGame = confirm(`Congratulation!
                Your prize is: ${sumPrize} $   
                Do you want to continue?`);
                if (continueGame) {
                    rangeMultiplier *= 2;
                    prizeMultiplier *= 3;
                    maxRange *= rangeMultiplier;
                }
            }
        }
        if (attemptCount > 0) {
            continueGame = false;
        }
    }
    while (continueGame);
    alert(`Thank you for a game. Your prize is: ${sumPrize}$`);
} else{
    alert(`You did not become a millionaire, but can`);
}