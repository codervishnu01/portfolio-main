(function(){
    console.log("ALok")
    $( ".change" ).on("click", function() {
        if( $( "body" ).hasClass( "dark" )) {
          $( "body" ).removeClass( "dark" );
        //   $( ".change" ).text( "OFF" );
        } else {
          $( "body" ).addClass( "dark" );
        //   $( ".change" ).text( "ON" );
        }
      });
      

      $(document).ready(function() {
        $(window).scroll(function() {
          if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
          } else {
            $('#scroll').fadeOut();
          }
        });
        $('#scroll').click(function() {
          $("html, body").animate({
            scrollTop: 0
          }, 600);
          return false;
        });
      });

    //   var num 
    // var val =  document.getElementById('drk').value;
    // console.log(val);
    // num += val;
    // if(num%2 == 0){
    //     document.getElementById('drk').style.backgroundColor = "lightblue";
    // }
  
})()