//Simple Calculator.
function calculator(firstNumber, secondNumber, operator) {
  firstNumber = parseFloat(prompt("Write down your first number."));
  operator = prompt("Write down your operator. Such as: +, -, *. /");
  secondNumber = parseFloat(prompt("Write down your second number."));
  if (operator == "+") {
    var result = firstNumber + secondNumber;
    swal(
      "Result",
      +firstNumber + " " + "+" + " " + secondNumber + " " + "=" + " " + result,
      "success"
    );
  } else if (operator == "-") {
    var result = firstNumber - secondNumber;
    swal(
      "Result",
      +firstNumber + " " + "-" + " " + secondNumber + " " + "=" + " " + result,
      "success"
    );
  } else if (operator == "*") {
    var result = firstNumber * secondNumber;
    swal(
      "Result",
      +firstNumber + " " + "*" + " " + secondNumber + " " + "=" + " " + result,
      "success"
    );
  } else if (operator == "/") {
    var result = firstNumber / secondNumber;
    swal(
      "Result",
      +firstNumber + " " + "/" + " " + secondNumber + " " + "=" + " " + result,
      "success"
    );
  } else {
    swal("Result", "Somethhing went wrong.", "error");
  }
}

//Banking Calculator.
function simpleProfit(principal, rateOfInterest, time) {
  principal = parseFloat(prompt("Write down your principal"));
  rateOfInterest = parseFloat(prompt("Write down your rate of interest"));
  time = parseFloat(prompt("Write your time."));
  var rateOfInterest = rateOfInterest / 100;
  var result = principal * rateOfInterest * time;
  if (result) {
    swal("Result", "Your profit is" + " " + "$" + result + "/=", "success");
  } else {
    swal("Result", "Somethhing went wrong.", "error");
  }
}

function principal(profit, rateOfInterest, time) {
  profit = parseFloat(prompt("Write down your profit"));
  rateOfInterest = parseFloat(prompt("Write down your rate of interest"));
  time = parseFloat(prompt("Write your time."));
  var rateOfInterest = rateOfInterest / 100;
  var result = rateOfInterest * time;
  var result2 = profit / result;

  if (result2) {
    swal("Result", "Your principal is" + " " + "$" + result2 + "/=", "success");
  } else {
    swal("Result", "Somethhing went wrong.", "error");
  }
}

function rateOfInterest(profit, principal, time) {
  profit = parseFloat(prompt("Write down your profit"));
  principal = parseFloat(prompt("Write down your principal"));
  time = parseFloat(prompt("Write your time."));
  var result = principal * time;
  var result2 = profit / result;
  result2 = result2 * 100;

  if (result2) {
    swal("Result", "Your rate of interest is" + " " + result2 + "%", "success");
  } else {
    swal("Result", "Somethhing went wrong.", "error");
  }
}

function time(profit, principal, rateOfInterest) {
  profit = parseFloat(prompt("Write down your profit"));
  principal = parseFloat(prompt("Write down your principal"));
  rateOfInterest = parseFloat(prompt("Write down your rate of interest"));
  var rateOfInterest = rateOfInterest / 100;
  var result = principal * rateOfInterest;
  var result2 = profit / result;
  if (result2 == 1) {
    swal("Result", "Your time is" + " " + result2 + " " + "year", "success");
  } else if (result2 <= 1) {
    var result3 = result2 * 12;
    swal("Result", "Your time is" + " " + result3 + " " + "months", "success");
  } else if (result2) {
    swal("Result", "Your time is" + " " + result2 + " " + "years", "success");
  } else {
    swal("Result", "Somethhing went wrong.", "error");
  }
}

function totalAmount(principal, rateOfInterest, time) {
  principal = parseFloat(prompt("Write down your principal"));
  rateOfInterest = parseFloat(prompt("Write down your rate of interest"));
  time = parseFloat(prompt("Write your time."));
  var rateOfInterest = rateOfInterest / 100;
  var result = principal * rateOfInterest * time;
  var finalResult = principal + result;

  if (finalResult) {
    swal(
      "Result",
      "Your total amount is" + " " + "$" + finalResult + "/=",
      "success"
    );
  } else {
    swal("Result", "Somethhing went wrong.", "error");
  }
}
// Temparature Converter
function celsiusToFah(celsius) {
  celsius = parseFloat(prompt("Write your celsius."));
  var result = celsius * 33.8;
  var result = result.toFixed(4);
  swal(
    "Result",
    celsius + " " + "Celcius is equal to" + " " + result + " " + "Fahrenheit.",
    "success"
  );
}

function fahToCelsius(fah) {
  fah = parseFloat(prompt("Write your fahrenheit."));
  var result = fah - 32;
  var result2 = result * (5 / 9);
  var result2 = result2.toFixed(4);
  swal(
    "Result",
    fah + " " + "Fahrenheit is equal to" + " " + result2 + " " + "Celsious.",
    "success"
  );
}

//Currency Converter

function bdtToUsd(bdt) {
  bdt = parseFloat(prompt("Write your BDT."));
  var result = bdt * 0.0117;
  var result = result.toFixed(2);
  swal(
    "Result",
    "BDT" + " " + bdt + " " + "is equal to" + " " + "USD" + " " + result,
    "success"
  );
}

function usdToBdt(usd) {
  usd = parseFloat(prompt("Write your USD."));
  var result = usd * 85.13;
  var result = result.toFixed(2);
  swal(
    "Result",
    "USD" + " " + usd + " " + "is equal to" + " " + "BDT" + " " + result,
    "success"
  );
}

//Length converter.
function meterToFt(meter) {
  meter = parseFloat(prompt("Write your meter."));
  var result = meter * 3.28;
  swal(
    "Result",
    meter + " " + "meter is equal to" + " " + result + " " + "feet.",
    "success"
  );
}

function meterToInch(meter) {
  meter = parseFloat(prompt("Write your meter."));
  var result = meter * 39.37;
  swal(
    "Result",
    meter + " " + "meter is equal to" + " " + result + " " + "inch.",
    "success"
  );
}

AOS.init();
