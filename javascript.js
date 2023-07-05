var prev_branch=1;
var current_url = window.location.href; // Get the current URL

// Determine the initial value of prev_branch based on the current URL
if (current_url.includes('journey.php')) {
	prev_branch = 2;
} else if (current_url.includes('story.php')) {
	prev_branch = 3;
} else if (current_url.includes('innerc.php')) {
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
			window.location.href='innerc.php';
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
			$(`#${name}`).append(data);
		},
		error: function(){
		console.log("something went wrong")},
	});
}

get_photos('gargee');
get_photos('supra');
get_photos('shayan');
get_photos('bihar');


// carousel starts here
var images=['#carousel-image1', '#carousel-image2', '#carousel-image3'];
var index=0;
translate_active_image=-97;
translate_next1_image=-80.6170212766;
translate_next2_image=-105;

// left_active_image=

/*var interval = setInterval(() => {
    
    if(index==0){
        active_image=images[index];
        next_image=images[index+1];
        next_image2=images[index+2];
        index++;
    }

    else if(index==1){
        active_image=images[index];
        next_image=images[index+1];
        next_image2=images[index-1];
        clearInterval(interval);
        index++;
    }

    else if(index==2){
        active_image=images[index];
        next_image=images[index-2];
        next_image2=images[index-1];
        // index=0;
        // clearInterval(interval);
    }
    console.log(index);
    console.log(active_image);
    console.log(next_image);
    console.log(next_image2);

    // if(translate_active_image < -2444){
    //     translate_active_image = -200;
    //     console.log("Value of translate_active_image: ", translate_active_image)
    // }
    translate_active=translate_active_image+"vw";
    translate_next1=translate_next1_image+"vw";
    translate_next2=translate_next2_image+"vw";

    console.log(translate_active);
    console.log(translate_next1);
    console.log(translate_next2);

    $(active_image).css('transform',`translateX(${translate_active})`);
    $(next_image).css('transform', `translateX(${translate_next1})`);
    $(next_image2).css('transform',`translateX(${translate_next2})`);
    
    setTimeout(() => {
        // $(active_image).css('left','2632px');
        translate_active_image-=48;
        translate_next1_image-=48;
        translate_next2_image-=48;
    }, 1000);
}, 2000);
*/

var slide_num=1;

var interval = setInterval(() => {
	if(slide_num==1) show_img1();
	else if (slide_num==2)show_img2();
	else if (slide_num==3){
		show_img3();
		slide_num=0;
	}
	slide_num+=1;
}, 1500);

// button stats ----------
// button clicks and changes

$('#carousel-button1').click(function(){
	show_img1()
	slide_num=1;

})

$('#carousel-button2').click(function(){
	show_img2()
	slide_num=2;
})

$('#carousel-button3').click(function(){
	show_img3()
	slide_num=3;
})

// define functions

function show_img1(){
	$('#carousel-image1').css('transform', 'translateX(0px)');
	$('#carousel-image2').css('transform','translateX(0px)');
	$('#carousel-image3').css('transform','translateX(0px)');

	$('#carousel-button1').addClass('carousel-black');
	$('#carousel-button2, #carousel-button3').removeClass('carousel-black');

}

function show_img2(){
	$('#carousel-image1').css('transform', 'translateX(-70vw)');
	$('#carousel-image2').css('transform','translateX(-72.6170212766vw)');
	$('#carousel-image3').css('transform','translateX(-48vw)');

	$('#carousel-button2').addClass('carousel-black');
	$('#carousel-button1, #carousel-button3').removeClass('carousel-black');
}

function show_img3(){
	$('#carousel-image1').css('transform', 'translateX(-145vw)');
	$('#carousel-image2').css('transform','translateX(-145vw)');
	$('#carousel-image3').css('transform','translateX(-137.617021277vw)');

	$('#carousel-button3').addClass('carousel-black');
	$('#carousel-button1, #carousel-button2').removeClass('carousel-black');
}

