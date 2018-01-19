var greenTruck = 'url(\'C:/Users/Home/Documents/GitHub/javascript_learning/projeto-estagio/assets/truck_green.png\') bottom right 15% no-repeat #46B6AC';
var yellowTruck = 'url(\'C:/Users/Home/Documents/GitHub/javascript_learning/projeto-estagio/assets/truck_yellow.png\') bottom right 15% no-repeat #46B6AC';
var redTruck = 'url(\'C:/Users/Home/Documents/GitHub/javascript_learning/projeto-estagio/assets/truck_red.png\') bottom right 15% no-repeat #46B6AC';

var arr = [];

$(document).ready(function(){
    $.getJSON('https://raw.githubusercontent.com/Pedrohf360/html-css-javascript/master/projeto-estagio/js/equipamentos.json', function(data){
    
        var truck = '';

        $.each(data, function(key, value){
            var slicedValue = value.Value.toString().substring(0, 2);
            var fuelValue = '<strong>' + slicedValue + '%' + '</strong>';

            truck += '<div class="mdl-cell">' +
                      '<div class="mdl-card mdl-shadow--2dp demonstracao-card">' +
                        '<h4 class="mdl-card__title-text alignCenter">' + 'ID:&nbsp' + value.ID + '</h4>' +
                        '<div class="mdl-card__title">' +
                          '<h2 class="mdl-card__title-text">' + value.Name + '</h2>' +
                        '</div>' +
                        '<h4 class="mdl-card__title-text">Gasolina:&nbsp' + fuelValue + '</h4>' +
                        '<div id="progressbar"> <div></div></div>' +
                        '<div class="mdl-card__actions mdl-card--border">' +
                          '<button class="mdl-button mdl-js-button mdl-button--primary"><strong>DETALHES</strong></button>' +
                        '</div>' +
                      '</div>' +
                    '</div>';

          arr[key] = slicedValue;

        });

        $('#truck_cards').append(truck);

        var myElements = document.querySelectorAll('.mdl-card__title');

        for (var i = 0; i < myElements.length; i++) {
            
            var progressBar = document.querySelectorAll('#progressbar>div');

            if (arr[i] <= 30)
            {
                myElements[i].style.background = redTruck;
                progressBar[i].style.width = arr[i] + '%'; 
                progressBar[i].style.backgroundColor = 'red'; 
            } 
            else if (arr[i] > 30 && arr[i] <= 60)
            {
                myElements[i].style.background = yellowTruck;
                progressBar[i].style.width = arr[i] + '%';
                progressBar[i].style.backgroundColor = 'yellow'; 
            } 
            else 
            {
                myElements[i].style.background = greenTruck;
                progressBar[i].style.width = arr[i] + '%';
                progressBar[i].style.backgroundColor = 'lightgreen'; 
            }
          }
    });
});    
