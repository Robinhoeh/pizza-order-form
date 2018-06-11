let countdown;
const displayTimeRemaining = $('.display-time-remaining');

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