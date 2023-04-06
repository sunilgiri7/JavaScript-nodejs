// 1. Deposite some money
// 2. Determine number of line to bet on
// 3. Collect bet ammount
// 4. Spin slot machine
// 5. Check if the user win
// 6. Give the user their winning
// 7. play again

// function deposite(){

// }

const prompt = require('prompt-sync')();

const ROWS = 3;
const COLS = 3;

const symbolCount = {
    'A': 2,
    'B': 4,
    'C': 6,
    'D': 8
}

const symbolValue = {
    'A': 5,
    'B': 4,
    'C': 3,
    'D': 2
}

const deposite = () => {
    while (true) {
        const depositeAmount = prompt("Enter a deposite amount: ");
        const numberDepositeAmount = parseFloat(depositeAmount);

        if (isNaN(numberDepositeAmount) || numberDepositeAmount <= 0) {
            console.log('Invalid deposite Amount, try again!!');
        } else {
            return numberDepositeAmount;
        }
    }
};

const getNumberOfLines = () => {
    while (true) {
        const Lines = prompt("Enter the number of line to bet on (1-3): ");
        const numberOfLines = parseFloat(Lines);

        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log('Invalid number of line, try again!!');
        } else {
            return numberOfLines;
        }
    }
};

const getbet = (balance, Lines) => {
    while (true) {
        const bet = prompt("Enter a bet per line: ");
        const numberBet = parseFloat(bet);

        if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / Lines) {
            console.log('Invalid number of bet, try again!!');
        } else {
            return numberBet;
        }
    }
};

const spin = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries(symbolCount)) {
        for (let i = 0; i < count; i++) {
            symbols.push(symbol);
        }
    };

    const reels = [];
    for (let i = 0; i < COLS; i++) {
        reels.push([])
        const reelSymbols = [...symbols];
        for (let j = 0; j < ROWS; j++) {
            const randomIndex = Math.floor(Math.random() * reelSymbols.length);
            const selectedSymbol = reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex, 1);
        }
    }
    return reels;
};

const transpose = (reels) => {
    const rows = [];
    for (let i = 0; i < ROWS; i++) {
        rows.push([])
        for (let j = 0; j < COLS; j++) {
            rows[i].push(reels[j][i]);
        }
    }
    return rows;
};

const printRows = (rows) => {
    for (const row of rows) {
        let rowString = ""
        for (const [i, symbol] of row.entries()) {
            rowString += symbol
            if (i != row.length - 1) {
                rowString += " | ";
            }
        }
        console.log(rowString);
    }
};

const getWinning = (rows, bet, Lines) => {
    let winnings = 0;

    for (let row = 0; row < Lines; row++) {
        const symbols = rows[row];
        let allSame = true;

        for (const symbol of symbols) {
            if (symbol != symbols[0]) {
                allSame = false;
                break;
            }
        }
        if (allSame) {
            winnings += bet * symbolValue[symbols[0]];
        }
    }
    return winnings;
};

const game = () => {
    let balance = deposite();
    while(true){
        console.log("You have a balance of $" + balance)
        const numberOfLines = getNumberOfLines();
        const bet = getbet(balance, numberOfLines);
        balance -= bet * numberOfLines;
        const reels = spin();
        const rows = transpose(reels);
        printRows(rows);
        const winnings = getWinning(rows, bet, numberOfLines);
        balance += winnings;
        console.log("You won, $" + winnings.toString());

        if (balance<=0){
            console.log("You ran out of money!");
            break;
        }
        const playAgain = prompt("Do you want to play again(y/n) ?")
        if (playAgain != 'y') break;
    }
};

game();
// console.log(bet)