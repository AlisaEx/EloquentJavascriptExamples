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

// Example 3.2
function greaterThan(x){
	return function(y){
		return x < y;
	};
};

// Example 4.1
cats = {"Zooey": true};
cats["Baby"] = true;
detele cats["noneofmine"];
show("Zooey" in cats);

// Example 4.2
function range(num){
	var something = [];
	for (i=0; i<=num; i++){
		something.push(i);
	}
	return something;
}

// Example 4.3
thing = ["a","b","c d"];
show(thing.join(" ").split(" "));

// Example 4.4
function startsWith(first, second){
	return first.slice(0, second.length) === second;
}

// Example 4.5
function catNames(p){
	location = p.indexOf(":");
	return p.slice(location+2).split(",");
}

// Example 4.6
function extractDate(p){
	function dateAt(start, end)
		return Number(p.slice(start,start+end));
	}
	return new Date(dateAt(11,4), dateAt(8,2)-1, dateAt(5,2));
};

// Example 4.7
function between(p, start, end){
	var startAt = p.indexOf(start)+start.length;
	var endAt = p.indexOf(end,startAt);
	return p.slice(startAt, endAt);
}

// Example 4.8
function formatDate(date){
	function addZero(number){
		if (number < 10){
			return "0"+number;
		}
		else{
			return number;
		}
	}
  return pad(date.getDate() + "/" + (date.getMonth() + 1) +
         "/" + date.getFullYear());
}

// Example 4.9
function oldestCat(obj){
	var oldest = null;
	for (name in obj){
		var cat = obj[name];
		if(!(death in cat) && (oldest==null || oldest.birth >  cat.birth)){
			oldest = cat;
		}
	}
	if (oldest == null){
		return "ALL THE CATS ARE DEAD!";
	}
	else{
		return oldest.name;
	}
}

// Example 4.10
function range(begin, stop){
	var something = [];
	if(arguments.length < 2){
		stop = begin;
		begin = 0;
	}
	for(i=begin, i<=stop, i++){
		something.push(i);
	}
	return something;
}

// Example 4.11
function sum(array){
	result = 0;
	for (i = 0; i < array.length; i++){
		result += array[i];
	}
	return result;
}

// Example 6.1
function countZeros(numbers){
	function count(total, amount){
		total + (amount===0 ? 1:0)
	return reduce(count, 0, numbers);
	}
}

function count(array, test){
	reduce(function(total, element){
		return total + (test(element) ? 1:0)
	}, 0, array);
}

function equals(x) {
  return function(element) {return x === element;};
}

function countZeroes(array) {
  return count(array, equals(0));
}

// Example 6.2
function processParagraph(p){
	var header = 0;
	while(p.charAt(0)===%){
		p.slice(1);
		header += 1;
	}
	return {type: (header===0 ? "p" : "h"+ header), content:p};
}

// Example 6.3  STILL NEED EXPLAINGING
function splitParagraph(text) {
  function indexOrEnd(character) {
    var index = text.indexOf(character);
    return index == -1 ? text.length : index;
  }

  function takeNormal() {
    var end = reduce(Math.min, text.length,
                     map(indexOrEnd, ["*", "{"]));
    var part = text.slice(0, end);
    text = text.slice(end);
    return part;
  }

  function takeUpTo(character) {
    var end = text.indexOf(character, 1);
    if (end == -1)
      throw new Error("Missing closing '" + character + "'");
    var part = text.slice(1, end);
    text = text.slice(end + 1);
    return part;
  }

  var fragments = [];

  while (text != "") {
    if (text.charAt(0) == "*")
      fragments.push({type: "emphasised",
                      content: takeUpTo("*")});
    else if (text.charAt(0) == "{")
      fragments.push({type: "footnote",
                      content: takeUpTo("}")});
    else
      fragments.push({type: "normal",
                      content: takeNormal()});
  }
  return fragments;
}
// Example 6.4
function createImage(location){
	return tag("img", [], {src: location});
}
