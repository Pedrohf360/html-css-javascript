var greenTruck = 'url(\'https://github.com/Pedrohf360/html-css-javascript/blob/master/projeto-estagio/assets/truck_green.png?raw=true\') bottom right 15% no-repeat #46B6AC';
var yellowTruck = 'url(\'https://github.com/Pedrohf360/html-css-javascript/blob/master/projeto-estagio/assets/truck_yellow.png?raw=true\') bottom right 15% no-repeat #46B6AC';
var redTruck = 'url(\'https://github.com/Pedrohf360/html-css-javascript/blob/master/projeto-estagio/assets/truck_red.png?raw=true\') bottom right 15% no-repeat #46B6AC';

var arr = [];

$(document).ready(function(){
    $.getJSON('https://raw.githubusercontent.com/Pedrohf360/html-css-javascript/master/projeto-estagio/json/equipamentos.json', function(data){
    
        var truck = '';

        $.each(data, function(key, value){
            var slicedValue = value.Value.toString().substring(0, 2);   
            var fuelValue = '<strong>' + slicedValue + '%' + '</strong>';

            truck += '<div class="mdl-cell">' +
                      '<div class="mdl-card mdl-shadow--3dp demonstracao-card">' +
                        '<h3 class="mdl-card__title-text alignCenter">' + 'ID:&nbsp' + value.ID + '</h4>' +
                        '<div class="mdl-card__title">' +
                          '<h2 class="mdl-card__title-text">' + value.Name + '</h2>' +
                        '</div>' +
                        '<h4 class="mdl-card__title-text">Combustível:&nbsp' + fuelValue + '</h4>' +
                        '<div id="progressbar' + key + '" class="progressbar"><div></div></div>' +
                        '<div class="mdl-card__actions mdl-card--border">' +                    //, + fuelValue + ',' + value.Name + ',' + value.ID +'
                          '<button class="mdl-button mdl-js-button mdl-button--primary" value="' + value.ID + ';' + value.Name + ';' + slicedValue + '" onClick="reply_click(this.value)" id="' + key + '">' + '<strong>' + 'VER DETALHES' + '</strong>' +'</button>' +
                        '</div>' +                                                      
                      '</div>' +
                    '</div>' +
                    '<div class="mdl-tooltip" data-mdl-for="progressbar' + key + '">' + value.Value.toFixed(2) + '%' + '</div>';

          arr[key] = slicedValue;

        });

        truck += '<div class="spacer"></div>'

        $('#truck_cards').append(truck);

        var myElements = document.querySelectorAll('.mdl-card__title');

        for (var i = 0; i < myElements.length; i++) {
            
            var progressBar = document.querySelectorAll('.progressbar>div');

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

function reply_click(choosedInfo)
{
    var info = choosedInfo.split(';');

    localStorage.setItem('id', info[0]);
    localStorage.setItem('name', info[1]);
    localStorage.setItem('fuel', info[2]);

    window.location = '../projeto-estagio/detalhes/detalhes.html';
}
