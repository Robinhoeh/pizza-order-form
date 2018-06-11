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

	const nextItemBtn = $('.next-item-button');
	
	$('.form').on('submit', function(e){
		e.preventDefault();
		
		// Define UI Variables
		const pizzaSize = $('#pizzaSize option:selected').val();
		const doughType = $('#doughType option:selected').val();
		const sauceType = $('#sauceType option:selected').val();
		const toppingItems = $('checkbox:checked').val();
		const cheeseType = $('#cheeseType option:selected').val();
		const storeType = $('#storeType option:selected').val();


		const orderSummaryMsg = `<h2>Thanks for ordering!</h2>`;
		const orderSummary = `<h3>Pizza size: ${pizzaSize}</h3>
		<h3>Dough Type: ${doughType}</h3> 
		<h3>Sauce Type: ${sauceType}</h3>
		<h3>Topping items: ${toppingItems}</h3>
		<h3>Cheese type: ${cheeseType}</h3> 
		<h3>Store location: ${storeType}</h3>`;
		$('.order-summary').html(orderSummary);
		
		let inputButton = $(':input');
		inputButton.val('Reorder');
	});	
	
	nextItemBtn.on('click', function(e){
		e.preventDefault();
		const currentBtn = $(e.currentTarget);
		const formItem = currentBtn.closest('.form-item');
		formItem.addClass('next-item-animate');
	});
	
});