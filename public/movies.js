$(document).ready(function(){
    $('#showButton').click(function(){

        $("#results").html("<b> You clicked</b>");

        //let URL = 'movies';
        let URL = 'http://127.0.0.1:8000/movies';
        //et URL = 'Movies.php'

        alert(`Click Show URL=${URL}`);
        let settings = {
            "url" : URL,
            "method" : "GET",
            "timeout" : 0
        };
        $.ajax(settings).done(
            function(response){
              let oStr = "";
              for (i = 0; i < response.length; i++) {
                oStr += '<table border=1>'
                oStr += `<tr><th> Year </th><th> Name </th><th> Sales </th></tr>`
                console.log("response=");
                console.log(response);



                let n = response[i].name;
                let y = response[i].year;
                let s = response[i].sales;


                oStr += `<tr><td> ${n} </td><td> ${y} </td><td> ${s} </td></tr>`

                oStr += `</table>`
              }
              $("#results").html(oStr);
          }
        );

    });
});

function myFunction(n, y, s){
    oStr = `<tr><td> ${n} </td><td> ${y} </td><td> ${s} </td></tr>`;
}

function changeIt(){
  //let URL = 'movies';
  let URL = 'http://127.0.0.1:8000/movies';
  //et URL = 'Movies.php'

  alert(`Click Show URL=${URL}`);
  let settings = {
      "url" : URL,
      "method" : "GET",
      "timeout" : 0
  };
  $.ajax(settings).done(
      function(response){
  var carSelect = response;
  document.years.options.length = 0;
  var ct = 0;
  for (var item in carSelect){
  document.years.options[ct++] = new Option(item, item, true, false);
  }
});
}
