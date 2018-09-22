window.addEventListener("load", function(e) {

	init();
});

function init() {

	// XHR code to retrieve all events and call *createHHEventTable()* to build
	// a table and display it to the page
	requestAllHHEvents();
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
}