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

		//make variables for each drop zones
		fireZone = document.querySelector(".bonfire"),
		leavesZone = document.querySelector(".plants"),
		flowersZone = document.querySelector(".flowers"),
		radioZone = document.querySelector(".radio"),
		waterZone = document.querySelector(".lake"),
		windZoneLeft = document.querySelector(".tent-left"),
		windZoneRight = document.querySelector(".tent-right");

		//buttons
	var reset = document.querySelector("#reset");
	var	howTo = document.querySelector("#how-to");	
	var	instructions = document.querySelector("#instructions");	
	var closeButton = document.querySelector(".close");

	//function resetSound() {
	//	e.preventDefault();
	//	console.log('Hi');
	//	 fireAudio.pause();
 	//}

 	function openInstructions() {
 		instructions.classList.toggle("open");
 	}

 	function closeInstructions() {
 		instructions.classList.toggle("open");
 	}

	//We want to be able to drag the icons..
	//So we add event listeners
	draggableIcons.forEach(icon => {
		icon.addEventListener("dragstart", function(e) {
			//Check to see if the Event Listener is working
			console.log("dragging...!")
			e.dataTransfer.setData("text/plain", this.id);
		});
	});

	dropZones.forEach(zone => {
		zone.addEventListener("dragover", function(e) {
			e.preventDefault();
			console.log("What are you dragging over me?");
		});

		zone.addEventListener("drop", function(e) {
			let draggedElement = e.dataTransfer.getData("text/plain");
			console.log('you dragged:', draggedElement);
			//e.preventDefault();
			console.log("You dropped something on me!");

			//When we drop an icon on the Scene, we want the right drop zone to be coloured!
			//So we add the class "addColor" to the img of the targeted drop zone

			if (draggedElement == 'fire') {
				fireZone.classList.add("addColor");


				let fireAudio = document.createElement('audio');
				fireAudio.src = "audio/fire.mp3";

				fireAudio.load();
				fireAudio.currentTime = 0;
				fireAudio.play();
				fireAudio.loop = true;
				fireAudio.volume = 1.0;

				console.log('fire color added');
			} else if (draggedElement == 'leaves') {
				flowersZone.classList.add("addColor");
				leavesZone.classList.add("addColor");

				let leavesAudio = document.createElement('audio');
				leavesAudio.src = "audio/leaves.mp3";
				leavesAudio.load();
				leavesAudio.currentTime = 0;
				leavesAudio.play();
				leavesAudio.loop = true;
				leavesAudio.volume = 0.05;

				console.log('leaves color added');
			} else if (draggedElement == 'radio') {
				radioZone.classList.add("addColor");

				let radioAudio = document.createElement('audio');
				radioAudio.src = "audio/radio.mp3";
				radioAudio.load();
				radioAudio.currentTime = 0;
				radioAudio.play();
				radioAudio.loop = true;
				radioAudio.volume = 0.09;

				console.log('radio color added');
			} else if (draggedElement == 'water') {
				waterZone.classList.add("addColor");

				let waterAudio = document.createElement('audio');
				waterAudio.src = "audio/water.mp3";
				waterAudio.load();
				waterAudio.currentTime = 0;
				waterAudio.play();
				waterAudio.loop = true;
				waterAudio.volume = 0.1;

				console.log('water color added');
			} else if (draggedElement == 'wind') {
				windZoneLeft.classList.add("addColor");
				windZoneRight.classList.add("addColor");

				let windAudio = document.createElement('audio');
				windAudio.src = "audio/tent.mp3";
				windAudio.load();
				windAudio.currentTime = 0;
				windAudio.play();
				windAudio.loop = true;
				windAudio.volume = 0.3;
				console.log('tent color added');
			} else {
				return;
			}
		});
	});

	howTo.addEventListener('click', openInstructions);
	closeButton.addEventListener('click', closeInstructions);
})();
