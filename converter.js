const input = require('sync-input');

function commandInput() {
    do {
        console.log("What do you want to do?\n1-Convert currencies 2-Exit program")
        let command = input();
        if (command === "1" || command === "2") {
            return command;
        } else {
            console.log("Unknown input");
        }
    } while (command !== "1" && command !== "2");
}

function currencyVerification(currencyValue) {
    let currency = String(currencyValue).toUpperCase();
    if (currency in currencies) {
        return currency
    } else {
        console.log("Unknown currency");
    }
}

function amountVerification(amount) {
    if (isNaN(amount)) {
        console.log("The amount has to be a number");
    } else {
        if (amount < 1) {
            console.log("The amount cannot be less than 1");
        } else {
            return amount;
        }
    }
}

console.log("Welcome to Currency Converter!")
const currencies = {
    USD: 1,
    JPY: 113.5,
    EUR: 0.89,
    RUB: 74.36,
    GBP: 0.75
}

for (let key in currencies) {
    console.log(`1 USD equals ${currencies[key]} ${key}`);
}


function main() {
    command = commandInput();
    if (command === "2") {
        console.log("Have a nice day!")
        return command;
    }

    console.log("What do you want to convert?\nFrom: ");
    let originalCurrency = currencyVerification(input());
    if (originalCurrency === undefined) {
        return
    }
    console.log("To: ")
    let goalCurrency = currencyVerification(input());
    if (goalCurrency === undefined) {
        return
    }
    let amount = amountVerification(input("Amount: "));

    let currencyInUSD = 1 / currencies[originalCurrency];
    let result = amount * currencyInUSD * currencies[goalCurrency];
    console.log(`Result: ${amount} ${originalCurrency} equals ${result.toFixed(4)} ${goalCurrency}`)

    return command;
}

let command;

do {

    command = main();
} while (command !== "2");