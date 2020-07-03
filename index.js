const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


const titleCased = () => {
  let newArr = tutorials.map(tutorial => {
    return tutorial.split(" ").map(word => {
      return word.replace(word.charAt(0), word.charAt(0).toUpperCase())
    }).join(" ")
  })
    // map(word => {
    //   newArr.push(word.replace(word.charAt(0), word.charAt(0).toUpperCase()))
    // })

  return newArr
}
