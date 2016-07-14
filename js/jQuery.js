//variables
	var monthNames = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
	var dayNames = ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"];
	var newDate = new Date();
	newDate.setDate (newDate.getDate());
	$(".clockDate").html(dayNames[newDate.getDay()] + " " + newDate.getDate() + " " + monthNames[newDate.getMonth()] + " " + newDate.getFullYear());
	
//funciones

function accountantsLessOne(){
	setInterval( function() {
		var seconds = new Date().getSeconds();
		$(".seconds").html(( seconds < 10 ? "0" : "" ) + seconds);
		var minutes = new Date().getMinutes();
		$(".minutes").html(( minutes < 10 ? "0" : "" ) + minutes);
		var hours = new Date().getHours();
		$(".listas .hoursOne").html(parseInt(( hours < 10 ? "0" : "" ) + hours)-1);
	}, 1000);
}	
function accountantsZero(){
	setInterval( function() {
		var seconds = new Date().getSeconds();
		$(".seconds").html(( seconds < 10 ? "0" : "" ) + seconds);
		var minutes = new Date().getMinutes();
		$(".minutes").html(( minutes < 10 ? "0" : "" ) + minutes);
		var hours = new Date().getHours();
		$(".hours").html(parseInt(( hours < 10 ? "0" : "" ) + hours)+0);
	}, 1000);
}
function accountantsMoreOne(){
	setInterval( function() {
		var seconds = new Date().getSeconds();
		$(".seconds").html(( seconds < 10 ? "0" : "" ) + seconds);
		var minutes = new Date().getMinutes();
		$(".minutes").html(( minutes < 10 ? "0" : "" ) + minutes);
		var hours = new Date().getHours();
		$(".hoursTwo").html(parseInt(( hours < 10 ? "0" : "" ) + hours)+1);
	}, 1000);
}

//hora actualizada

$(document).ready(function () {
	accountantsZero();
})

$(document).ready(function(){

//Lista

	$(".country").on("click",function(){
		$(this).addClass("clickear");
		var letras = $(this).text();
		var horas = $(".clock").clone();

		if(letras === $("#Chicago").text() || letras === $("#México").text() || letras === $("#Quito").text()
			|| letras === $("#Guayaquil").text() || letras === $("#SantaMarta").text() || letras === $("#Bogotá").text()
			){
			$(".horas").html(horas);
			$(".horas .hours").removeClass().addClass("hoursOne");
			$(".ciudad").append("<p>" + letras + "</p>");
			accountantslessOne();
			
		}else if( letras === $("#Santiago").text() || letras === $("#Caracas").text() ){
			$(".horas").html(horas);
			$(".ciudad").append("<p>" + letras + "</p>");
			accountantsZero();

		}else {
			$(".horas").html(horas);
			$(".horas .hours").removeClass().addClass("hoursTwo")
			$(".ciudad").append("<p>" + letras + "</p>");
			accountantsMoreOne();
		}
		$(this).off()

	})
})

