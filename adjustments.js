(function () {
	//Set variables for action buttons    
	var rFont = document.getElementById('regularFont');
	var mFont = document.getElementById('mediumFont');
	var lFont = document.getElementById('largeFont');
	var rContrast = document.getElementById('regularContrast');
	var mContrast = document.getElementById('mediumContrast');
	var hContrast = document.getElementById('highContrast');
  
	//Create event listeners
	rFont.addEventListener('click', regularFont);
	mFont.addEventListener('click', mediumFont);
	lFont.addEventListener('click', largeFont);
	rContrast.addEventListener('click', regContrast);
	mContrast.addEventListener('click', moreContrast);
	hContrast.addEventListener('click', mostContrast);
  
	//Set variable for item to be adjusted
	var p = document.getElementsByTagName('p');
	var a = document.getElementsByTagName('a');
	
	//Function to genereate change for all items
	function regularFont() {	
  		var i;
  		for (i = 0; i < p.length; i++) {
    		p[i].setAttribute('style', 'font-size: 1em;');
  		}
	}
})();
