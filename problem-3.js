function  bestTeam( player1, player2 ) {
    if(typeof player1 !== 'object' || typeof player2 !== 'object' || typeof player1.name !== 'string' || typeof player2.name !== 'string' || typeof player1.foul !== 'number' || typeof player1.cardY !== 'number' || typeof player1.cardR !== 'number' || typeof player2.foul !== 'number' || typeof player2.cardY !== 'number' || typeof player2.cardR !== 'number' )
    {
        return "Invalid";
    }

    else if((player1.foul+player1.cardY+player1.cardR)<(player2.foul+player2.cardY+player2.cardR))
    {
        return player1.name;
    }

    else if((player1.foul+player1.cardY+player1.cardR)>(player2.foul+player2.cardY+player2.cardR))
    {
        return player2.name;
    }

   else
    {
          return "Tie";
    }
}

const player1 = { name: "Brazil", foul: 5, cardY: 1, cardR: 0 };
const player2 = { name: "Argentina", foul: 7, cardY: 0, cardR: 0 };

console.log(bestTeam(player1,player2));


// Sample Input-output:

// { name: "Brazil", foul: 5, cardY: 1, cardR: 0 },
// { name: "Argentina", foul: 7, cardY: 0, cardR: 0 }
// Brazil

// { name: "Germany", foul: 12, cardY: 0, cardR: 0 },
// { name: "Sweden", foul: 7, cardY: 4, cardR: 1 }
// Tie

// { name: "Germany", foul: 10, cardY: 1, cardR: 1 },
// { name: "France", foul: 10, cardY: 2, cardR: 1 }
// Germany

// { name: "Germany", foul: 10, cardY: 1, cardR: 1 },"France"
// Invalid

