	/// Example 2.2 ///
var result = 1;
var index = 0;
while (counter < 10) {
  result *= 2;
  index +=  1;
}
	/// Example 2.3 ///
var thing = "";
var counter = 0;
while (counter < 10) {
  thing += "#";
  print(thing);
  counter += 1;
};
	/// Example 2.4 ///
var index = 1;
for (i=0;i<10;i++){
	index *= 2;
};
	/// Example 2.5 ///
var thing = "#";
for (var i = 0; i < 10; i++) {
	print (thing);
	thing += "#";
};
	/// Example 2.6 ///
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
	/// Example 2.7 ///
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

	/// Example 3.1 ///
function absolute(num){
  if (num<0){
    return -num;
  }
  else{
    return num;
  }
};

	/// Example 3.2 ///
function greaterThan(x){
	return function(y){
		return x < y;
	};
};

	/// Example 4.1 ///
cats = {"Zooey": true};
cats["Baby"] = true;
detele cats["noneofmine"];
show("Zooey" in cats);

	/// Example 4.2 ///
function range(num){
	var something = [];
	for (i=0; i<=num; i++){
		something.push(i);
	}
	return something;
}

	/// Example 4.3 ///
thing = ["a","b","c d"];
show(thing.join(" ").split(" "));

	/// Example 4.4 ///
function startsWith(first, second){
	return first.slice(0, second.length) === second;
}

	/// Example 4.5 ///
function catNames(p){
	location = p.indexOf(":");
	return p.slice(location+2).split(",");
}

	/// Example 4.6 ///
function extractDate(p){
	function dateAt(start, end)
		return Number(p.slice(start,start+end));
	}
	return new Date(dateAt(11,4), dateAt(8,2)-1, dateAt(5,2));
};

	/// Example 4.7 ///
function between(p, start, end){
	var startAt = p.indexOf(start)+start.length;
	var endAt = p.indexOf(end,startAt);
	return p.slice(startAt, endAt);
}

	/// Example 4.8 ///
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

	/// Example 4.9 ///
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

	/// Example 4.10 ///
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

	/// Example 4.11 ///
function sum(array){
	result = 0;
	for (i = 0; i < array.length; i++){
		result += array[i];
	}
	return result;
}

	/// Example 6.1 ///
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

	/// Example 6.2 ///
function processParagraph(p){
	var header = 0;
	while(p.charAt(0)===%){
		p.slice(1);
		header += 1;
	}
	return {type: (header===0 ? "p" : "h"+ header), content:p};
}

	/// Example 6.3 ///  STILL NEED EXPLAINGING
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
	/// Example 6.4 ///
function createImage(location){
	return tag("img", [], {src: location});
}

	/// Example 7.1 ///
function makeRoads(start) {
  for (var i = 1; i < arguments.length; i += 2)
    makeRoad(start, arguments[i], arguments[i + 1]);
}
	/// Example 7.2 ///
function filter(func, array){
	result = [];
	for(i=0; i<array.length; i++){
		if(func(array[i])===true){
			result.push(array[i]);
		}
	}
	return result;
}

	/// Example 7.3 ///
function shortestRoute(start, end){
	var shortest = null;
	forEach(possibleRoutes(start, end), function(route){
		if (!shortest || shortest.length > route.length){
			shortest = route;
		}
	});
	return shortest;
}

	/// Example 7.4 ///
function possibleDirections(from) {
  var mapSize = 20;
  function insideMap(point) {
    return point.x >= 0 && point.x < mapSize &&
           point.y >= 0 && point.y < mapSize;
  }

  var directions = [point(-1, 0), point(1, 0), point(0, -1),
                    point(0, 1), point(-1, -1), point(-1, 1),
                    point(1, 1), point(1, -1)];
  return filter(insideMap, map(partial(addPoints, from),
                               directions));
}

	/// Example 7.5 ///
