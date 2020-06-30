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

// 1 Function code refractored from 2 function solution

function titleCased() {
  return tutorials.map(function (tutorial) {

    let singleTutorialArray = tutorial.split(' ')

    
    let capitalizedTutorial = singleTutorialArray.map(function (word) { 
   
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    let final = capitalizedTutorial.join(' ')
 
    return final
  });
}


//2 Function code that worked in repl.it

// function titleCased(str) {
//   return str.toLowerCase().split(' ').map(function(word) {return (word.charAt(0).toUpperCase() + word.slice(1));      }).join(' ');
// }

// let result = tutorials.map(tutorial => titleCased(tutorial));
