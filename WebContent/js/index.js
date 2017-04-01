/*This function lets change the fa-plus and fa-minus classes for the list*/
function toggleClassProductCategoryList(){
	var link = $(".productoCategoriesList > li");
    link.on("click", function(){
        var $i = $(this).find("i");
        $i.toggleClass("fa-plus");
        $i.toggleClass("fa-minus").css("margin-right","10px");
    });
}
/*This function lets handle zoom for all the image which implements*/
function handleImageZoom(){
	$('.zoomImage')
    .wrap('<span style="display:inline-block"></span>')
    .css('display', 'block')
    .parent()
    .zoom();

	$("img.lazy").lazyload({
        effect: "fadeIn"
    });
}

$(document).ready(function(){
    toggleClassProductCategoryList();
	handleImageZoom();

    $(".items").find("li a").on("click", function(e){
        e.preventDefault();
        var $img = $(this).find("img");
        console.log($img);
        console.log($img.attr("src"));
        $("#modal").find("img").attr("src", $img.attr("src"));
        $('#modal').modal('show');



    })

	$(".modal").on("show.bs.modal", function(){
		$(this).addClass('animated fadeInDown');
	});
    setTimeout(function(){
         $heroText = $(".hero-text");
        $heroText
            .find("h1")
            .text("INNOVACIONES ABURELÉ")
            .addClass("animated fadeInDown")
            .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                $heroText.find("p").text("Vestir increíble").addClass("animated fadeInDown");

            });;


    }, 1500)

    //Add Hover effect to menus
//    $('ul.nav li.dropdown').hover(function() {
//      $(this).find('.dropdown-menu').stop(true, true).slideDown();
//    }, function() {
//      $(this).find('.dropdown-menu').stop(true, true).slideUp();
//    });





});