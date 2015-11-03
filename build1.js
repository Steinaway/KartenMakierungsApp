var ColorPickerApp = (function() {
		var body = document.querySelector("#body");
		body.appendChild(new grid(10,10));
		var all = document.querySelectorAll('td');
		var colorModule = document.querySelector('#colorModule');
		var generateButton = document.querySelector("#generate");


		function updateColors() {
			for(i = 0; i < 10;i++){
				var color = new Color(random(),random(),random());
				for(j = 0; j < 10;j++) {
					var x = [i,j].positionGrid();
					var coString = color.ColorToString();
					color.colorTone(10);
					x.setColor(coString);
					
					//var tones = colorTone(tone);
				}
			}
		}

		var Color = function(r,g,b) {
			this.r = r;
			this.g = g;
			this.b = b;
		}

		Color.prototype.ColorToString = function() {
			var colorString = 'rgb('+ this.r +','+ this.g +','+ this.b +')';
			console.log(colorString);
			return colorString;
		}

		Color.prototype.colorTone = function(factor) {
			this.r = this.r + factor;
			this.g = this.g + factor;
			this.b = this.b + factor;
		}
		


		generateButton.addEventListener("click", function() {
			updateColors();
		});

		for(var i = 0; i < all.length; i++) {
			all[i].addEventListener('click',function() {
				var color = this.style.background;
				colorModule.innerHTML = color;
			});	
		}
	
})();	