$(document).ready(function() {
	
	var target_date = new Date().getTime() + (1000*30); // set the countdown date
	var minutes, seconds; // variables for time units
	
	var countdown = document.getElementById("tiles"); // get tag element
	
	getCountdown();
	
	setInterval(function(){getCountdown()}, 1000);
	
	function getCountdown(){
	
		// find the amount of "seconds" between now and target
		var current_date = new Date().getTime();
		var seconds_left = (target_date - current_date) / 1000;
	   
		minutes = pad( parseInt(seconds_left / 60) );
		seconds = pad( parseInt( seconds_left % 60 ) );
	
		// format countdown string + set tag value
		countdown.innerHTML = "<span>" + minutes + "</span><span>" + seconds + "</span>"; 
		
	}
	
	function pad(n) {
		return (n < 10 ? '0' : '') + n;
	}
	
});