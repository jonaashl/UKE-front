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

    let result = 0
    let previousCharValue = 0

    // loop over the user input called "romanNumeral"
    for (let i = romanNumeral.length - 1; i >= 0; i--) {
        const currentCharValue = romanNumeralMap[romanNumeral[i]]

        if (currentCharValue >= previousCharValue) {
            result += currentCharValue
        } else {
            result -= currentCharValue
        }
        previousCharValue = currentCharValue
    }

    return result
}

export default RomanNumeralConverter
