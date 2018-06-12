"use strict";

var nextItemBtn = $('.next-item-button');

function countdown(endDate) {
	var hours = void 0,
	    minutes = void 0,
	    seconds = void 0;

	endDate = new Date(endDate).getTime();

	if (isNaN(endDate)) {
		return;
	}

	setInterval(calculate, 1000);

	function calculate() {
		var startDate = new Date();
		startDate = startDate.getTime();

		var timeRemaining = parseInt((endDate - startDate) / 1000);

		if (timeRemaining >= 0) {

			hours = parseInt(timeRemaining / 3600);
			timeRemaining = timeRemaining % 3600;

			minutes = parseInt(timeRemaining / 60);
			timeRemaining = timeRemaining % 60;

			seconds = parseInt(timeRemaining);

			document.getElementById("hours").innerHTML = ("0" + hours).slice(-2);
			document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
			document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
		} else {
			return;
		}
	}
}
$('.form').on('submit', function (e) {
	e.preventDefault();

	// Define UI Variables
	var pizzaSize = $('#pizzaSize option:selected').val();
	var doughType = $('#doughType option:selected').val();
	var sauceType = $('#sauceType option:selected').val();
	var toppingItems = $('checkbox:checked').val();
	var cheeseType = $('#cheeseType option:selected').val();
	var storeType = $('#storeType option:selected').val();

	var orderSummaryMsg = "<h2>Thanks for ordering!</h2>";
	var readyTimeMsg = "<h2>Your order will be ready in:</h2>";
	var orderSummary = "<h3>Pizza size: " + pizzaSize + "</h3>\n\t<h3>Dough Type: " + doughType + "</h3> \n\t<h3>Sauce Type: " + sauceType + "</h3>\n\t<h3>Topping items: " + toppingItems + "</h3>\n\t<h3>Cheese type: " + cheeseType + "</h3> \n\t<h3>Store location: " + storeType + "</h3>";
	$('.order-summary').html(orderSummaryMsg).append(orderSummary).append(readyTimeMsg);

	(function () {
		countdown('06/12/2018 07:30:00 PM');
	})();
});

nextItemBtn.on('click', function (e) {
	e.preventDefault();
	var currentBtn = $(e.currentTarget);
	var formItem = currentBtn.closest('.form-item');
	formItem.addClass('next-item-animate');
});

$('.reset').on('click', function () {
	$('.form').reset();
});