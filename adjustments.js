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
  
})();
