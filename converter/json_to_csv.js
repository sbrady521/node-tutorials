const readline = require('readline')
const fs = require('fs')
const path = require('path')

const regexKey = /"(\w+)"\s*:\s*"?\w+"?/
const regexValue = /:\s*"?(\w+)"?/
const regexObjStart = /"(\w+)":\s*\{/
const regexObjEnd = /\}/

let jsonObj = {}
let currentLabel = ''

const myInterface = readline.createInterface({
  input: fs.createReadStream(path.join(__dirname, '/test.json'))
})

myInterface.on('line', function (line) {
  const matchKey = line.match(regexKey)
  const matchValue = line.match(regexValue)
  const matchRegexObjStart = line.match(regexObjStart)
  const matchRegexObjEnd = line.match(regexObjEnd)

  if (matchRegexObjStart) {
    currentLabel = matchRegexObjStart[1]
    jsonObj[currentLabel] = []
  } else if (matchRegexObjEnd) {

  } else {
    if (matchKey && matchValue) {
      let newObj = {}
      newObj[matchKey] = matchValue
      jsonObj[currentLabel].push(newObj)
    }
  }

  matchKey && console.log(`Matched Key: ${matchKey[1]}`)
  matchValue && console.log(`Matched Value: ${matchValue[1]}`)
  matchRegexObjStart && console.log(`Matched Object Start: ${matchRegexObjStart[1]}`)
  matchRegexObjEnd && console.log(`Matched Object End:${matchRegexObjEnd}`)

  console.log('')
})