function estimatedDistance(PointA, PointB){
	var dx = Math.abs(pointA.x - pointB.x),
    var dy = Math.abs(pointA.y - pointB.y);
	if (dx > dy){
    	return (dx - dy) * 100 + dy * 141;  	
  	}
	else{
    	return (dy - dx) * 100 + dx * 141;
	}
}

	/// Example 7.6 ///
function makeReachedList() {
  return {};
}

function storeReached(list, point, route) {
  var inner = list[point.x];
  if (inner == undefined) {
    inner = {};
    list[point.x] = inner;
  }
  inner[point.y] = route;
}

function findReached(list, point) {
  	var inner = list[point.x];
  	if (inner == undefined){
    	return undefined;
	}
  	else{
    	return inner[point.y];
	}
}

	/// Example 8.1 ///
function Point(x, y) {
  this.x = x;
  this.y = y;
}
Point.prototype.add = function(other) {
  return new Point(this.x + other.x, this.y + other.y);
};
Point.prototype.isEqualTo = function(other) {
  return this.x == other.x && this.y == other.y;
};

	/// Example 8.2 ///
Grid.prototype.each = function(action){
	for (var y = 0; y < this.height; y++) {
    	for (var x = 0; x < this.width; x++) {
      		var point = new Point(x, y);
      		action(point, this.valueAt(point));
    	}
  	}
};

	/// Example 8.3 ///
Terrarium.prototype.toString = function(){
	var characters = [];
	var endOfLine = this.grid.width - 1;
	this.grid.each(function(point, value) {
		characters.push(characterFromElement(value));
		if (point.x == endOfLine){
			characters.push("\n");
		}
	});
	return characters.join("");
};

	/// Example 8.4 ///
function method(obj, name){
	return fucntion(){
		obj[name].apply(obj, arguments);
	}
}

	/// Example 8.5 ///
Terrarium.prototype.listSurroundings = function(point){
	var result = {};
	var grid = this.grid;
	directions.each(function(name, direction) {
		var place = center.add(direction);
		if (grid.isInside(place)){
			  result[name] = characterFromElement(grid.valueAt(place));
		}
		else{
			  result[name] = "#";
		}
	});
	return result;
}

	/// Example 8.6 ///
Dictionary.prototype.name = function(){
	var names = [];
	this.each(function(name, value){
		names.push(name);
	});
	return names;
};
function randomElement(array){
	if(array.length>0){
		return array[Math.floor(Math.random()*array.length)];
	}
	else{
		print "The array is empty.";
	}

};
function DrunkBug() {};
DrunkBug.prototype.act = function(surroundings) {
	return {type: "move",
			direction: randomElement(Dictionary.names())
	};
};
DrunkBug.prototype.character = "~";
creatureTypes.register(DrunkBug);

	/// Example 8.7 ///
function LichenEater() {
  	this.energy = 10;
}
LichenEater.prototype.act = function(surroundings) {
  	var emptySpace = findDirections(surroundings, " ");
  	var lichen = findDirections(surroundings, "*");
  	if (this.energy >= 30 && emptySpace.length > 0){
   		return {type: "reproduce", direction: randomElement(emptySpace)};
  	}
  	else if (lichen.length > 0){
    	return {type: "eat", direction: randomElement(lichen)};
  	}
  	else if (emptySpace.length > 0){
    	return {type: "move", direction: randomElement(emptySpace)};
  	}
  	else{
    	return {type: "wait"};
	}
};
LichenEater.prototype.character = "c";
creatureTypes.register(LichenEater);


	/// Example 8.8 ///
function CleverLichenEater() {
  	this.energy = 10;
}
CleverLichenEater.prototype.act = function(surroundings) {
  	var emptySpace = findDirections(surroundings, " ");
  	var lichen = findDirections(surroundings, "*");
  	if (this.energy >= 30 && emptySpace.length > 0){
   		return {type: "reproduce", direction: randomElement(emptySpace)};
  	}
  	else if (lichen.length > 1){
    	return {type: "eat", direction: randomElement(lichen)};
  	}
  	else if (emptySpace.length > 0){
    	return {type: "move", direction: randomElement(emptySpace)};
  	}
  	else{
    	return {type: "wait"};
	}
};
CleverLichenEater.prototype.character = "c";

