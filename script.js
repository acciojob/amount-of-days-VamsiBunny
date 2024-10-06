function year(n) {

  if(n%4==0){
	  console.log("366");
  }
	return 365;
}
let n=prompt("Enter Year :");
console.log(year(n));