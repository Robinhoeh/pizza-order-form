
const nextItemBtn = $('.next-item-button');

function countdown(endDate) {
	let days, hours, minutes, seconds;

	endDate = new Date(endDate).getTime();

	if(isNaN(endDate)) { return; }
	 setInterval(calculate, 1000);

	function calculate() {
		let startDate = new Date();
		startDate = startDate.getTime();
		console.log(startDate);
		let timeRemaining = Number((endDate - startDate) /1000);
	}
}

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
		$('.order-summary').html(orderSummaryMsg).append(orderSummary);
		
		let inputButton = $(':input');
		inputButton.val('Reorder');

	});	
	
	nextItemBtn.on('click', function(e){
		e.preventDefault();
		const currentBtn = $(e.currentTarget);
		const formItem = currentBtn.closest('.form-item');
		formItem.addClass('next-item-animate');
	});


