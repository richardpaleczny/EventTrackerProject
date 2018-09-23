window.addEventListener("load", function(e) {

	init();
});

function init() {

	// XHR code to retrieve all events and call *createHHEventTable()* to build
	// a table and display it to the page
	requestAllHHEvents();
	
	// Map event listener to submit button which passes event object to method
	// which performs xhr to create an event
	
	let submit = document.addEventForm.submit;
	
	submit.addEventListener("click", function(e) {
		
		e.preventDefault();
		
		let inputActivity = document.addEventForm.activity.value;
		let inputRecommendedTime = document.addEventForm.recommendedTime.value;
		let inputRecommendedAmount = document.addEventForm.recommendedAmount.value;
		let inputTimeSpent = document.addEventForm.timeSpent.value;
		let inputGoalMet = document.addEventForm.goalMet.value;
		let inputFeelingRating = document.addEventForm.feelingRating.value;
		
		let event = {};
		event.activity = inputActivity;
		event.recommendedTime = inputRecommendedTime;
		event.recommendedAmount = inputRecommendedAmount;
		event.timeSpent = inputTimeSpent;
		event.goalMet = inputGoalMet;
		event.feelingRating = inputFeelingRating;
		
		createHHEvent(event);
		
		// Reset the form
		document.addEventForm.reset();
		
	});
	
}

function createHHEvent(event) {
	
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "/api/healthyhabits/");

	xhr.setRequestHeader("Content-type", "application/json");

	xhr.onreadystatechange = function() {
		
	  if (xhr.readyState === 4 ) {
		  
	    if ( xhr.status == 200 || xhr.status == 201 ) {
	      
	      let currentTable = document.getElementById("hhTable");
	      currentTable.parentElement.removeChild(currentTable);
	      init();
	      
	    } else {
	    	
	      console.log("POST request failed.");
	      console.error(xhr.status + ': ' + xhr.responseText);
	      
	    }
	    
	  }
	  
	};

	let newHHEvent = JSON.stringify(event);

	xhr.send(newHHEvent);
	
}

function requestAllHHEvents() {

	let xhr = new XMLHttpRequest();
	xhr.open("GET", "/api/healthyhabits/");

	xhr.onreadystatechange = function() {

		if (xhr.readyState === 4 && xhr.status === 200) {

			// hits *index()* and should return all events in an array of
			// objects
			let eventArr = JSON.parse(xhr.responseText);
			createHHEventTable(eventArr);

		} else if (xhr.status >= 400) {
			
			console.log("GET request failed.");
			console.error(xhr.status + ': ' + xhr.responseText);

		}

	};

	xhr.send(null);
}

function createHHEventTable(eventArr) {
	
	let hhTable = document.createElement("table");
	hhTable.id = "hhTable";
	
	let hhHead = document.createElement("thead");
	let hhHeaderRow = document.createElement("tr");
	
	let hhIdHeader = document.createElement("th");
	let hhActivityHeader = document.createElement("th");
	let hhRecommendedTimeHeader = document.createElement("th");
	let hhRecommendedAmountHeader = document.createElement("th");
	let hhTimeSpentHeader = document.createElement("th");
	let hhGoalMetHeader = document.createElement("th");
	let hhFeelingRatingHeader = document.createElement("th");
	
	hhIdHeader.textContent = "ID";
	hhActivityHeader.textContent = "Activity";
	hhRecommendedTimeHeader.textContent = "Recommended Time";
	hhRecommendedAmountHeader.textContent = "Recommended Amount";
	hhTimeSpentHeader.textContent = "Time Spent";
	hhGoalMetHeader.textContent = "Was Goal Met";
	hhFeelingRatingHeader.textContent = "Well-being User Rating";
	
	hhTable.appendChild(hhHead);
	hhHead.appendChild(hhHeaderRow);
	hhHeaderRow.appendChild(hhIdHeader);
	hhHeaderRow.appendChild(hhActivityHeader);
	hhHeaderRow.appendChild(hhRecommendedTimeHeader);
	hhHeaderRow.appendChild(hhRecommendedAmountHeader);
	hhHeaderRow.appendChild(hhTimeSpentHeader);
	hhHeaderRow.appendChild(hhGoalMetHeader);
	hhHeaderRow.appendChild(hhFeelingRatingHeader);
	
	let hhBody = document.createElement("tbody");
	
	eventArr.forEach(event => {
		
		let hhBodyRow = document.createElement("tr");
		hhBodyRow.className = "inTBody";
		
		let hhIdTd = document.createElement("td");
		let hhActivityTd = document.createElement("td");
		let hhRecommendedTimeTd = document.createElement("td");
		let hhRecommendedAmountTd = document.createElement("td");
		let hhTimeSpentTd = document.createElement("td");
		let hhGoalMetTd = document.createElement("td");
		let hhFeelingRatingTd = document.createElement("td");
		
		hhIdTd.textContent = event.id;
		hhActivityTd.textContent = event.activity;
		hhRecommendedTimeTd.textContent = event.recommendedTime;
		hhRecommendedAmountTd.textContent = event.recommendedAmount;
		hhTimeSpentTd.textContent = event.timeSpent;
		hhGoalMetTd.textContent = event.goalMet;
		hhFeelingRatingTd.textContent = event.feelingRating;
		
		hhBodyRow.appendChild(hhIdTd);
		hhBodyRow.appendChild(hhActivityTd);
		hhBodyRow.appendChild(hhRecommendedTimeTd);
		hhBodyRow.appendChild(hhRecommendedAmountTd);
		hhBodyRow.appendChild(hhTimeSpentTd);
		hhBodyRow.appendChild(hhGoalMetTd);
		hhBodyRow.appendChild(hhFeelingRatingTd);
		hhBody.appendChild(hhBodyRow);
	});
	
	hhTable.appendChild(hhBody);
	document.getElementById("hhTableDiv").appendChild(hhTable);
	
	// If the table is on the page
	if (document.getElementById("hhTable") !== null) {
		
		// This is an HTMLCollection type not an array, therefore we can only
		// use for loops and not array methods, such as forEach
		let tableBodyTrColl = document.getElementsByClassName("inTBody");
		
		for (let i = 0; i < tableBodyTrColl.length; i++) {
			
			tableBodyTrColl[i].addEventListener("click", function(e) {
				
				console.log("test");
				
			});
			
		}
		
	}
}