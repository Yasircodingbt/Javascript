/*
 Description : 
   *n : type is object
    condition : using switch,case & default to solve the sequences
*/ 
// in this case i use simple object n

const n = {
  Choose : prompt("enter [Y,A,K,H,L]"),
}
let x = n;
switch (x.Choose) {
case "Y": console.log("Yasir is intelligent boy & one day he change the world with her silk");
          break;
case  "A" : console.log("Ariba is too shalfish girl & she is soo beautiful that why he do not like other");
          break;
case "K" :  console.log("khadijah is too rough & No one like her reason is simple he talk like a animal ");
          break;
case "H" :  console.log("hamza only like to play game & he is 0 in study");
          break;
case "L" :  console.log("laiba is uni student but she only like to sleep and she is a bouring girl");
          break;                            
default: 
          console.log("this letter is not involed in this series ");           
}
