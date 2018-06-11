'use strict';

var nextItemBtn = $('.next-item-button');

function countdown(endDate) {
	var days = void 0,
	    hours = void 0,
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
		console.log(startDate);
		var timeRemaining = Number((endDate - startDate) / 1000);
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

	var orderSummaryMsg = '<h2>Thanks for ordering!</h2>';
	var orderSummary = '<h3>Pizza size: ' + pizzaSize + '</h3>\n\t\t<h3>Dough Type: ' + doughType + '</h3> \n\t\t<h3>Sauce Type: ' + sauceType + '</h3>\n\t\t<h3>Topping items: ' + toppingItems + '</h3>\n\t\t<h3>Cheese type: ' + cheeseType + '</h3> \n\t\t<h3>Store location: ' + storeType + '</h3>';
	$('.order-summary').html(orderSummaryMsg).append(orderSummary);

	var inputButton = $(':input');
	inputButton.val('Reorder');
});

nextItemBtn.on('click', function (e) {
	e.preventDefault();
	var currentBtn = $(e.currentTarget);
	var formItem = currentBtn.closest('.form-item');
	formItem.addClass('next-item-animate');
});