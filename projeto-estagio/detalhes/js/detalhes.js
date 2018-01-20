    var greenTruck = 'url(https://github.com/Pedrohf360/html-css-javascript/blob/master/projeto-estagio/assets/truck_green.png?raw=true) bottom right 15% no-repeat #46B6AC';
    var yellowTruck = 'url(\'https://github.com/Pedrohf360/html-css-javascript/blob/master/projeto-estagio/assets/truck_yellow.png?raw=true\') bottom right 15% no-repeat #46B6AC';
    var redTruck = 'url(\'https://github.com/Pedrohf360/html-css-javascript/blob/master/projeto-estagio/assets/truck_red.png?raw=true\') bottom right 15% no-repeat #46B6AC';


    var id = localStorage.getItem('id');
    var name = localStorage.getItem('name');
    var fuel = localStorage.getItem('fuel');

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
                    '<div class="mdl-tooltip" data-mdl-for="barra">' + fuel + '%' + '</div>';

    $('#truck_one_card').append(choosedCard);

    var myElement = document.querySelector("#card_to_change");
    var progressBar = document.querySelector("#barra");

  //  if (fuel <= 30)
   // {
  //      myElement.style.background = redTruck;
 //       progressBar.style.width = fuel + '%'; 
  //      progressBar.style.backgroundColor = 'red'; 
 //   } 
  //  else if (fuel > 30 && fuel <= 60)
   // {
  //      myElement.style.background = yellowTruck;
 //       progressBar.style.width = fuel + '%';
    //    progressBar.style.backgroundColor = 'yellow'; 
   // } 
     if (fuel > 60)
    {
        myElement.style.background = greenTruck;
    //    progressBar.style.width = fuel + '%';
  //      progressBar.style.backgroundColor = 'lightgreen'; 
}
    });