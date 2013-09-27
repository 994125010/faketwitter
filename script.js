$('.post').click(function() {
	what_the_user_typed = $('textarea').val();
	if (what_the_user_typed.length == 0 || what_the_user_typed.length > 140) {
		alert("Please type a tweet between 1 and 140 characters");
	}
	else {
		$('#right').prepend('<div class="cell"><p>' + what_the_user_typed + '</p></div>');
		$('textarea').val('');
	}
});