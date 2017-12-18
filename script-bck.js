var num1;
var num2 = 0;
var action = false;
var method = "none";

var var1 = 0;
var var2 = 0;
var var3 = 0;

var results = 0;

var arr = [];

// NUMPAD BUTTONS

$(".numBtn").click(function(){

	if(num2 === 0 && !action){
		num1 = $(this).text();
		$("h1").text(num1);
		num2 = num1;
	}

	else if(action){
		if(num2 === 0){
			num1 = $(this).text();
			$("h1").text(arr[(arr.length-1)] + " + " + num1);
			num2 = num1;
			var3 = num2;
		}

		else{
			num1 = $(this).text();
			num2 = num2 + num1;
			var3 = num2;
			$("h1").text(var2 + num2);
		}
	}

	else{
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
			var1 = $("h1").text();
			$("h1").text(var1 + " + ");
			arr.push(num2);
			action = true;
			method = "add";
			var2 = $("h1").text();
			num1 = 0;
			num2 = 0;

		}
		else{
			results = parseInt(var1)+parseInt(var3);
			console.log(results);
			$("h1").text(results + " + ");
			arr.push(var3);
			var1 = results;
			var2 = $("h1").text();
			num1 = 0;
			num2 = 0;
			var3 = 0;

			method = "add";
		}
	}
	
	// SUBTRACTION

	else if($(this).text() === "-"){
		if(!action){
			var1 = $("h1").text();
			$("h1").text(var1 + " - ");
			action = true;
			method = "sub";
			var2 = $("h1").text();
			num1 = 0;
			num2 = 0;
		}
		else{
			results = parseInt(var1)-parseInt(var3);
			console.log(results);
			$("h1").text(results + " - ");
			var1 = results;
			var2 = $("h1").text();
			num1 = 0;
			num2 = 0;
			var3 = 0;

			method = "sub";
		}
	}

	// EQUALS

	else if($(this).text() === "="){
		if(method === "add"){
			results = parseInt(var1)+parseInt(var3);
			console.log(results);
			$("h1").text(results);
			arr.push(var3);
			arr.push(results);
			var1 = results;
			method = "none";
			var2 = $("h1").text();
			num2 = 0;
			action = false;
		}

		if(method === "sub"){
			results = parseInt(var1)-parseInt(var3);
			console.log(results);
			$("h1").text(results);
			var1 = results;
			var2 = $("h1").text();
			method = "none";
			num2 = 0;
			action = false;
		}
	}

	// RESET

	else if($(this).text() === "C"){
		$("h1").text("0");
		num1 = 0;
		num2 = 0;
		action = false;
		method = "none";
		var1 = 0;
		var2 = 0;
		var3 = 0;
		results = 0;
	}

});