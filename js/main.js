(() => {
	//this is a self-invoking anonymous function
	//also called a lambda, if you're into nerd speak
	console.log('working');

	//setting up our variables
	const dropZones = document.querySelectorAll(".drop-zones"),
		draggableIcons = document.querySelectorAll(".iconsContainer img");

	//We want to be able to drag the icons..
	//So we add event listeners
	draggableIcons.forEach(icon => {
		icon.addEventListener("dragstart", function(e) {
			//Check to see if the Event Listener is working
			console.log("dragging...!")
		});
	});

	dropZones.forEach(zone => {
		zone.addEventListener("dragover", function(e) {
			e.preventDefault();
			console.log("What are you dragging over me?");
		});

		zone.addEventListener("drop", function(e) {
			e.preventDefault();
			console.log("You dropped something on me!");
			debugger;

			//When we drop an icon on the Scene, we want the right drop zone to be coloured!
			//So we add the class "addColor" to the target drop zone
			e.target.classList.add("addColor");
		});
	});
})();
