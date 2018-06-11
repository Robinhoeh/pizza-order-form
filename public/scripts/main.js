'use strict';

var countdown = void 0;
var displayTimeRemaining = $('.display-time-remaining');

$(function () {

	var nextItemBtn = $('.next-item-button');

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
		$('.order-summary').html(orderSummary);

		var inputButton = $(':input');
		inputButton.val('Reorder');
	});

	nextItemBtn.on('click', function (e) {
		e.preventDefault();
		var currentBtn = $(e.currentTarget);
		var formItem = currentBtn.closest('.form-item');
		formItem.addClass('next-item-animate');
	});
});