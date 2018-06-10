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

(function () {
	// Define UI Variables

	var pizzaSize = $('#pizzaSize option:selected').text();
	var doughType = $('#doughType option:selected').text();
	var sauceType = $('#sauceType option:selected').text();
	var toppingItems = $('.toppingItems input:checked').text();
	var cheeseType = $('#cheeseType option:selected').text();
	var storeType = $('#storeType option:selected').text();
});