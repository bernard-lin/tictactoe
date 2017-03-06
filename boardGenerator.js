var boardGenerator = function(someBoard){
	for(var i=0; i<someBoard.length; i++){
	 console.log(' '+someBoard[i].join(' | '))
	 if(i <=1){
	 	console.log('___|___|___')
	 } else {
	 	console.log('   |   |   ')
	 }
	}

}

module.exports = boardGenerator