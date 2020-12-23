$(function(){
    console.log($("body").width());
    $("nav .nav-item").click(function(){
        $(this).addClass(".activee").siblings().removeClass(".activee");
    });
    
        $('nav .nav-item').click(function(){
        var myid = $(this).data('value');
         $('html,body').animate({
            scrollTop: $('#'+myid).offset().top 
        },1000); 
              
    });

   
    
});