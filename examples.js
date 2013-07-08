// Example 2.2
var result = 1;
var index = 0;
while (counter < 10) {
  result *= 2;
  index +=  1;
}
// Example 2.3
var thing = "";
var counter = 0;
while (counter < 10) {
  thing += "#";
  print(thing);
  counter += 1;
};
// Example 2.4
var index = 1;
for (i=0;i<10;i++){
	index *= 2;
};
// Example 2.5
var thing = "#";
for (var i = 0; i < 10; i++) {
	print (thing);
	thing += "#";
};
// Example 2.6
var input = prompt("2+2=? SOLVE IT OR DIE");
if (input === "4"){
	alert("MATHEMATICAL!");
}
else if (input === "3" || input === "5"){
	alert("Almost, but no.");
}
else{
	alert("NOPE!");
}
// Example 2.7
var input = prompt("2+2=? SOLVE IT OR DIE");
while (input !== "4"){
	if(input === "3" || input ==="5"){
		alert("ALMOST, but no dice");
	}
	else{
		alert("You're dumb.");
	}
	var input = prompt("2+2=? SOLVE IT OR DIE");
}
alert("SLAMACOW!")

// Example 3.1
function absolute(num){
  if (num<0){
    return -num;
  }
  else{
    return num;
  }
};