let proxy = 'https://cors-anywhere.herokuapp.com/';
let url = 'http://danieldangs.com/itwd6408/json/faqs.json';


$.getJSON(
	proxy + url,
	function(data) {
		$.each(data, function(i, question) { 
			let content = `
				<div class="w-75 p-3 mx-5">
					<div class="h-100" style="background-color: #eba286">
						<h4>${question.question}</h4>
						<p>${question.answer}</p>
					</div>
				</div> 
			`;
			$('#questions').append(content);
		});
	} 
);


$('#search-box').on('keyup', function() {

	let keywords = $(this).val().toLowerCase();
	$('#questions div').filter(function() { 
		$(this).toggle($(this).html().toLowerCase().indexOf(keywords) > -1);
	});
});