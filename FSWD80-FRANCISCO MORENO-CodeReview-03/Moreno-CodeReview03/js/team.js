
// ----------------------------------------------CONTEINER COVERAGE INDEX ---------------------------------------------------------

// containerCoverage

for(i=0; i<textAndImageContainer.length; i++){
	document.getElementsByClassName("textAndImageContainer")[0].innerHTML+="<img src='"+textAndImageContainer[0].videolink+" 'alt='"+textAndImageContainer[0].alt+"'height='"+textAndImageContainer[0].height+"' width='"+textAndImageContainer[0].width+"' id='backgroundImageSize'>";
}

for(i=0; i<textTittle.length; i++){
	document.getElementsByClassName("textTittle")[0].innerHTML+="<h1>"+textTittle[0].text+"</h1>";
}


for (i = 0; i < teamMembers.length; i++) {
        document.getElementsByClassName('textUnderImage')[0].innerHTML+="<tr>";
        document.getElementsByClassName('textUnderImage')[0].innerHTML+="<table border='1' width=100 >";
        document.getElementsByClassName('textUnderImage')[0].innerHTML+="<tr><td><b>Name</b></td><td width=50>" + teamMembers[i].name + "</td></tr>";
        document.getElementsByClassName('textUnderImage')[0].innerHTML+="<tr><td><b>email</b></td><td width=50>" + teamMembers[i].email + "</td></tr>";
        document.getElementsByClassName('textUnderImage')[0].innerHTML+="<tr><td><b>pic</b></td><td><button id='buttonDriver'type ='button'>click here</button></td></tr>";
        document.getElementsByClassName('textUnderImage')[0].innerHTML+="</table>";
        document.getElementsByClassName('textUnderImage')[0].innerHTML+="</tr>";
    }

// -------------------------------------------------funtion picture --------------------------------------------------------------

// document.getElementById('buttonDriver').addEventListener("click", showDriver);

// var countryChoice = document.getElementById('countrySelection');


// function showdriver() {

//   var x = Math.floor((Math.random() * 3) + 1);
//   // document.getElementById("famouseDriver").innerHTML = x;

// }
// document.write(showdriver);

// // 	if (teamMembers === 'Fran') {
// // 		var pictureDriver = "img/marlon%20brando.gif";
// 	}

// 	else if (teamMembers === 'Bill') {
// 		var pictureDriver = "img/pierce%20brossman.gif";
// 	}

// 	else if (teamMembers ==='Fritz') {
// 		var pictureDriver ="img/shean%20Conory.gif";
// 	}

// document.getElementById('famouseDriver').innerHTML=pictureDriver;
// }




// -----------------------------------------------------end function picture ----------------------------------------------------------



// for(i=0; i<textUnderImage.length; i++){
// 	document.getElementsByClassName("textUnderImage")[0].innerHTML+="<h2><font color='#474646'>"+textUnderImage[0].line1+"</font></h2>";
// 	document.getElementsByClassName("textUnderImage")[0].innerHTML+="<h2><font color='#474646'>"+textUnderImage[0].line2+"</font></h2>";
// 	document.getElementsByClassName("textUnderImage")[0].innerHTML+="<h2><font color='#474646'>"+textUnderImage[0].line3+"</font></h2>";
// 	document.getElementsByClassName("textUnderImage")[0].innerHTML+="<h2><font color='#474646'>"+textUnderImage[0].line4+"</font></h2>";
// 	document.getElementsByClassName("textUnderImage")[0].innerHTML+="<h2><font color='#474646'>"+textUnderImage[0].line5+"</font></h2>";
// 	document.getElementsByClassName("textUnderImage")[0].innerHTML+="<h2><font color='#474646'>"+textUnderImage[0].line6+"</font></h2>";
// 	document.getElementsByClassName("textUnderImage")[0].innerHTML+="<h2><font color='#474646'>"+textUnderImage[0].line7+"</font></h2>";
// 	document.getElementsByClassName("textUnderImage")[0].innerHTML+="<h2><font color='#474646'>"+textUnderImage[0].line8+"</font></h2>";
// 	document.getElementsByClassName("textUnderImage")[0].innerHTML+="<h2><font color='#474646'>"+textUnderImage[0].line9+"</font></h2>";
// }

