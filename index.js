const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
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
  return tutorials.map((element) => {
    let wordArr = element.split(" ");
    let changedArr = wordArr.map((element) => {
      let start = element.slice(0,1).toUpperCase();
      let rest = element.slice(1,element.length);
      return start + rest;
    });
    
    return changedArr.join(" ");
  });
}
