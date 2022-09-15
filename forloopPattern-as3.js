let i=1;
let j=1;
let k=1;
let n=4;
let string="";
for(i=1; i<=n; i++){
   for(j=1; j<=i; j++,k++){
      string=string+k
   }
   string=string+" "+"\n"
}

console.log(string);
