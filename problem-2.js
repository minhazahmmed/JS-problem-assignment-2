function  onlyCharacter( str ) {
      if(typeof str !== 'string'){
        return "Invalid";
      }
      
    return str.split(' ').join('').toUpperCase();
}

console.log(onlyCharacter("  h e llo wor   ld"));

// Sample Input-output:

// "  h e llo wor   ld"          HELLOWORLD
// "Cy   bar- At  tac k  "      CYBAR-ATTACK
// " ha ck m e 1 @ru.c  n  "    HACKME1@RU.CN
// "Serv er : : Do wn"           SERVER::DOWN
// ["hack", "me"]                  Invalid
// true                            Invalid

