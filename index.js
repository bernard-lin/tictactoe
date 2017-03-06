const readline = require('readline');
const boardGenerator = require('./boardGenerator')
const boardSolvers = require('./boardSolvers')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let board = [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']]
// var board = [['x','x','x'],['x','x','x'],['x','x','x']]
// var board = [['x',' ',' '],['x',' ',' '],['x'," "," "]]
let start = true

let p1Name = null;
let p2Name = null;

    rl.question('Welcome to Tic Tac Toe! Player One, what is your name? ', (answer) => {
  		console.log(`Hi ${answer}!`);
  		p1Name = answer;
  	 	rl.question('Player Two, what is your name? ', (answer2) => {
  			console.log(`Hi ${answer2}!`);
  			p2Name = answer2;
  	   		console.log('Let\'s get started! Here is your current board:')
  	    	boardGenerator(board)
		});
    })
    
    boardSolvers(board)