creatureTypes.register(CleverLichenEater);

	/// Example 8.9 ///
function LichenEaterEater() {
  this.energy = 30;
  this.direction = "sw";
}
LichenEaterEater.prototype.act = function(surroundings) {
  var emptySpace = findDirections(surroundings, " ");
  var LichenEater = findDirections(surroundings, "c");

  if (this.energy >= 50 && emptySpace.length > 0) {
    return {type: "reproduce",
            direction: randomElement(emptySpace)};
  }
  else if (LichenEater.length > 0) {
    return {type: "eat",
            direction: randomElement(LichenEater)};
  }
  else if (emptySpace.length > 0) {
    if (surroundings[this.direction] != " ")
      this.direction = randomElement(emptySpace);
    return {type: "move",
            direction: this.direction};
  }
  else {
    return {type: "wait"};
  }
};
LichenEaterEater.prototype.character = "@";
creatureTypes.register(LichenEaterEater);

	/// Example 10.1 ///
var dateRegExpr = /\d\d\/\d\d\/\d\d\d\d/;

	/// Example 10.2 ///
var emailRegExp = /\b[\w\-]+@+[\w\-]+\.\w{2,3}\b/;

/// Regular Expression Cheat Sheet ///
/ /  = initiate regular expression
[  ] = any of these characters
(^)  = matches the start of the string
($)  = matches the end of the string
(.)  = any character that is not a newline
(\d) = any digit
(\w) = any alphanumeric character (including underscores, for some reason)
(\s) = any white-space (tab, newline, space) character.
(\b) = word boundary


/// Placed after an element ///
{ }  = gives the exact amount of times it must occur. 
{ , }= the pattern must occur => the first number, & <= the second one
(*)  = allows it to be repeated any number of times
(+)  = requires the pattern to occur at least one time
(?)  = makes an element optional [it can occur zero or one times]
.test = true if the given string === the expression.

/// Placed after expression (OPTIONS) ///
i = expression is case-insensitive
| = allow a pattern to make a choice between two elements

	/// Example 10.3 ///
function extractDate(p) {
	var found = p.match(/(\d\d?)\/(\d\d?)\/(\d{4})/);
	if (found == null)
		throw new Error("No date found in '" + p + "'.");
	return new Date(Number(found[3]), Number(found[2]) - 1,
              		Number(found[1]));
}

	/// Example 10.4 ///
function escapeHTML(text) {
  var replacements = {"<": "&lt;", ">": "&gt;",
                      "&": "&amp;", "\"": "&quot;"};
  return text.replace(/[<>&"]/g, function(character) {
    return replacements[character];
  });
}

	/// Example 11.1 ///
function validInfo(form) {
  return form.elements.name.value != "" &&
    /^.+@.+\.\w{2,3}$/.test(form.elements.email.value);
}

	/// Example 11.2 ///
userForm.elements.send.onclick = function() {
	if (validInfo(userForm)){
    	userForm.submit();
    }
  	else{
    	alert("Enter your shit in right dog!");
	}
};

	/// Example 12.1 ///
function asHTML(node) {
	if (isTextNode(node)){
		return escapeHTML(node.nodeValue);
	}
  	else if (node.childNodes.length == 0){
    	return "<" + node.nodeName + "/>";
	}
  	else{
    	return "<" + node.nodeName + ">" +
           map(asHTML, node.childNodes).join("") +
           "</" + node.nodeName + ">";
    }
}

	/// Example 12.2 ///
function removeElement(node) {
  	if (node.parentNode){
    	node.parentNode.removeChild(node);
	}
}

	/// Example 12.3 ///
