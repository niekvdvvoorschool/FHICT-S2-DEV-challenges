var answer;

function GetWordAPI() {
    // Create the XHR Object
    let xhr = new XMLHttpRequest;
    var word;
    //Call the open function, GET-type of request, url, true-asynchronous
    xhr.open('GET', 'https://random-word-api.herokuapp.com/word?key=NPTOHRGC&number=1', true)
    //call the onload
    xhr.onload = function()
    {
        //check if the status is 200(means everything is okay)
        if (this.status === 200)
        {
            //return server response as an object with JSON.parse
            var words = JSON.parse(this.responseText);
            answer = words[0];

            randomfunction();
        }
    }
    //call send
    xhr.send();
}
