 
         $(window).load(function(){
         $('#chanceSlider').on('change', function(){
             
             $('div[id="chance"]').html($('#chanceSlider').val());
             var chance = $('#chanceSlider').val();
             var chance1 = $('#chanceSlider1').val();
             var quont = parseFloat(chance) + parseFloat(chance1);
             
              $('#level1').val(quont);
               var level2 = $('#level2').val();
               var level1 = $('#level1').val();
               if(level2!=''){
                 
                 var level3 = parseFloat(level1) + parseFloat(level2);
                  $('#level3').val(level3);
               }
               
         
         
         });
         
         
         
         
         $('#chanceSlider1').on('change', function(){
            
             $('div[id="chance1"]').html($('#chanceSlider1').val());
              var chance = $('#chanceSlider').val();
             var chance1 = $('#chanceSlider1').val();
             var quont = parseFloat(chance) + parseFloat(chance1);
            
              $('#level1').val(quont);
              var level2 = $('#level2').val();
               var level1 = $('#level1').val();
               if(level2!=''){
                 
                 var level3 = parseFloat(level1) + parseFloat(level2);
                  $('#level3').val(level3);
               }
         });
         
         
         
       
         
         
         $('#chanceSlider2').on('change', function(){
           
             $('div[id="chance2"]').html($('#chanceSlider2').val());
              var chance2 = $('#chanceSlider2').val();
             var chance3 = $('#chanceSlider3').val();
         
             var chance4 = $('#chanceSlider4').val();
             
             var verbal = parseFloat(chance2) + parseFloat(chance3)+ parseFloat(chance4);
           
              $('#level2').val(verbal);
              var level2 = $('#level2').val();
               var level1 = $('#level1').val();
               if(level1!=''){
                
                 var level3 = parseFloat(level1) + parseFloat(level2);
                  $('#level3').val(level3);
               }
         });
         
         $('#chanceSlider3').on('change', function(){
            
             $('div[id="chance3"]').html($('#chanceSlider3').val());
              var chance2 = $('#chanceSlider2').val();
             var chance3 = $('#chanceSlider3').val();
         
             var chance4 = $('#chanceSlider4').val();
             
             var verbal = parseFloat(chance2) + parseFloat(chance3)+ parseFloat(chance4);
             
              $('#level2').val(verbal);
              var level2 = $('#level2').val();
               var level1 = $('#level1').val();
               if(level1!=''){
                
                 var level3 = parseFloat(level1) + parseFloat(level2);
                  $('#level3').val(level3);
               }
         
         });
         
         
         $('#chanceSlider4').on('change', function(){
           
             $('div[id="chance4"]').html($('#chanceSlider4').val());
              var chance2 = $('#chanceSlider2').val();
             var chance3 = $('#chanceSlider3').val();
         
             var chance4 = $('#chanceSlider4').val();
             
             var verbal = parseFloat(chance2) + parseFloat(chance3)+ parseFloat(chance4);
            
              $('#level2').val(verbal);
              var level2 = $('#level2').val();
               var level1 = $('#level1').val();
               if(level1!=''){
                
                 var level3 = parseFloat(level1) + parseFloat(level2);
                  $('#level3').val(level3);
               }
         });
         
         
         
         
         });
         
      