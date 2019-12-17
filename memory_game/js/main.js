//console.log("up and Running!");

const cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage : 'images/queen-of-hearts.png'
	},
	{
		rank : "queen",
		suit : "diamonds",
		cardImage : 'images/queen-of-diamonds.png'
	},
	{
		rank : "king",
		suit : "hearts",
		cardImage : 'images/king-of-hearts.png'
	},
	{
		rank : "king",
		suit : "diamonds",
		cardImage : 'images/king-of-diamonds.png'
	}
];
const cardsInPlay = [];
function checkForMatch(){
	if(cardsInPlay.length === 2){
		if(cardsInPlay[0] === cardsInPlay[1]){
			var displMsg = document.getElementById('msg');
			displMsg.innerHTML =  '<h1>WINNER</h1>';
			console.log("You found a match!");
		}else{
			var displMsg = document.getElementById('msg');
	 	//displMsg.setAttribute('class', 'visible');
	 	displMsg.innerHTML =  '<h4>Sorry try again</h4>'
			console.log("Sorry, try again.");
		}

	};
}
function flipCard(){
	let cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage);
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);
	checkForMatch();
};



function createBoard(){
	var message = document.createElement('h1');
	message.setAttribute('id', 'msg');
	//message.setAttribute('class', 'hidden');
	//message.textContent = 'WINNER';
	document.getElementById('game-board').appendChild(message);

	for( var i = 0; i < cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	};
};

createBoard();
