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

	// next item button
	var nextItemBtn = $('.next-item-button');

	// const formItem = $('.form-item');


	$('.form').on('submit', function (e) {
		e.preventDefault();

		// Define UI Variables
		var pizzaSize = $('#pizzaSize option:selected').val();
		var doughType = $('#doughType option:selected').val();
		var sauceType = $('#sauceType option:selected').val();
		var toppingItems = $('.toppingItems input:checked').val();
		var cheeseType = $('#cheeseType option:selected').val();
		var storeType = $('#storeType option:selected').val();

		var orderSummaryMsg = '<h2>Thanks for ordering!</h2>';
		var orderSummary = '<h3>Pizza size: ' + pizzaSize + ', Dough Type: ' + doughType + ', sauceType: ' + sauceType + ', toppingItems: ' + toppingItems + ', Cheese type: ' + cheeseType + ', Store location: ' + storeType + '</h3>';
		$('.order-summary').html(orderSummary);
	});

	nextItemBtn.on('click', function (e) {
		e.preventDefault();
		var currentBtn = $(e.currentTarget);
		var formItem = currentBtn.closest('.form-item');
		console.log("expecting form item", formItem);
		formItem.addClass('next-item-animate');
		console.log(currentBtn);
	});

	// $('.reset').on('submit', function(e){
	// 	e.preventDefault();

	// 	$('#pizzaSize option:selected').prop();
	// 	$('#doughType option:selected').prop();
	// 	$('#sauceType option:selected').prop();
	// 	$('.toppingItems input:checked').prop('checked', false);
	// 	$('#cheeseType option:selected').prop();
	// 	$('#storeType option:selected').prop();
	// });

});