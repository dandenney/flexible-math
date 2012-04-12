function calculatorisbad() {
	
	// Divides target/context, converts to usable percentage

	$("#widths, .context").empty();	
	$(".context").css("width", contextWidth).css("max-width", "100%");
	
}

function setContext() {
	var contextWidth = $("#context_width").val();
	$(".context").css("width", contextWidth).css("max-width", "100%");
}

function calculateFirst() {
	var contextWidth = $("#context_width").val();
	var firstWidth = $("#target_one").val();
	var firstResult = (firstWidth/contextWidth);
	var firstPercent = (firstResult * 100 + "%");
	if (firstWidth > 0) {
		$("#first_target span").remove();
		$('<span>' + firstPercent + ";" + ' /* ' + firstWidth + ' / ' + contextWidth + ' */ </span>').appendTo('#first_target');
		$("#basic_first").html('.first_percent { width: ' + firstPercent + ";" + ' } /* ' + firstWidth + ' / ' + contextWidth + ' */ ');
		$(".first_width.samples").css("width", firstPercent);
	}
	else if (firstWidth == 0) {
		$("#first_target span").remove();
		$(".first_width.samples").css("width", "0");
	}
	$("#basic_info, #basic_css").fadeIn();
}

function calculateSecond() {
	var contextWidth = $("#context_width").val();
	var secondWidth = $("#target_two").val();
	var secondResult = (secondWidth/contextWidth);
	var secondPercent = (secondResult * 100 + "%");
	if (secondWidth > 0) {
		$("#second_target span").remove();
		$('<span>' + secondPercent + ";" + ' /* ' + secondWidth + ' / ' + contextWidth + ' */ </span>').appendTo('#second_target');
		$("#basic_second").html('.second_percent { width: ' + secondPercent + ";" + ' } /* ' + secondWidth + ' / ' + contextWidth + ' */ ');
		$(".second_width.samples").css("width", secondPercent);
	}
	else if (secondWidth == 0) {
		$("#second_target span").remove();
		$(".second_width.samples").css("width", "0");
	}
}

function calculateThird() {
	var contextWidth = $("#context_width").val();
	var thirdWidth = $("#target_three").val();
	var thirdResult = (thirdWidth/contextWidth);
	var thirdPercent = (thirdResult * 100 + "%");
	if (thirdWidth > 0) {
		$("#third_target span").remove();
		$('<span>' + thirdPercent + ";" + ' /* ' + thirdWidth + ' / ' + contextWidth + ' */ </span>').appendTo('#third_target');
		$("#basic_third").html('.third_percent { width: ' + thirdPercent + ";" + ' } /* ' + thirdWidth + ' / ' + contextWidth + ' */ ');		
		$(".third_width.samples").css("width", thirdPercent);
	}
	else if (thirdWidth == 0) {
		$("#third_target span").remove();
		$(".third_width.samples").css("width", "0");
	}	
}

function calculateFourth() {
	var contextWidth = $("#context_width").val();
	var fourthWidth = $("#target_four").val();
	var fourthResult = (fourthWidth/contextWidth);
	var fourthPercent = (fourthResult * 100 + "%");
	if (fourthWidth > 0) {
		$("#fourth_target span").remove();	
		$('<span>' + fourthPercent + ";" + ' /* ' + fourthWidth + ' / ' + contextWidth + ' */ </span>').appendTo('#fourth_target');
		$("#basic_fourth").html('.fourth_percent { width: ' + fourthPercent + ";" + ' } /* ' + fourthWidth + ' / ' + contextWidth + ' */ ');
		$(".fourth_width.samples").css("width", fourthPercent);	
	}
	else if (fourthWidth == 0) {
		$("#fourth_target span").remove();
		$(".fourth_width.samples").css("width", "0");
	}
}

function calculateFifth() {
	var contextWidth = $("#context_width").val();
	var fifthWidth = $("#target_five").val();
	var fifthResult = (fifthWidth/contextWidth);
	var fifthPercent = (fifthResult * 100 + "%");
	if (fifthWidth > 0) {
		$("#fifth_target span").remove();
		$('<span>' + fifthPercent + ";" + ' /* ' + fifthWidth + ' / ' + contextWidth + ' */ </span>').appendTo('#fifth_target');
		$("#basic_fifth").html('.fifth_percent { width: ' + fifthPercent + ";" + ' } /* ' + fifthWidth + ' / ' + contextWidth + ' */ ');
		$(".fifth_width.samples").css("width", fifthPercent);
	}
	else if (fifthWidth == 0) {
		$("#fifth_target span").remove();
		$(".fifth_width.samples").css("width", "0");
	}	
}

function calculateSixth() {
	var contextWidth = $("#context_width").val();
	var sixthWidth = $("#target_six").val();
	var sixthResult = (sixthWidth/contextWidth);
	var sixthPercent = (sixthResult * 100 + "%");
	if (sixthWidth > 0) {
		$("#sixth_target span").remove();
		$('<span>' + sixthPercent + ";" + ' /* ' + sixthWidth + ' / ' + contextWidth + ' */ </span>').appendTo('#sixth_target');
		$("#basic_sixth").html('.sixth_percent { width: ' + sixthPercent + ";" + ' } /* ' + sixthWidth + ' / ' + contextWidth + ' */ ');		
		$(".sixth_width.samples").css("width", sixthPercent);
	}
	else if (sixthWidth == 0) {
		$("#sixth_target span").remove();
		$(".sixth_width.samples").css("width", "0");
	}
}

$(function() {
	
	$("label").each(function() {
        var wordArray = $(this).text().split(" ");
        wordArray[wordArray.length-2] += "&nbsp;" + wordArray[wordArray.length-1];
        wordArray.pop();
        $(this).html(wordArray.join(" "));
	});
	
	$("#context_width").change(function() {
		setContext();
		calculateFirst();
		calculateSecond();
		calculateThird();
		calculateFourth();
		calculateFifth();
		calculateSixth();
	});
	
	$("#target_one").change(function() {
		calculateFirst();
	});
	
	$("#target_two").change(function() {
		calculateSecond();
	});
	
	$("#target_three").change(function() {
		calculateThird();
	});
	
	$("#target_four").change(function() {
		calculateFourth();
	});
	
	$("#target_five").change(function() {
		calculateFifth();
	});
	
	$("#target_six").change(function() {
		calculateSixth();
	});
	
	$(".extra input, .extra label").hover(function() {
		$(this).closest("li").removeClass("extra");
	});
	
	$(".extra input").focus(function() {
		$(this).closest("li").removeClass("extra");
	});
	
	$(".more_info").click(function() {
		$("#info").slideToggle();
	});
	
	$("#get_css").click(function() {
		$("#basic_css").fadeIn();
	});
	   
});
    
