    var txt;

	function readTextFile(file) {
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, false);
        rawFile.onreadystatechange = function ()
        {
            if(rawFile.readyState === 4)
            {
                if(rawFile.status === 200 || rawFile.status == 0)
                {
                    var allText = rawFile.responseText;
                    txt = allText;
                }
            }
        }
        rawFile.send(null);
    }

	readTextFile('js/equipamentos.json');

    var jsonContent = JSON.parse(txt);

    /*
    for (var i = 0; i < jsonContent.length; i++) {
        alert('ID:' + jsonContent[i].ID +
              'Name:' + jsonContent[i].Name +
              'Value:' + jsonContent[i].Value);
    }
    */