// VARIABLES
var num1 = 0;
var num2 = 0;
var action = false;
var method = "none";
var results = 0;
var arr = [];

// NUMPAD BUTTONS

$(".numBtn").click(function(){

	if(num1 === 0 && !action){
		console.log("pirmas");
		num1 = $(this).text();
		$("h1").text(num1);
		num2 = num1;
	}

	else if(action){
			if(num1 === 0){
				console.log("Antro pirmas");
				num1 = $(this).text();
				num2 = num1;
				$("h1").text(arr[(arr.length-1)] + " " + method + " " + num2);
				num2 = num1;
			}
			else{
				console.log("antro antras");
				num1 = $(this).text();
				num2 = num2 + num1;
				$("h1").text(arr[(arr.length-1)] + " " + method + " " + num2);
			}
	}

	else{
		console.log("trecias");
		num1 = $(this).text();
		num2 = num2 + num1;
		$("h1").text(num2);
	}

});

// FUNCTION BUTTONS

$(".funcBtn").click(function(){
	
	// ADDITION

	if($(this).text() === "+"){
		if(!action){
			arr.push($("h1").text());
			$("h1").text(arr[(arr.length-1)] + " + ");
			action = true;
			method = "+";
			num1 = 0;
			num2 = 0;
			}

		else{
			arr.push(num2);
			results = Number(arr[(arr.length-1)]) + Number(arr[(arr.length-2)]);
			arr.push(results);
			$("h1").text(arr[arr.length-1] + " + ");
			num1 = 0;
			num2 = 0;
			unwrap();
		}
	}
	
	// SUBTRACTION

	if($(this).text() === "-"){
		if(!action){
			arr.push($("h1").text());
			$("h1").text(arr[(arr.length-1)] + " - ");
			action = true;
			method = "-";
			num1 = 0;
			num2 = 0;
		}

		else{
			arr.push(num2);
			results = Number(arr[(arr.length-2)]) - Number(arr[(arr.length-1)]);
			arr.push(results);
			$("h1").text(arr[arr.length-1] + " - ");
			num1 = 0;
			num2 = 0;
			unwrap();
		}
	}

	// EQUALS

	else if($(this).text() === "="){
		if(method === "+"){
			arr.push(num2);
			results = Number(arr[(arr.length-1)]) + Number(arr[(arr.length-2)]);
			arr.push(results);
			$("h1").text(arr[arr.length-1]);
			num1 = 0;
			num2 = 0;
			action = false;
			unwrap();
		}

		else if(method === "-"){
			arr.push(num2);
			results = Number(arr[(arr.length-2)]) - Number(arr[(arr.length-1)]);
			arr.push(results);
			$("h1").text(arr[arr.length-1]);
			num1 = 0;
			num2 = 0;
			action = false;
			unwrap();
		}
	}

	// RESET

	else if($(this).text() === "C"){
		$("h1").text("0");
		arr = [];	
		num1 = 0;
		num2 = 0;
		action = false;
		method = "none";
		results = 0;
		$("#unwrap").text("");
	}

});

function unwrap(){
		$("#unwrap").text(arr[(arr.length-3)] + " " + method + " " + arr[(arr.length-2)])
};