// ----------------------------------------DATA INPUT INDEX ------------------------------------------------------------
//--------------------------------------------- dataInput
// for(i=0; i<titleDataInput.length; i++){
// 	document.getElementsByClassName("titleDataInput")[0].innerHTML+="<h2><font color='#474646'>"+titleDataInput[0].line1+"<span class= 'effectTittleDataInput'style='"+"color:"+"#249c44'>"+titleDataInput[0].line1a+"</span>"+"<span"+"color:"+"#474646'>"+titleDataInput[0].line1b+"</span>"+"<span class= 'effectTittleDataInput'style='"+"color:"+"#249c44'>"+titleDataInput[0].line1c+"</span>"+"<span"+"color:"+"#474646'>"+titleDataInput[0].line1d+"</span>"+"<span class= 'effectTittleDataInput'style='"+"color:"+"#249c44'>"+titleDataInput[0].line1e+"</span>"+"<span"+"color:"+"#474646'>"+titleDataInput[0].line1f+"</span>"+"</font></h2>";
// 	document.getElementsByClassName("titleDataInput")[0].innerHTML+="<h2><font color='#474646'>"+titleDataInput[0].line2+"<span class= 'effectTittleDataInput'style='"+"color:"+"#249c44'>"+titleDataInput[0].line2a+"</span>"+"<span"+"color:"+"#474646'>"+titleDataInput[0].line2b+"</span>"+"<span"+"color:"+"#474646'>"+titleDataInput[0].line2c+"</span>"+"<span class= 'effectTittleDataInput'style='"+"color:"+"#249c44'>"+titleDataInput[0].line2d+"</span>"+"<span"+"color:"+"#474646'>"+titleDataInput[0].line2e+"</span>"+"</font></h2>";
// }

// for(i=0; i<nameDataInput.length; i++){
// 	document.getElementsByClassName("nameDataInput")[0].innerHTML+="<h2><font color='#474646'>"+nameDataInput[0].text+"</font></h2><br>";
// 	document.getElementsByClassName("nameDataInput")[0].innerHTML+="<input id = 'nameInput'type='"+nameDataInput[0].line1+"'name='"+nameDataInput[0].line2+"' value='"+nameDataInput[0].line3+"'><br>";
// }

// for(i=0; i<ageDataInput.length; i++){
// 	document.getElementsByClassName("ageDataInput")[0].innerHTML+="<h2><font color='#474646'>"+ageDataInput[0].text+"</font></h2><br>";
// 	document.getElementsByClassName("ageDataInput")[0].innerHTML+="<input id= 'ageInput'type='"+ageDataInput[0].line1+"'name='"+ageDataInput[0].line2+"' value='"+ageDataInput[0].line3+"'min= '"+ageDataInput[0].line4+"' max='"+ageDataInput[0].line5+"'><br>";
// }

// for(i=0; i<countryDataInput.length; i++){
// 	document.getElementsByClassName("countryDataInput")[0].innerHTML+="<h2><font color='#474646'>"+countryDataInput[0].text+"</font></h2><br>";
// 	document.getElementsByClassName("countryDataInput")[0].innerHTML+="<select id ='countrySelection'name='"+countryDataInput[0].text+"'><option value='"+countryDataInput[0].line1+"'>"+countryDataInput[0].line1+"</option><option value='"+countryDataInput[0].line2+"'>"+countryDataInput[0].line2+"</option><option value=' "+countryDataInput[0].line3+"'>"+countryDataInput[0].line3+"</option></select>";
// }

// for(i=0; i<horsePowerDataInput.length; i++){
// 	document.getElementsByClassName("horsePowerDataInput")[0].innerHTML+="<h2><font color='#474646'>"+horsePowerDataInput[0].text+"</font></h2><br>";
// 	document.getElementsByClassName("horsePowerDataInput")[0].innerHTML+="<input id = 'horsePowerInput' type='"+horsePowerDataInput[0].line1+"'horsepower='"+horsePowerDataInput[0].line2+"' value='"+horsePowerDataInput[0].line3+"'min= '"+horsePowerDataInput[0].line4+"' max='"+horsePowerDataInput[0].line5+"'><br>";
// }

// for(i=0; i<calculateButton.length; i++){
// 	document.getElementsByClassName("calculateButton")[0].innerHTML+="<button id='buttonExecution'type ='button'>Calculate</button>";
// }

// for(i=0; i<printCalculation.length; i++){
// 	document.getElementsByClassName("printCalculation")[0].innerHTML+="<p id= 'totalAmount'>"+printCalculation[0].line1+"</p><br>";
// 	}

// ----------------------------------------FUNCTION CALCULATE INSURANCE------------------------------------------------------------

//---------------------------------------- function CalculateInsurance()

// document.getElementById('buttonExecution').addEventListener("click", calculateInsurance);

// var countryChoice = document.getElementById('countrySelection');


// function calculateInsurance() {

// 	var clientName = document.getElementById('nameInput').value;

