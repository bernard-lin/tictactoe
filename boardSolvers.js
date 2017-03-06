var boardSolvers = function(someBoard){
	for(var i = 0; i<someBoard.length; i++){
		for(var j =0; j<someBoard.length; j++){
			if(someBoard[i][j] === someBoard[i][j+1] && someBoard[i][j] === someBoard[i][j+2] && someBoard[i][j] !== " "){
				console.log(true) ;
			}
			if(someBoard[i][j] === someBoard[i+1][j] && someBoard[i][j] === someBoard[i+1][j] && someBoard[i][j] !== " "){
				console.log(true) ;
			}
		}
	}
	console.log(false)
}

module.exports= boardSolvers






