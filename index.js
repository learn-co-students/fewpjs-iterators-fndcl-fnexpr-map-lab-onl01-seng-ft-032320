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

const titleCased = (input) => {
  return tutorials.map( line => {
    let tokens = line.split(' ')
    let capitalizedTokens =
      tokens.map( token => token.charAt(0).toUpperCase() + token.slice(1) )
    let response = capitalizedTokens.join(' ')
    return response
  })
}

// function titleCased() {
//   let splits = [];
//   for (let i = 0; i < tutorials.length; i ++) {
//     let split = tutorials[i].split(" ");
//     for (let j = 0; j < split.length; j ++) {
//       split[j] = split[j].charAt(0).toUpperCase() + split[j].slice(1);
//     }
//     splits[i] = split;
//   }
//   let tutorialss = [];

//   for (let i = 0; i < splits.length; i ++) {
//     tutorialss[i] = splits[i].join(" ");
//   }
//   return tutorialss;
// }
