$( document ).ready(function() {


    for (let i = 0; i < 11; i++) {

        $('#page-'+ i +'').click(function () {

            $('#popup-'+ i +'').fadeIn(300,function(){$(this).focus();});
            $('body'). css("overflow", "hidden");

            $(".close_pop").click(function (e) {     
              $("#popup-"+ i +"").fadeOut(300);
              $('body'). css("overflow", "auto");
            });

            $("#popup-"+ i +" .popup-content").on('blur',function(){
              $(this).fadeOut(300);
          });
            

        });
      };

});