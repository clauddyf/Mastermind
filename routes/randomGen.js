const express = require('express');
const router = express.Router();
const fetch = require('node-fetch')

router.get('/', function(req, res, next) {
  const url = 'https://www.random.org/integers/?num=5&min=0&max=7&col=1&base=10&format=plain&rnd=new';
  fetch(url)
  .then(res => res.text()) // the api response was in plain/html format, so I made a res.text() promise
  .then(body => 
    // once i grabbed the body, I then noticed i had to figure out some way
    // to parse through an html file and push the integers into an array.
    // I realized that body had a length value, so I decided to iterate through
    // the body, and push all the values into an array.
    // I then noticed that there were line breaks on the odd indices, 
    // so I made a conditional to only push the even indices into the array.
  {let arr =[];
  for (let i = 1; i <(body.length); i++){
    if (i % 2 === 0){
      arr.push((body[i]));
    }
  }
  return (arr)
 }
  )
  .then(body => res.send(body)) //And then I fullfilled the promise and sent that formatted array body
});


module.exports = router;
