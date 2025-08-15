function totalFine( fare ) {
    if(fare<=0||typeof fare !== 'number'){
        return "Invalid";
    }
    return fare+(fare*(20/100))+30;  
}


function  onlyCharacter( str ) {
      if(typeof str !== 'string'){
        return "Invalid";
      }
      
    return str.split(' ').join('').toUpperCase();
}


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


function  isSame(arr1 , arr2 ) {
    if(!Array.isArray(arr1) || !Array.isArray(arr2)){
        return "Invalid";
    }

   else if(arr1.length!==arr2.length){
        return false;
    }
    
  for(let i=0;i<arr1.length;i++){
    if(arr1[i] !== arr2[i]){
        return false;
    }
}
return true;
}


function  resultReport( marks ) {
    if(!Array.isArray(marks)){
        return "Invalid";
    }
    else if(marks.length===0){
        return { finalScore: 0 , pass: 0, fail: 0 };
    }

   let sum=0, pass=0, fail=0;
   for(const mark of marks){
    if(mark<40){
        fail++;
    }
    else {
        pass++;
    }
    sum=sum+mark;
    
   }
   const avg=(sum/marks.length);

  return {
    finalScore: Math.round(avg),
    pass: pass,
    fail: fail
  };
}







