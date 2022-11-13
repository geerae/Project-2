$('.content-demo-area1').hide();
$('.content-demo-area2').hide();
$('.content-demo-area3').hide();
$('.content-demo-area4').hide();
$('.content-demo-area5').hide();

//----------------------------------------------

$(document).ready(function() {
    $('.btn-demo-area1').click(function() {
        $('.content-demo-area1').animate({
            width: "toggle"
        }, 1000);

        if ($('.btn-demo-area1').on('click'));
        $('.content-demo-area2').hide();
        $('.content-demo-area3').hide();
        $('.content-demo-area4').hide();
        $('.content-demo-area5').hide();
    
    $('.btn-demo-area1').css('background-color', '#198754');
        
    if ($('.btn-demo-area1').on('click'));
    $('.btn-demo-area2').css('background-color', 'white');
    $('.btn-demo-area3').css('background-color', 'white');
    $('.btn-demo-area4').css('background-color', 'white');
    $('.btn-demo-area5').css('background-color', 'white');
    });
});

$(document).ready(function() {
    $('.btn-demo-area2').click(function() {
        $('.content-demo-area2').animate({
            width: "toggle"
        }, 1000);

        if ($('.btn-demo-area2').on('click'));
        $('.content-demo-area1').hide();
        $('.content-demo-area3').hide();
        $('.content-demo-area4').hide();
        $('.content-demo-area5').hide();
    
    $('.btn-demo-area2').css('background-color', '#198754');
        
    if ($('.btn-demo-area2').on('click'));
    $('.btn-demo-area1').css('background-color', 'white');
    $('.btn-demo-area3').css('background-color', 'white');
    $('.btn-demo-area4').css('background-color', 'white');
    $('.btn-demo-area5').css('background-color', 'white');
    });
});

$(document).ready(function() {
    $('.btn-demo-area3').click(function() {
        $('.content-demo-area3').animate({
            width: "toggle"
        }, 1000);

        if ($('.btn-demo-area3').on('click'));
        $('.content-demo-area1').hide();
        $('.content-demo-area2').hide();
        $('.content-demo-area4').hide();
        $('.content-demo-area5').hide();
    
    $('.btn-demo-area3').css('background-color', '#198754');
        
    if ($('.btn-demo-area3').on('click'));
    $('.btn-demo-area1').css('background-color', 'white');
    $('.btn-demo-area2').css('background-color', 'white');
    $('.btn-demo-area4').css('background-color', 'white');
    $('.btn-demo-area5').css('background-color', 'white');
    });
});

$(document).ready(function() {
    $('.btn-demo-area4').click(function() {
        $('.content-demo-area4').animate({
            width: "toggle"
        }, 1000);

        if ($('.btn-demo-area4').on('click'));
        $('.content-demo-area1').hide();
        $('.content-demo-area2').hide();
        $('.content-demo-area3').hide();
        $('.content-demo-area5').hide();
    
    $('.btn-demo-area4').css('background-color', '#198754');
        
    if ($('.btn-demo-area4').on('click'));
    $('.btn-demo-area1').css('background-color', 'white');
    $('.btn-demo-area2').css('background-color', 'white');
    $('.btn-demo-area3').css('background-color', 'white');
    $('.btn-demo-area5').css('background-color', 'white');
    });
});

$(document).ready(function() {
    $('.btn-demo-area5').click(function() {
        $('.content-demo-area5').animate({
            width: "toggle"
        }, 1000);

        if ($('.btn-demo-area5').on('click'));
        $('.content-demo-area1').hide();
        $('.content-demo-area2').hide();
        $('.content-demo-area3').hide();
        $('.content-demo-area4').hide();
    
    $('.btn-demo-area5').css('background-color', '#198754');
        
    if ($('.btn-demo-area5').on('click'));
    $('.btn-demo-area1').css('background-color', 'white');
    $('.btn-demo-area2').css('background-color', 'white');
    $('.btn-demo-area3').css('background-color', 'white');
    $('.btn-demo-area4').css('background-color', 'white');
    });
});


//----------------------------------------------------------------
//FILE UPLOAD

const image_input = document.querySelector("#image-input");

image_input.addEventListener("change", function() {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`;
  });
  reader.readAsDataURL(this.files[0]);
});

//----------------------------------------------------------------
//DRAG AND DROP

//-------------------------------------		
//Use JQuery to manipulate CSS style
$('h2').css({
	'text-align': 'center',
	'padding': '20px',
	'color': 'black' ,
	'border': 'black'
  });
  
  //-------------------------------------		
  $(".box" ).draggable({
	scope: 'demoBox',
	revertDuration: 100,
	start: function( event, ui ) {
	  //Reset
	  $( ".box" ).draggable( "option", "revert", true );
	  $('.result').html('-');
	}
  });
  
  $(".drag-area" ).droppable({
	 scope: 'demoBox',
	 drop: function( event, ui ) {
	   let area = $(this).find(".drop-area").html();
	   let box = $(ui.draggable).html();     
	   $( ".box" ).draggable( "option", "revert", false );
	   
	   //Display action in text
	   $('.result').html("[Action] <b>" + box + "</b>" +
						 " dropped on " + 
						 "<b>" + area + "</b>");
	   
	   //Re-align item
	   $(ui.draggable).detach().css({top: 0,left: 0}).appendTo(this);
	 }
  });

//----------------------------------------------------------------
//GEO LOCATION

let x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
}  



//----------------------------------------------------------------
//MAP

$('svg path').each(function(index, item) {
    var id = $(item).attr('id');
        
    $('svg #' + id).on('click', function(e) {
        var id = $(e.currentTarget).attr('id');
        $('svg path').removeClass('active');
        $(e.currentTarget).addClass('active');
        window.alert(id + ' Clicked');
    });
});

  

