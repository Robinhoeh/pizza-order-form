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

$(function(){

	// next item button
	const nextItemBtn = $('.next-item-button');

	// const formItem = $('.form-item');
	
	
	$('.form').on('submit', function(e){
		e.preventDefault();
		
		// Define UI Variables
		const pizzaSize = $('#pizzaSize option:selected').val();
		const doughType = $('#doughType option:selected').val();
		const sauceType = $('#sauceType option:selected').val();
		const toppingItems = $('.toppingItems input:checked').val();
		const cheeseType = $('#cheeseType option:selected').val();
		const storeType = $('#storeType option:selected').val();
		
	});	
	
	nextItemBtn.on('click', function(e){
		const currentBtn = $(e.currentTarget);
		const formItem = currentBtn.closest('.form-item');
		console.log("expecting form item",formItem);
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