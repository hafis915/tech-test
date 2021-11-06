const binaryToDecimal = (n) => {
  let strNum = String(n)
  let dec_value = 0
  for (let i = strNum.length - 1; i >= 0; i--) {
    dec_value += Number(strNum[(strNum.length - 1) - i]) * (2 ** i)
  }
  return dec_value
}


const decimalToBinary = (n) => {
  // let num = n
  let quotient = n
  let remainder
  let binary = ""
  while (quotient > 0) {
    remainder = quotient % 2
    console.log(remainder, "<<<< Remainder")
    console.log(quotient, "<<< OLD")
    quotient = (quotient - remainder) / 2
    console.log(quotient, "NEW")
    binary += remainder
    // quotient = num
  }

  return Number(binary.split("").reverse().join(""))
}

const isPolindrome = (str) => {
  let reverseStr = str.split("").reverse().join("")
  return str === reverseStr
}

const longestPolindrome = (word) => {
  console.log("=========== WORD ===========")
  console.log(word)
  let str = word
  let polindromeCheck = ""
  let polindromeWord = ""
  for (let i = 0; i < str.length; i++) {
    if (word[i] != " ") {
      // console.log(word[i])
      polindromeCheck += word[i]
      // console.log(polindromeCheck)
      // console.log(isPolindrome(polindromeCheck), "<< CHECK")
      if (isPolindrome(polindromeCheck)) {
        console.log(" BETUL ", polindromeCheck)
        // console.log(polindromeCheck.length, polindromeWord.length)
        if (polindromeCheck.length > polindromeWord.length) {
          polindromeWord = polindromeCheck
          console.log(polindromeWord)
        }
      }
    }
  }
  return polindromeWord
}

// console.log(longestPolindrome(" kasur rusak"), "<< HASIL")

const answerForNumberTwo = (word) => {
  let strArr = word.split("")
  let polindromeWord = ""

  while (strArr.length > 0) {
    let str = strArr.join("")
    console.log(str, "<<<< STR")
    let newPolindromeWord = longestPolindrome(str)
    console.log(newPolindromeWord, "<<<< Polindrom")
    if (newPolindromeWord.length > polindromeWord.length) {
      polindromeWord = newPolindromeWord
    }
    strArr.shift()
  }
  return polindromeWord
  // console.log(polindromeWord, "<<< HASIL")
}

const soal1a = binaryToDecimal(101101)
const soal1b = decimalToBinary(19)
const saol2a = answerForNumberTwo("di rumah saya ada kasur rusak")
// console.log(answerForNumberTwo("di rumah saya ada kasur rusak"))
// binaryToDecimal(101101)
// console.log(decimalToBinary(19))
