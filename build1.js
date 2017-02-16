var ColorPickerApp = (function() {
		var gridContent = document.querySelector(".grid");
		var colorModule = document.querySelector('#colorModule');
		var generateButton = document.querySelector("#generate");
		var inputs = document.querySelectorAll("input");
		var gridTable = document.querySelector("#grid");
		var xInput = document.querySelector("#x");
		var yInput = document.querySelector("#y");
		var count = 0;

		generateButton.addEventListener("click",onGenerate);

		for(var i = 0; i < inputs.length;i++) {
			inputs[i].addEventListener("click",function() {
				this.value = (null);
			});
		}
		function addColorListeners() {
			var all = document.querySelectorAll('td');
			for(var i = 0; i < all.length; i++) {
				all[i].addEventListener('click',function() {
					var color = this.style.background;
					colorModule.innerHTML = color;
				});	
			}
		}
		
		
		function updateColors(x,y) {
			for(i = 0; i < y ;i++){
				var color = new Color(Polygon.random(),Polygon.random(),Polygon.random());
				for(j = 0;j < x ;j++) {
					var elem = [i,j].positionGrid(gridTable);
					elem.setColor(color.ColorString());
					color.colorTone(0.5);
				}
			}
			addColorListeners();
		}

		var Color = function(r,g,b) {
			this.r = r;
			this.g = g;
			this.b = b;
			this.ColorString = function() {
				var colorString = ('rgb('+ this.r +','+ this.g +','+ this.b +')');
				return colorString;
			}
			this.colorTone = function(factor) {
				this.r = this.r + factor;
				this.g = this.g + factor;
				this.b = this.b + factor;
			}
		}
		


		

		function onGenerate() {
			colorModule.innerHTML = ("<p>please wait...</p>");
			count++;
			if(count > 1) { 
				gridContent.innerHTML = (null);
			} 
			if(xInput.value >= 100 || yInput.value >= 100) {
					colorModule.innerHTML = ("too big");
			} else 				
gridContent.appendChild(  Polygon.grid(xInput.value,yInput.value));
			}

							

updateColors(xInput.value,yInput.value);
						
				
		}
		
	
})();	
