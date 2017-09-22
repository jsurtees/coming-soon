function openNav() {
    document.getElementById("mySidenav").style.width = "35%";
    document.getElementById("main").style.marginRight = "35%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
}

$("#hamburger").click(function() {
  $('.transformburg').toggleClass('transformburg-active');
});

$(document).ready(function(){
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
	});
});


//
// $('.nav-close').click(function() {
//   $('.nav-close').hide();
//   $('.nav-open').show();
// });
//
// $('.nav-open').click(function() {
//   $('.nav-close').show();
//   $('.nav-open').hide();
// });
