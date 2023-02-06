const size = 25;
let result;

if (size < 10) {
  result = "Greater than 10";
} else if (size > 20) {
  result = "Greater than 20";
} else {
  result = "Lower than 10";
}

console.log(result);
// Returns Greater than 10 but should return Greater than 20


function oddEven (zahl) {
if(zahl.POSITIVE_INFINITY)
{
  return zahl.POSITIVE_INFINITY
}

}
console.log(oddEven(4));


function oldyoung(alter) {

  if(alter < 0)
{

  return("zahl nicht korrekt");
}
else if(alter < 16)
{
 return("junge person");
}
else if(alter < 50)
{
  return ("ältere person");
}
else if(alter > 50)
{
  return("alter sack");
}
else{
  return ("keine zahl");
}
}
console.log(oldyoung(27));
console.log(oldyoung(6));
console.log(oldyoung(-1));
console.log(oldyoung(86));
