(() => {
	//this is a self-invoking anonymous function
	//also called a lambda, if you're into nerd speak
	console.log('working');

	//setting up our variables
	const dropZones = document.querySelectorAll(".drop-zones"),
		draggableIcons = document.querySelectorAll(".iconsContainer img"),

		//make variables for each icon
		fireIcon = document.querySelector("#fire"),
		leavesIcon = document.querySelector("#leaves"),
		radioIcon = document.querySelector("#radio"),
		waterIcon = document.querySelector("#water"),
		windIcon = document.querySelector("#wind"),
		thunderIcon = document.querySelector("#thunder"),
		cricketIcon = document.querySelector("#cricket"),
		birdsIcon = document.querySelector("#birds"),


		//make variables for each drop zones
		fireZone = document.querySelector(".bonfire"),
		leavesZone = document.querySelector(".plants"),
		radioZone = document.querySelector(".radio"),
		waterZone = document.querySelector(".lake"),
		windZone = document.querySelector(".flowers");



	//creates audio element for icons
	let fireAudio = document.createElement('audio');
	fireAudio.src = "audio/fire.mp3";
	fireAudio.load();

	// let leavesAudio = document.createElement('audio');
	// leavesAudio.src = "audio/.mp3";
	// leavesAudio.load();

	// let radioAudio = document.createElement('audio');
	// radioAudio.src = "audio/.mp3";
	// radioAudio.load();

	let waterAudio = document.createElement('audio');
	waterAudio.src = "audio/water.mp3";
	waterAudio.load();

	let windAudio = document.createElement('audio');
	windAudio.src = "audio/wind.mp3";
	windAudio.load();

	let thunderAudio = document.createElement('audio');
	thunderAudio.src = "audio/thunder.mp3";
	thunderAudio.load();

	let cricketAudio = document.createElement('audio');
	cricketAudio.src = "audio/crickets.mp3";
	cricketAudio.load();

	let birdsAudio = document.createElement('audio');
	birdsAudio.src = "audio/birds.mp3";
	birdsAudio.load();


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
