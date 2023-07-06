$(document).ready(function (){
$("a").click(function() {
	var target = '#' + this.getAttribute('data-target');
	console.log(target);
    $('html,body').animate({
        scrollTop: $(target).offset().top},
        'slow');
});
});
