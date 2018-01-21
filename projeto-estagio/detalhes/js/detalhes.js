    var greenTruck = 'url(\'../../projeto-estagio/assets/truck_green.png\') bottom right 15% no-repeat #46B6AC';
    var yellowTruck = 'url(\'../../projeto-estagio/assets/truck_yellow.png\') bottom right 15% no-repeat #46B6AC';
    var redTruck = 'url(\'../../projeto-estagio/assets/truck_red.png\') bottom right 15% no-repeat #46B6AC';


    var id = localStorage.getItem('id');
    var name = localStorage.getItem('name');
    var fuel = localStorage.getItem('fuel');

    var infoJsonTruck;
    var date;
    var fuelValues = [];

    $(document).ready(function(){
    choosedCard = '<div class="mdl-cell">' +
                      '<div class="mdl-card mdl-shadow--3dp demonstracao-card">' +
                        '<h3 class="mdl-card__title-text alignCenter">' + 'ID:&nbsp' + id + '</h4>' +
                        '<div id="card_to_change" class="mdl-card__title">' +
                          '<h2 class="mdl-card__title-text">' + name + '</h2>' +
                        '</div>' +
                        '<h4 class="mdl-card__title-text">Combustível:&nbsp' + fuel + '%' + '</h4>' +
                        '<div id="barra" class="progressbar"><div></div></div>' +                                                     
                      '</div>' +
                    '</div>' +
                    '<div class="mdl-tooltip" data-mdl-for="barra">' + fuel + '%' + '</div>' +
                    '<div class="mdl-cell--6-col"><canvas class="line-chart"></canvas></div>';

    $('#truck_one_card').append(choosedCard);

    var myElement = document.querySelector("#card_to_change");
    var progressBar = document.querySelector(".progressbar>div");

    if (fuel <= 30)
    {
        myElement.style.background = redTruck;
        progressBar.style.width = fuel + '%'; 
        progressBar.style.backgroundColor = 'red'; 
    } 
    else if (fuel > 30 && fuel <= 60)
    {
        myElement.style.background = yellowTruck;
        progressBar.style.width = fuel + '%';
        progressBar.style.backgroundColor = 'yellow'; 
    } 
    else
    {
        myElement.style.background = greenTruck;
        progressBar.style.width = fuel + '%';
        progressBar.style.backgroundColor = 'lightgreen'; 
    }
    });

    $.getJSON('https://raw.githubusercontent.com/Pedrohf360/html-css-javascript/master/projeto-estagio/detalhes/json/' + id + '.json', function(data){

      setTruckInfo(data);

      createChart();
    });

    function setTruckInfo(data){
      date = data[0].Date.substring(0, 10);

      for (var i = 0; i < 12*120; i+=120) {
        fuelValues.push(data[i].Value.toFixed(2));
      }
    }

    function createChart()
    {
      var ctx = document.getElementsByClassName("line-chart");

      var chartGraph = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ["00:00", "02:00", "04:00", "6:00", "8:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00"],
          datasets: [{
            label: 'VOLUME GASOLINA',
            data: [fuelValues[0], fuelValues[1], fuelValues[2], fuelValues[2], fuelValues[3], fuelValues[4], fuelValues[5],
                    fuelValues[6], fuelValues[7], fuelValues[8], fuelValues[9], fuelValues[10], fuelValues[11]],
            borderWidth: 6,
            borderColor: 'rgba(77,166,253,0.85)',
            backgroundColor: 'transparent'
                  },
              ]
        }
      });
    }