// 	var countrySelected = countryChoice.value;

// 	var horsePower = parseInt(document.getElementById('horsePowerInput').value);

// 	var clientAge = parseInt(document.getElementById('ageInput').value);


// 	var formulaAustria = Math.floor((horsePower * 100)/(clientAge)+50);
// 	var formulaGreece = Math.floor((horsePower *150)/(clientAge+3)+50);
// 	var formulaHungary = Math.floor((horsePower *120)/(clientAge)+100);

// 	if (countrySelected === 'Austria') {
// 		var formula = "Dear: "+clientName + ", the your insurance cost for the car that you choose is: "+formulaAustria+ "€.";
// 	}

// 	else if (countrySelected === 'Greece') {
// 		var formula = "Dear: "+clientName+", the your insurance cost for the car that you choose is: "+formulaGreece+" €.";
// 	}

// 	else if (countrySelected ==='Hungary') {
// 		var formula ="Dear: "+ clientName+", the your insurance cost for the car that you choose is: "+formulaHungary+" €.";
// 	}

// 	else {
// 		var formula = "Please fill all fields!";
// 	}

// document.getElementById('totalAmount').innerHTML=formula;
// }


// ----------------------------------------TABELS INDEX ------------------------------------------------------------


// for(i=0; i<textStandard.length; i++){
// 	document.getElementsByClassName("textStandard")[0].innerHTML+="<h2><font color='#045D7D'>"+textStandard[0].line1+"<font color='#474646'></h2>";
// 	document.getElementsByClassName("textStandard")[0].innerHTML+="<p><font color='#474646'>"+textStandard[0].line2+"</font></p>";
// 	document.getElementsByClassName("textStandard")[0].innerHTML+="<p><font color='#93E0FC'>&#10004;</font><font color='#474646'>"+textStandard[0].line3+"</font></p>";
// 	document.getElementsByClassName("textStandard")[0].innerHTML+="<p><font color='#93E0FC'>&#10004;</font></font><font color='#474646'>"+textStandard[0].line4+"</font></p>";
// 	document.getElementsByClassName("textStandard")[0].innerHTML+="<p><font color='#93E0FC'>&#10004;</font></font><font color='#474646'>"+textStandard[0].line5+"</font></p>";
// 	document.getElementsByClassName("textStandard")[0].innerHTML+="<font color='#474646'><hr></hr></font>";
// 	document.getElementsByClassName("textStandard")[0].innerHTML+="<p><b><font color='#474646'>"+textStandard[0].line6+"</font></b></p>";
// 	document.getElementsByClassName("textStandard")[0].innerHTML+="<p><font color='#474646'>"+textStandard[0].line7+"</font></p>";
// 	document.getElementsByClassName("textStandard")[0].innerHTML+="<p><font color='#474646'>"+textStandard[0].line8+"</font></p>";
// }

// for(i=0; i<protectionAndCoverage.length; i++){
// 	document.getElementsByClassName("protectionAndCoverage")[0].innerHTML+="<h2><font color='#045D7D'>"+protectionAndCoverage[0].line1+"</font></h2>";
// 	document.getElementsByClassName("protectionAndCoverage")[0].innerHTML+="<p><font color='#474646'>"+protectionAndCoverage[0].line2+"</font></p>";
// 	document.getElementsByClassName("protectionAndCoverage")[0].innerHTML+="<font color='#93E0FC'>&#10004;</font><font color='#474646'>"+protectionAndCoverage[0].line3+"</font></p>";
// 	document.getElementsByClassName("protectionAndCoverage")[0].innerHTML+="<font color='#93E0FC'>&#10004;</font><font color='#474646'>"+protectionAndCoverage[0].line4+"</font></p>";
// 	document.getElementsByClassName("protectionAndCoverage")[0].innerHTML+="<font color='#93E0FC'>&#10004;</font><font color='#474646'>"+protectionAndCoverage[0].line5+"</font></p>";
// 	document.getElementsByClassName("protectionAndCoverage")[0].innerHTML+="<font color='#474646'><hr></hr></font>";
// 	document.getElementsByClassName("protectionAndCoverage")[0].innerHTML+="<p><b><font color='#474646'>"+protectionAndCoverage[0].line6+"</font></b></p>";
// 	document.getElementsByClassName("protectionAndCoverage")[0].innerHTML+="<p><font color='#474646'>"+protectionAndCoverage[0].line7+"</font></p>";
// 	document.getElementsByClassName("protectionAndCoverage")[0].innerHTML+="<p><font color='#474646'>"+protectionAndCoverage[0].line8+"</font></p>";
// }






