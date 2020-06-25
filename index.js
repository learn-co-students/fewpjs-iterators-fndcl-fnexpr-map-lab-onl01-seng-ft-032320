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
    let arr = []
    tutorials.map(stc => arr.push(stc.split(' ').map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1)
        }).join(' ')))
        // stc.charAt(0).toUpperCase() + stc.slice(1

    return arr
}