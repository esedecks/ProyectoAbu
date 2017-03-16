$(document).ready(function(){
    var link = $("#productoCategoriesList > li");
    link.on("click", function(){
        var $i = $(this).find("i");
        console.log($i);
        $i.toggleClass("fa-plus");
        $i.toggleClass("fa-minus").css("margin-right","10px");
    })
    $('img')
    .wrap('<span style="display:inline-block"></span>')
    .css('display', 'block')
    .parent()
    .zoom();

});