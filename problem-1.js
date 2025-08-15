function totalFine( fare ) {
    if(fare<=0||typeof fare !== 'number'){
        return "Invalid";
    }
    return fare+(fare*(20/100))+30;  
}

console.log(totalFine(200));

// Sample Input-output:

// 200        270
// 0        Invalid
// 50          90
// 552       692.4
// -35       Invalid
// "65"       Invalid
// "Gorib tai ticket katinai"    Invalid


