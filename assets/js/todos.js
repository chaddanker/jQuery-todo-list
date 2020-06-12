$("#page").fadeIn(900);

//ADD
$("#list").append("<ul>");
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		

	  var item = $(this).val(); 

	  h = "<li class='item'><span><i class='fa fa-trash'></i></span> " + item + "</li>";	
	  $("input[type='text']").val("");
	  $("ul").append(h);

	}
})

//DONE
$("ul").on("click", "li", function(){
	$(this).toggleClass("done");

});

//DELETE
$("ul").on("click","span", function(e){
	$(this).parent().fadeOut(600, function(){
		$(this).remove();
		
	});
	e.stopPropagation();

});

$("#plusIcon").on("click", function() {
	$("input[type=text]").fadeToggle();
})


