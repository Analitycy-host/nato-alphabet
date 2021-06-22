async function convert(string: string, returnString?: boolean) {
    let stringLowerCase = string.toLowerCase()
    let stringRemoveExtraSpaces = stringLowerCase.replace(/ {2,}/gm, " ").replace(/ *$/gm, "")
    let wordSplit = stringRemoveExtraSpaces.split(" ")
    let wordSet: Array<Array<string>> = []
    wordSplit.forEach(word => {
        let stringSplit = word.split("")
        let returnArray: string[] = []
        stringSplit.forEach(charToFind => {
            let alphabetIndex = chars.findIndex(char => char == charToFind)
            returnArray.push(natoAlphabet[alphabetIndex])
        })
        wordSet.push(returnArray)
    })
    if (returnString) {
        let stringToReturn = ""
        wordSet.forEach(word => {
            let preparedWord = ""
            word.forEach(char => {
                preparedWord += `${char} `
            })
            stringToReturn += `${preparedWord}  `
        })
        return stringToReturn
    } else {
        return wordSet
    }
}

export default convert

let chars = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
]

let natoAlphabet = [
    "Alpha",
    "Bravo",
    "Charlie",
    "Delta",
    "Echo",
    "Foxtrot",
    "Golf",
    "Hotel",
    "India",
    "Juliett",
    "Kilo",
    "Lima",
    "Mike",
    "November",
    "Oscar",
    "Papa",
    "Quebec",
    "Romeo",
    "Sierra",
    "Tango",
    "Uniform",
    "Victor",
    "Whiskey",
    "Xray",
    "Yankee",
    "Zulu"
]