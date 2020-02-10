![](https://github.com/clauddyf/Mastermind/blob/master/public/stylesheets/Screenshot%20from%202020-02-09%2017-28-07.png)
# Mastermind
Mastermind is a game in which you guess a secret code consisting of a series of eight numbers. Each guess results in feedback, narrowing down the possibilities of the code. You win by guessing the secret code in fewer than ten attempts.

![](https://github.com/clauddyf/Mastermind/blob/master/public/stylesheets/Screenshot%20from%202020-02-09%2018-14-06.png)

## Getting Started: How to play locally
1. Create folder in Desktop

 `cd Desktop`
 
 `mkdir Mastermind`
 
 `cd Matermind`

2. Clone the project or download zip

  `git clone https://github.com/clauddyf/Mastermind.git`
  
3. Get into project folder

 `cd Mastermind`
  
3. Install dependencies

 `npm install`
 
 `cd frontend`
 
 `npm install`
 
 `cd ..`
 
4. Run the concurrent servers

 `npm run play`


## Features
### Backend API call
I implemented my backend using Express. In order to use this api through two servers(frontend and backend), I had to enable cross origin reference sharing(app.use.cors()). I then had to setup a route for the random number generator backend route.

![](https://github.com/clauddyf/Mastermind/blob/master/public/stylesheets/Screenshot%20from%202020-02-09%2017-48-00.png) 
In order to genarate an array of four random numbers from 0 to 7, I had to use Random.Org's api uri 'https://www.random.org/integers/?num=5&min=0&max=7&col=1&base=10&format=plain&rnd=new' with the parameters in the url being min=0&max=7(because we want numbers 0-7), and the num param equating to 5. The reasoning behind this since the api response format is in plain/html, I used .text() to take in the response and return a promise that resolves with a text object and once I had the text object, I noticed it had a length property to it, and that the integers and the line breaks had indices. I also noticed that the 0th and 1st indices were line breaks and a bracket (respectively), so I decided to push all even indices into the array. Based off the algorthm, the first random number would be excluded, so I decided to make the call for five integers.

I then had to make sure it is being used on the app, so I required the route in a variable (var randomRouter = require("./routes/randomGen")) and then made sure i used it on the app app.use("/randomGen", randomRouter). 

![](https://github.com/clauddyf/Mastermind/blob/master/public/stylesheets/Screenshot%20from%202020-02-09%2017-45-57.png)

### Making backend call and Starting game

The initial state consists of the compNumArr, playerInput, try, error, status, lastMove, pastGuesses, and score. 

![](https://github.com/clauddyf/Mastermind/blob/master/public/stylesheets/Screenshot%20from%202020-02-09%2017-49-46.png)

We then fetch our backend route 'localhost:9000/randomGen' to get a response, we then format it to a javascript object(res.json()), and we grab that data, and set it to CompNumArr, and set the rest of the state, most importantly, the status to 'play'. 

![](https://github.com/clauddyf/Mastermind/blob/master/public/stylesheets/Screenshot%20from%202020-02-09%2017-50-51.png)

### Match Algorithms/Frontend
#### Score
In order to implement a score keep 

![](https://github.com/clauddyf/Mastermind/blob/master/public/stylesheets/Screenshot%20from%202020-02-09%2017-30-00.png)

I created a simple method that subtracts the tries from 10, and multiplies it by 10

![](https://github.com/clauddyf/Mastermind/blob/master/public/stylesheets/Screenshot%20from%202020-02-09%2017-50-40.png)

#### Matching
To check if the player had an exact match, I iterate through the players guess and check to see if element at that index matches the computer generated array. If it does, I then add it to a count, which is then used to change the 'lastMove' state. I then used an algorithm to check the if the tries are equal to 9(9 because the try count starts at 0), and if so, we set the state of status to 'fail'. We also set the status to 'win' if the count is equal to the length of the computer array.

![](https://github.com/clauddyf/Mastermind/blob/master/public/stylesheets/Screenshot%20from%202020-02-09%2017-30-05.png)

![](https://github.com/clauddyf/Mastermind/blob/master/public/stylesheets/Screenshot%20from%202020-02-09%2017-52-58.png)

#### Keeping track of the players guesses
I implemented a method to push the players previous guesses to an array and save it to the state when the status is 'play' 

![](https://github.com/clauddyf/Mastermind/blob/master/public/stylesheets/Screenshot%20from%202020-02-09%2017-53-49.png)

![](https://github.com/clauddyf/Mastermind/blob/master/public/stylesheets/Screenshot%20from%202020-02-09%2017-30-11.png)

### Error Handler
In the inRange function above, we return an array in which the first index is a boolean indicating wether all of the players inputs are in the range, and the second index is a boolean checking to see if the players input length is equal to 4. And in the error handler, we send an error message based on the true/false combination of the array 

![](https://github.com/clauddyf/Mastermind/blob/master/public/stylesheets/Screenshot%20from%202020-02-09%2017-53-24.png)

### Reset Game
There is a conditional for a 'win', 'lose', and 'play.In case the player wanted a fresh start while playing a game, I set up a coditional that would reset to the initial state. If the player wins, we'd set everything back to its intitial state, except the score, which would be the previous state of the score, plus the score of the current game. And if the player lost, we'd also reset the state, except the lastMove.

![](https://github.com/clauddyf/Mastermind/blob/master/public/stylesheets/Screenshot%20from%202020-02-09%2017-50-20.png)


## Technologies
* Express
* React
* Javascript
* HTML/5
* CSS
* Google Fonts
* Pexels.com(splash photo)

## Future Implementations
* Create a database to hold the high score. The table would consist of a Name column, and a score column
* Implement a difficulty leveler that changes the parameters of the api url in the backend
* Allow User Authorization in order to keep history of user scores
* Data visualization based on the users code
* I'd like to split the game_play file into more components
* Create a component using hooks.

