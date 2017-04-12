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
/*Función para animar el texto de header*/
function handleInitialTopAnimation(){
	
	setTimeout(function(){
        $heroText = $(".hero-text");
       $heroText
           .find("h1")
           .text("INNOVACIONES ABURELÉ")
           .addClass("animated fadeInDown")
           .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
               $heroText.find("p").text("Vestir increíble").addClass("animated fadeInDown");
           });;
   }, 1500); 
}; 

//función para animar el modal 
function handleModalAnimation(){
	$(".modal").on("show.bs.modal", function(){
		$(this).addClass('animated fadeInDown');
	});
}
//función para manejar sobre qué imagen se hace clic y mostrarla en el  modal
function imageToShowOnImageClic(){
	$(".items").find("li a").on("click", function(e){
        e.preventDefault();
        var $img = $(this).find("img");
        console.log($img);
        console.log($img.attr("src"));
        $("#modal").find("img").attr("src", $img.attr("src"));
        $('#modal').modal('show');
    }); 
}
$(document).ready(function(){
    toggleClassProductCategoryList();
	handleImageZoom();
    handleInitialTopAnimation(); 
    handleModalAnimation(); 
    imageToShowOnImageClic(); 
       //remove this two lines of code
//    $("#aboutUs").show();
//    $("#sellingSection").hide(); 
//    
    $("#whoAreWeButton").on("click", function(){
    	$("#aboutUs").fadeIn(); 
    	$("#sellingSection").fadeOut(); 
    	$("#getInTouchSection").fadeOut(); 
    }); 
    
    $("#homeButton").on("click", function(){
    	console.log("click") ; 
    	$("#sellingSection").fadeIn(); 
    	$("#aboutUs").fadeOut();
    	$("#getInTouchSection").fadeOut(); 
    	
    }); 
    $("#getInTouchButton").on("click", function(){
    	$("#getInTouchSection").fadeIn(); 
    	$("#sellingSection").fadeOut(); 
    	$("#aboutUs").fadeOut(); 
    	
    })
    
    
    
});