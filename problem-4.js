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

const arr1 = [1,4,5];
const arr2 = [1,4,5];
console.log(isSame(arr1,arr2));


// Sample Input-Output:

// [1, 2, 3] , [1 , 2 , 3]
// true
// [34 , 5 ,7 ,9 ], [ 34 , 5 , 7 ]
// false
// [1, undefined , 3] , [1,null ,3]
// false
// [1 , 4 , 5], [1 , 4 , 5]
// true
// [1 , "4" , 4] ,[1 , 4  , 4]
// false
// [2 , 5 , 6] ,256
// Invalid
// {data: [2 , 5 , 6] } , [2 , 5 , 6]
// Invalid

