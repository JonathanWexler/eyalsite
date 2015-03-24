// $(document).ready(function() {
//     $('img').load(function() {
//         $(this).fadeIn('slow');
//     });
// });

$(document).ready(function() {  
  
//set opacity to 0.4 for all the images  
//opacity = 1 - completely opaque  
//opacity = 0 - invisible  
  
$('img').css('opacity', 0.0);  
$('img').stop().fadeTo(4000, 1);  
  
// when hover over the selected image change the opacity to 1  
$('img').hover(  
   function(){  
      $(this).find('img').stop().fadeTo('slow', 1);  
   },  
   function(){  
      $(this).find('img').stop().fadeTo('slow', 0.4);  
   });  
  
}); 