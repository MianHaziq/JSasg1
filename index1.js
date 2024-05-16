let x = Number(prompt("Enter Number of inputs"));
let even = 0, odd = 0, positive = 0, negative = 0, zero = 0, sum = 0, noofstr = 0;

function calculate(x) {
    for (let i = 1; i <= x; i++) {
        let input = prompt(`Enter input ${i}`);
        let num = Number(input);

        if (isNaN(num)) {
            noofstr++;
        } else {
            sum += num;

            if (num === 0) {
                zero++;
            } else if (num > 0) {
                positive++;
            } else {
                negative++;
            }

            if (num % 2 === 0) {
                even++;
            } else {
                odd++;
            }
        }
    }

    console.log(`Total Number of Inputs: ${x}`);
    console.log(`Total Number of Zeros: ${zero}`);
    console.log(`Total Number of Even: ${even}`);
    console.log(`Total Number of Odd: ${odd}`);
    console.log(`Total Number of Positive: ${positive}`);
    console.log(`Total Number of Negative: ${negative}`);
    console.log(`Total Number of Strings: ${noofstr}`);
    console.log(`Total Sum of Inputs: ${sum}`);
}

calculate(x);
