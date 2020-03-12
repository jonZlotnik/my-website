//---------------------------------
// Photo Portofolio Initialization
//
/*
var numPhotos = {ourselves:4, animals:0, professionals:0, events:0, misc:0};
var photosHTML = {oursleves:"", animals:"", professionals:"", events:"", misc:""}
for (var i = photosHTML.length - 1; i >= 0; i--) {
	photosHTML[i] = 
	"<div></div>";
}*/


$(document).ready(function()
{
	//Initialization of Content
	//tallOrWide();
	$('.categoryBoxMenu').hide();
	$('#contact').hide();
	$('#cvPage').css({'display':'flex'});
	$('#cvPage').hide();
	$('#portPage').css({'display':'flex'});
	$('#portPage').hide();
	$('#portBoxBackground').hide();
	//$('#contentProj').css({'display':'flex'});
	//$('#contentProj').hide();

	
	//Footer Navigation
	$('#homeBTN').click(function()
		{
			$('.page').fadeOut();
			$('#name').show();
		});

	$('#infoBTN').hover(
		function(){$('#contact').slideDown();},
		function(){$('#contact').slideUp();}
		);

	//Home Page Navigation
	$('#cvBox').click(function()
		{
			$('#cvPage').fadeIn();
			$('#name').show();
		});
	$('#portBox').hover(
		function(){$('#portBoxMenu').slideDown();},
		function(){$('#portBoxMenu').slideUp('fast');}
		);
	$('.portBoxMenuItem').click(
		function()
		{
			var portCategory = this.id;
			$('#portPage').fadeIn();
			$('#portPage').html("<iframe class='portGallery' src='photos/portfolio/"+portCategory+"/index.html'></iframe>");
		}
		);
	$('#projBox').hover(
		function(){$('#projBoxMenu').slideDown();},
		function(){$('#projBoxMenu').slideUp('fast');}
		);
});
/*
function tallOrWide()
{
	if($(window).height() > $(window).width())
	{
		$(".homeScreen").css({"flex-flow":"column nowrap"});
		$(".categoryBox").css({"flex-flow":"row nowrap"});
		$(".categoryBoxMenu").css({"flex-flow":"row nowrap"});
		return "tall";
	}
	else
	{
		$(".homeScreen").css({"flex-flow":"row nowrap"});
		$(".categoryBox").css({"flex-flow":"column nowrap"});
		$(".categoryBoxMenu").css({"flex-flow":"column nowrap"});
		return "wide";
	}
}



//Portfolio Page Functions
function changePhotoReels(photoReels)
{
	$(".reelSelector div").css({'background':'rgba(0,0,0,0.5)', 'color':'rgb(200,200,200)'});
	$("#"+photoReels).css({'background':'white','color':'black'});

	$(".reel").hide();
	$("."+photoReels).show();
}

function fullView(photoID)
{
	$('.fullPicView').html("<img src='photos/" + photoID + ".jpg'><h4>Click anywhere to exit full view.</h4>").css({'display':'flex'});
	$('.nav').hide();
}
function nextFullView()
{
	
}
function exitFullView()
{
	$('.fullPicView').css({'display':'none'});
	$('.nav').show();
}*/