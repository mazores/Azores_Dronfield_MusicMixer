(() => {
	//this is a self-invoking anonymous function
	//also called a lambda, if you're into nerd speak
	console.log('working');

	//setting up our variables
	const dropZones = document.querySelectorAll(".drop-zones"),
		draggableIcons = document.querySelectorAll(".iconsContainer img"),

		//fireIcon = document.querySelector("#fire"),
		//leavesIcon = document.querySelector("#leaves"),
		// birdsIcon = document.querySelector("#birds"),
		// radioIcon = document.querySelector("#radio"),
		// waterIcon = document.querySelector("#water"),
		// windIcon = document.querySelector("#wind"),
		// thunderIcon = document.querySelector("#thunder"),
		// cricketIcon = document.querySelector("#cricket");

	//creates audio element for icons
	// let fireIcon = document.createElement('audio');
	// fireIcon.src = "audio/fire.mp3";
	// fireIcon.load();


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
			//So we add the class "addColor" to the img of the targeted drop zone

			this.classList.add("addColor");


		});
	});
})();
