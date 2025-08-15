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

const marks = [98, 87, 67, 91, 92, 33, 87];
console.log(resultReport(marks));


// Sample Input-output

// []                             { finalScore: 0 , pass: 0, fail: 0 }
//                                //explore   why  you got NaN 😉

// [98, 87, 67, 91, 92, 33, 87]   { finalScore: 79, pass: 6, fail: 1 }
// [99, 87, 67, 12 ,87]           { finalScore: 70, pass: 4, fail: 1 } 
// [99]                           { finalScore: 99, pass: 1, fail: 0 }
// 100                             Invalid




