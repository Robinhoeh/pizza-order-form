'use strict';

/* 
lightbox
form
array
timer runs down from when you hit order based on object holding 
location and times

1. what size of pizza? 
s, m, l, xl
	 - based on size there will be a fixed price
2. What Dough do you want?
 - wheat, regular, gluten free
3. What sauce do you want?
4. What cheese do you want?
5. What Toppings do you want?
5.1 randomize order button - replicate prophesize me random from each object
6. Where do you want it delivered? 
	input your address here
7. Display order summary before submitting: 
location
price

8. Display time it will take and  to order on submit
9. Thank you for your order
*/

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