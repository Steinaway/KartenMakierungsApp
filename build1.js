var ColorPickerApp = (function() {
		var body = document.querySelector("#body");
		body.appendChild(new grid(10,10));
		var all = document.querySelectorAll('td');
		var colorModule = document.querySelector('#colorModule');
		var generateButton = document.querySelector("#generate");


		function updateColors() {
			for(i = 0; i < 10;i++){
				for(j = 0; j < 10;j++) {
					var r = random();
					var g = random();
					var b = random();
					var x = [i,j].positionGrid();
					x.setColor('rgb('+r+','+g+','+b+')');
				}
			}
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