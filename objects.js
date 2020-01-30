let gameNumber = prompt("Please enter a number below and I will tell you about a favorite game of mine", "Any number between 1 and 5")
const gamesList = [
    {title: 'Gin', type: 'card game', numberOfPlayers: '1-4 people'},
    {title: 'Crash Bandicoot', type: 'video game', numberOfPlayers: '1 person'},
    {title: 'Catan', type: 'board game', numberOfPlayers: '1-4 people'},
    {title: 'Solitaire', type: 'card game', numberOfPlayers: '1 person'},
    {title: 'Cards Against Humanity', type: 'card game', numberOfPlayers: '1-6 people'}
]
console.log(gamesList); 
alert('You have selected "' + gamesList[gameNumber].title + '"!' + ' It is a ' + gamesList[gameNumber].type + ', and ' + gamesList[gameNumber].numberOfPlayers + ' can play.')
