//statics
var xaxis = this.screen.width+'px';
var yaxis = this.screen.height+'px';
var body = document.getElementById('body');
var row = document.createAttribute('row');
var col = document.createAttribute("column");


/*
Author  Nicholas Adam 
Thu Jun 25 2015 23:09:19 GMT+0200 (CEST)
Vienna
*/

/*
 shortcut string appending 
*/
Element.prototype.s = function(s) {
	x = document.createTextNode(s);
	this.appendChild(x);
}
//shortcuts colors
Element.prototype.setColor = function(color) {
	this.style.background = color;
}

 
/*
	shortcut the appendChild() method
*/
Element.prototype.x = function(x) {
	this.appendChild(x);
}
Element.prototype.c = function(y) {
	this.style.color = y;
}
Element.prototype.createButton = function(val,id) {
	var b = document.createElement('button');
	b.style.width = '100%';
	b.style.height = '100%';
	b.id = id;
	b.style.fontSize = '24px'
	b.s(val);
	this.x(b);
}
Element.prototype.createInput = function(val,id) {
	var i = document.createElement('input');
	i.style.width = '100%';
	i.style.height = '100%';
	i.id = id;
	i.style.fontSize = '24px'
	i.s(val);
	this.x(i);
}
function random() {
	return Math.floor(Math.random() * (255));
}
/*
	grid Table returns a Node with a Table custom sized e.g (7,7)
*/
	var grid = function(x,y) {
		var table = document.createElement('table');
		table.setAttribute('id','grid');
		var rows = {};
		var columns = {};
		for(i=0;i<y;i++){
			rows[i] = document.createElement('tr');
			rows[i].setAttribute('row',i);
			table.x(rows[i]);
			for(z=0;z<x;z++){
				columns[z] = document.createElement('td');
				columns[z].setAttribute('col',z);
				columns[z].style.width = rows[i].style.width / x;
				columns[z].style.height = body.style.height / y;
				rows[i].x(columns[z]);
			}
		}

	table.style.width =  '100%';
	table.style.height = '800px';
	return table;
}
/*
	You can select one cell out of the grid and manipulate it by simply typing [3,4].grid();
*/
Array.prototype.positionGrid = function() {
	var table  = document.getElementById('grid');
	var child = table.childNodes;
	var searchedrow = child[this[0]];
	var searchedcol = searchedrow.childNodes;
	var target = searchedcol[this[1]];
	return target;
}


Element.prototype.createDiv = function(x,border,id) {
	var div = document.createElement('div');
	div.id = id;
	div.style.height = x;
	div.style.border = border;
	this.x(div);
}