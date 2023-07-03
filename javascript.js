var prev_branch=1;
var current_url = window.location.href; // Get the current URL

// Determine the initial value of prev_branch based on the current URL
if (current_url.includes('journey.php')) {
	prev_branch = 2;
} else if (current_url.includes('story.php')) {
	prev_branch = 3;
} else if (current_url.includes('inner-circle.php')) {
	prev_branch = 4;
}
$(`nav ul li:nth-child(${prev_branch})`).css("background", "red");

function turn_red(active_branch){
	if (prev_branch==active_branch) return;
	// get the page upon getting clicked
	switch(active_branch){
		case 1:
			window.location.href='index.php';
			break;
		case 2:
			window.location.href='journey.php';
			break;
		case 3:
			window.location.href='story.php';
			break;
		case 4:
			window.location.href=active_branch;
			break;
	}

}

$('nav ul li').css('cursor','pointer')

$('nav ul li').hover(
		function(){
		$(this).css("background","red");
		},
		function() {
		if (prev_branch != $(this).index() + 1) {
		$(this).css("background", "rgb(150, 150, 150, 0.7)");
		}
		}
		)

$('nav ul li').mousedown(
		function(){
			$(this).css('background','rgb(150,150,150,0.7)');
		}
		)
$('nav ul li').mouseup(
		function(){
			$(this).css('background','red');
		}
		)

// get photos of people

function get_photos(name){
	var data_to_post={photo:name}
	$.ajax({
		url:'photos.php',
		type:'post',
		data:data_to_post,
		success: function(data){
			$('#gargee').append(data);
		},
		error: function(){
		console.log("something went wrong")},
	});
}

get_photos('gargee');
