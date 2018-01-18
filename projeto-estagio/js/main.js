    var jsonTxt;

     $.getJSON('https://raw.githubusercontent.com/Pedrohf360/html-css-javascript/master/projeto-estagio/js/equipamentos.json', function(data){
    
        jsonTxt = data;

        console.log(jsonTxt);
        /*for (var i = 0; i < 1; i++) {
        alert('ID:' + data[i].ID + '\n' +
              'Name:' + data[i].Name + '\n' +
              'Value:' + data[i].Value + '\n');
              }
        */
    });



