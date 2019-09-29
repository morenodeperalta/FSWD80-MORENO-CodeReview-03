function calculateInsurance() {

	var clientName = francisco
	// document.getElementById('nameInput').value;

	var countrySelected = Austria
	// countryChoice.value;

	var horsePower = 100
	// parseInt(document.getElementById('horsePowerInput').value);

	var clientAge = 18
	// parseInt(document.getElementById('ageInput').value);


	var formulaAustria = Math.floor((horsePower * 100)/(clientAge)+50);
	// var formulaGreece = Math.floor((horsePower *150)/(clientAge+3)+50);
	// var formulaHungary = Math.floor((horsePower *120)/(clientAge)+100);

	if (countrySelected === 'Austria') {
		var formula = "Dear: "+clientName + ", the your insurance cost for the car that you choose is: "+formulaAustria+ "€.";
	}

	else if (countrySelected === 'Greece') {
		var formula = "Dear: "+clientName+", the your insurance cost for the car that you choose is: "+formulaGreece+" €.";
	}

	else if (countrySelected ==='Hungary') {
		var formula ="Dear: "+ clientName+", the your insurance cost for the car that you choose is: "+formulaHungary+" €.";
	}

	else {
		var formula = "Please fill all fields!";
	}

// document.getElementById('totalAmount').innerHTML=formula;
}


// Dear: francisco, the your insurance cost for the car that you choose is: 605€.
