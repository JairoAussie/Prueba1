//when the button is pressed 
// $('.spoiler button').click(function(){
	//show the spoiler
	// $('.spoiler span').show();
	//hide "reveal spoiler"
	// $('.spoiler button').hide();
// });
$('.spoiler').on('click', 'button', function(event){
	//show the spoiler
	$(event.target).prev().show();
	//$(this).prev().show();
	//hide "reveal spoiler"
	$(event.target).hide();
});

//create the "reveal spoiler" button
const $button = $('<button>Reveal Spoiler</button>');
//Append to the webpage
$('.spoiler').append($button);

// hide the spoiler text
$('.spoiler span').hide();

	
	





