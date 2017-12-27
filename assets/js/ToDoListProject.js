// Check off by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// Click on X to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();	
	});
	event.stopPropagation();
});

// Press enter to add to ul
$("input[type='text']").on("keypress",function(event){
	if(event.which === 13){
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + $(this).val() + "</li>")
		$(this).val("");
	}
});

// Slide down toggle
$("#angleToggle").on("click", function(){
	$(this).toggleClass("fa-angle-up fa-angle-down");
	$("input[type='text']").fadeToggle(150);
});

// Cursor 1
$("#angleToggle").hover(function() {
    $(this).css('cursor','pointer');
}, function() {
    $(this).css('cursor','auto');
});

// Cursor 2
$("li").hover(function() {
    $(this).css('cursor','pointer');
}, function() {
    $(this).css('cursor','auto');
});