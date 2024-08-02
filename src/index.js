module.exports = function toReadable (number) {
  let numberToReadable = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
    100: "hundred",
    };

    let result = "";

    if (number <= 20){
        result = numberToReadable[number]
        return result;
    }
    else if (number < 100){
        tens = Math.floor(number / 10) * 10;
        result = numberToReadable[tens];
        if (number % 10 != 0){
            result += " " + numberToReadable[number % 10];
        }
        return result;
    }
    else {
        hundreds = Math.floor(number / 100);
        result = numberToReadable[hundreds] + " hundred";
        tens = number - hundreds * 100;
        if (tens === 0){
            return result;
        }
        if (tens < 21){
            result += " " + numberToReadable[tens];
        }
        else {
            result += " " + numberToReadable[Math.floor(tens / 10) * 10];
            if (number % 10 != 0){
                result += " " + numberToReadable[number % 10];
            }
        }
        return result;
    }
}