function makeTable(data, columns) {
  	var headRow = dom("TR");
  	forEach(columns, function(name) {
    	headRow.appendChild(dom("TH", null, name));
  	});
  	var body = dom("TBODY", null, headRow);
  	forEach(data, function(object) {
    	var row = dom("TR");
    	forEach(columns, function(name) {
      		row.appendChild(dom("TD", null, String(object[name])));
    	});
    	body.appendChild(row);
  	});
  	return dom("TABLE", null, body);
}

	/// Example 13.1 ///
function registerEventHandler(node, event, func){
	if(typeof node.addEventListener == "function"){
		return node.addEventListener(event, func, false);
	}
	else{
		return node.attachEvent("on"+event, func);
	}
}

	/// Example 13.2 ///
Square.moveContent = function(target) {
  target.content = this.content;
  this.content = null;
  target.tableCell.appendChild(this.tableCell.lastChild);
};
Square.clearContent = function() {
  this.content = null;
  removeElement(this.tableCell.lastChild);
};

	/// Example 13.3 ///
SokobanField.move = function(direction) {
  var playerSquare = this.getSquare(this.playerPos);
  var targetPos = this.playerPos.add(direction);
  var targetSquare = this.getSquare(targetPos);

  // Possibly pushing a boulder
  if (targetSquare.hasBoulder()) {
    var pushTarget = this.getSquare(targetPos.add(direction));
    if (pushTarget.isEmpty()) {
      targetSquare.moveContent(pushTarget);
    }
    else if (pushTarget.isExit()) {
      targetSquare.moveContent(pushTarget);
      pushTarget.clearContent();
      this.bouldersToGo--;
      this.updateScore();
    }
  }
  // Moving the player
  if (targetSquare.isEmpty()) {
    playerSquare.moveContent(targetSquare);
    this.playerPos = targetPos;
  }
};

	/// Example 13.4 ///
SokobanGame.keyDown = function(event) {
  if (arrowKeyCodes.contains(event.keyCode)) {
    event.stop();
    this.field.move(arrowKeyCodes.lookup(event.keyCode));
    if (this.field.won()) {
      if (this.level < sokobanLevels.length - 1) {
        alert("Excellent! Going to the next level.");
        this.level++;
        this.reset();
      }
      else {
        alert("You win! Game over.");
        this.newGame();
      }
    }
  }
};

	/// Example 13.5 ///
Square.clearContent = function() {
  self.content = null;
  var image = this.tableCell.lastChild;
  var size = 100;

  var animate = setInterval(function() {
    size -= 10;
    image.style.width = size + "%";
    image.style.height = size + "%";

    if (size < 60) {
      clearInterval(animate);
      removeElement(image);
    }
  }, 70);
};

  /// Example 14.1 ///
function serializeJSON(value) {
  function isArray(value) {
    return /^\s*function Array/.test(String(value.constructor));
  }

  function serializeArray(value) {
    return "[" + map(serializeJSON, value).join(", ") + "]";
  }
  function serializeObject(value) {
    var properties = [];
    forEachIn(value, function(name, value) {
        properties.push(serializeString(name) + ": " +
                      serializeJSON(value));
    });
    return "{" + properties.join(", ") + "}";
  }
  function serializeString(value) {
    var special =
      {"\"": "\\\"", "\\": "\\\\", "\f": "\\f", "\b": "\\b",
       "\n": "\\n", "\t": "\\t", "\r": "\\r", "\v": "\\v"};
    var escaped = value.replace(/[\"\\\f\b\n\t\r\v]/g,
                                function(c) {return special[c];});
    return "\"" + escaped + "\"";
  }

  var type = typeof value;
  if (type == "object" && isArray(value)){
    return serializeArray(value);
  }
  else if (type == "object"){
    return serializeObject(value);
  }
  else if (type == "string"){
    return serializeString(value);
  }
  else{
    return String(value);
  }
}