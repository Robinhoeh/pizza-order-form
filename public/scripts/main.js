// Name Spaced Object
const pizzaApp = {};

// Init Function
pizzaApp.init = function () {

	pizzaApp.nextItemBtn = $('.next-item-button');
	
	// countdown - hard coded
	// Create a countdown timer for 35:00 minutes

	pizzaApp.startTimer = function(duration, display) {
		let timer = duration, minutes, seconds;
		setInterval(function() {
			minutes = parseInt(timer / 60, 10);
			seconds = parseInt(timer % 60, 10);

			minutes = minutes < 10 ? "0" + minutes : minutes;
			seconds = seconds < 10 ? "0" + seconds : seconds;

			display.text(`${minutes}: ${seconds}`);

			if (--timer < 0) {
				timer = duration;
			}
		}, 1000);
	}

	$(function($) {
		let thirtyFiveMinutes = 60 * 35,
		display = $('.timer');
		pizzaApp.startTimer( thirtyFiveMinutes, display);
	});



	
	// pizzaApp.countdown = function(endDate) {
	// 	let hours, minutes, seconds;
	
	// 	pizzaApp.endDate = new Date(pizzaApp.endDate).getTime();
	
	// 	if(isNaN(pizzaApp.endDate)) { 
	// 		return; 
	// 	}
		
	// 	setInterval(pizzaApp.calculate, 1000);
	
	// 	pizzaApp.calculate = function () {
	// 		let startDate = new Date();
	// 		startDate = startDate.getTime();
	
	// 		let timeRemaining = parseInt((pizzaApp.endDate - startDate) /1000);
	
	// 		if (timeRemaining >= 0) {
	
	// 			pizzaApp.hours = parseInt(timeRemaining / 3600);
	// 			pizzaApp.timeRemaining = (timeRemaining % 3600);
	
	// 			pizzaApp.minutes = parseInt(timeRemaining / 60);
	// 			pizzaApp.timeRemaining = (timeRemaining % 60);
	
	// 			pizzaApp.seconds = parseInt(timeRemaining);
	
	// 			document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
	// 			document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
	// 		} else{
	// 			return;
	// 		}
	// 	}
	// }
	
	// on load - focus on input
	$('#pizzaSize').focus();
	
	// Listen for selected toppings
	$('input').on('click', function() {
		pizzaApp.userSelectedToppings = [];
		$('.option-4 input:checked').each( function() {
			pizzaApp.userSelectedToppings.push( $(this).val() );
		})
	});

	// order form
	$('.form').on('submit', function(e){
		e.preventDefault();

		
	
	// Define UI Variables

		pizzaApp.pizzaSize = $('#pizzaSize option:selected').val();
		pizzaApp.doughType = $('#doughType option:selected').val();
		pizzaApp.sauceType = $('#sauceType option:selected').val();
		pizzaApp.toppingItems = pizzaApp.userSelectedToppings;
		pizzaApp.cheeseType = $('#cheeseType option:selected').val();
		pizzaApp.storeType = $('#storeType option:selected').val();
		
		
		pizzaApp.orderSummaryMsg = `<h2>Thanks for ordering!</h2>`;
		pizzaApp.readyTimeMsg = `<h2>Your order will be ready in:</h2>`;
		pizzaApp.orderSummary = `<h3>Pizza size: ${pizzaApp.pizzaSize}</h3>
		<h3>Dough Type: ${pizzaApp.doughType}</h3> 
		<h3>Sauce Type: ${pizzaApp.sauceType}</h3>
		<h3>Topping items: ${pizzaApp.toppingItems.toString()}</h3>
		<h3>Cheese type: ${pizzaApp.cheeseType}</h3> 
		<h3>Store location: ${pizzaApp.storeType}</h3>`;
		$('.order-summary').html(pizzaApp.orderSummaryMsg).append(pizzaApp.orderSummary).append(pizzaApp.readyTimeMsg);
		
		(function () { 
			pizzaApp.countdown('06/12/2018 07:30:00 PM'); 
		}());
		
	// closing on submit
	});	

	
	pizzaApp.nextItemBtn.on('click', function(e){
		e.preventDefault();
		pizzaApp.currentBtn = $(e.currentTarget);
		pizzaApp.formItem = pizzaApp.currentBtn.closest('.form-item');
		pizzaApp.formItem.addClass('next-item-animate');
	});
	
	$('.reset').on('click', function () {
		location.reload();
	});
}

// Init function
$(function() {
	pizzaApp.init();
})
