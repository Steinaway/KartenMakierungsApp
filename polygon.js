var Polygon = (function() {

	Element.prototype.setColor = function(color) {
		this.style.background = color;
	}

	Number.prototype.percent = function() {
		return (this + "%");
	}

	Number.prototype.vh = function() {
		return (this + "vh");
	}

	Number.prototype.px = function() {
		return (this + "px");
	}

	Number.prototype.em = function() {
		return (this + "em");
	}

	function random() {
		return Math.floor(Math.random() * (255));
	}
	/*
		grid Table returns a Node with a Table custom sized e.g (7,7)
	*/
	var grid = function(x,y) {
		var table = document.createElement("table");
		table.setAttribute("id","grid");
		var rows = {};
		var columns = {};
		for(i=0;i<y;i++){
			rows[i] = document.createElement("tr");
			table.appendChild(rows[i]);
			for(z=0;z<x;z++){
				columns[z] = document.createElement("td");
				rows[i].appendChild(columns[z]);
			}
		}

		table.style.width =  100.0.percent();
		table.style.height = 800.0.px();
		return table;
	}
	/*
		You can select one cell out of the grid and manipulate it by simply typing [3,4].grid();
	*/
	Array.prototype.positionGrid = function() {
		var table = document.getElementById("grid");
		var child = table.childNodes;
		var searchedrow = child[this[0]];
		var searchedcol = searchedrow.childNodes;
		var target = searchedcol[this[1]];
		return target;
	}

	return {
		grid:grid,
		random:random,
	}

})();