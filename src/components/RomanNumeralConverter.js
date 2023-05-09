const RomanNumeralConverter = ({ romanNumeral }) => {
    const romanNumeralMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }
    // instialize values
    let result = 0
    let previousCharValue = 0

    // loop over the user input called "romanNumeral"
    for (let i = romanNumeral.length - 1; i >= 0; i--) {
        const currentCharValue = romanNumeralMap[romanNumeral[i]] // get the value of the current character we are looping over
        // if the current value is greater or equal to the previous value, add it to the result variable
        if (currentCharValue >= previousCharValue) {
            result += currentCharValue
        } else {
            result -= currentCharValue // if the current value is less than the previous value, subtract current value from result.
        }
        previousCharValue = currentCharValue // update value
    }

    return result
}

export default RomanNumeralConverter
