var str;
$("#f2").click(function () {
	$(".two").css('opacity', '1');
	$(".one").css('opacity', '0');
	$(".three").css('opacity', '0');
	$("#f2").css('text-decoration', 'underline');
	$("#f1").css('text-decoration', 'none');
	$("#f3").css('text-decoration', 'none');


});
$("#f1").click(function () {
	$(".two").css('opacity', '0');
	$(".one").css('opacity', '1');
	$(".three").css('opacity', '0');
	$("#f1").css('text-decoration', 'underline');
	$("#f2").css('text-decoration', 'none');
	$("#f3").css('text-decoration', 'none');


});
$("#f3").click(function () {
	$(".two").css('opacity', '0');
	$(".one").css('opacity', '0');
	$(".three").css('opacity', '1');
	$("#f3").css('text-decoration', 'underline');
	$("#f1").css('text-decoration', 'none');
	$("#f2").css('text-decoration', 'none');


});
var b = 1;
$(".M").click(function () {
	if (b == 1) {
		b = 0;
		$(".knopka").css('margin-left', '50%');
	}
	else {
		b = 1;
		$(".knopka").css('margin-left', '100%');
	}

});
$('.Zak3').click(function () {

	$(".dark").css('display', 'initial');
	$(".forma").css('margin-top', '2%');

});$('.Zak1').click(function () {

	$(".dark").css('display', 'initial');
	$(".forma").css('margin-top', '2%');

});$('.Zak').click(function () {

	$(".dark").css('display', 'initial');
	$(".forma").css('margin-top', '2%');

});


$('#Add_elem_1').click(function () {
	$("#clone").append("<div id='clone1' class='vvod'> <input class='inputs1' type='text' value='. . .'/> <input class='inputs2' type='text' /> </div >");

});
$('#Add_elem_2').click(function () {
	$("#clone1").remove();
	
});
$('#Add_elem_3').click(function () {
	$("#clone2").append("<div id='clone3' class='vvod'> <input class='inputs1' type='text' value='. . .'/> <select class='inputs2' type='text'> < option > 250ml</option > <option>500ml</option><option>750ml</option></select > </div >");

});
$('#Add_elem_4').click(function () {
	if ($("#clone3").css('display', 'initial'))$("#clone3").remove();

});


$("#Zak").click(function () {
	
		$(".dark").css('display', 'initial');
	$(".forma").css('margin-top', '2%');

}); $(".send").click(function () {
	//if ($(".contacts_text1").val() == " + 375" || $(".contacts_text2").val() == " . . ." || $(".inputs1").val() == ". . ." || $(".inputs2").val() == "" || $(".place").val() == " Адрс доставки" || $(".phone").val() == " Телефон") {
	//
	$(".dark").css('display', 'initial');

		$(".forma").css('margin-top', '-100%');
		//$(".ansver").css('margin-left', '35%');
		//alert("sdsd");
	//}
	//else {
		//$(".forma").css('margin-top', '-100%');
		$(".ansver").css('margin-left', '35%');
	//}

}); $(".ok").click(function () {
	//if ($(".contacts_text1").val() == " + 375" || $(".contacts_text2").val() == " . . ." || $(".inputs1").val() == ". . ." || $(".inputs2").val() == "") {
	//}
	//else {
	$(".ansver").css('margin-left', '135%');

		$(".dark").css('display', 'none');
	//}

}); $(".writeln").click(function () {

	$(".dark").css('display', 'initial');
	$(".forma").css('margin-top', '2%');

});$(".dark").click(function () {

		$(".forma").css('margin-top', '-100%');
		$(".dark").css('display', 'none');

});
//$*(".Else").click(function () {
	//$(".tort").css('transform', 'translate3d(00px, 300px, 0px)');
	//$(".tort").css('opacity', '0');
//	$(".drinks").css('opacity', '1');
	
//});*

var a;
if ($('.first_block').offset().top < $('.parallax').offset().top) {
	
		$('.meny2').css({
			'display': 'none'
		});
	
	a = 1;
}
else {
	if ($(window).width() > ('1300')) {
		$('.meny2').css({
			'display': 'initial '
		});

	}
	a = 2;

}
$(window).scroll(function () {
	if ($('.first_block').offset().top < $('.parallax').offset().top) {
		if (a == 2) {
			$('.meny2').css({
				'display': 'none'
			});
		}
			a = 1;
	}
	else {
		
		if ((a == 1) && ($(window).width() > ('1300'))) {
			$('.meny2').css({
				'display': 'initial'

			}); 

		}
		a = 2;

	}
})
