$(function () {
    console.log('bonjour');


    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.royaleapi.com/top/players",
        "method": "GET",
        "headers": {
            "auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjY0MSwiaWRlbiI6IjUyMzU0MTIxMjkzMDc2ODkwNyIsIm1kIjp7InVzZXJuYW1lIjoiTWFlZ3JpdGgiLCJrZXlWZXJzaW9uIjozLCJkaXNjcmltaW5hdG9yIjoiMTQ0MiJ9LCJ0cyI6MTU1OTI5MzM1NDY2N30.NcnfY3tw-lKwMmpzqOd5SygmZpgb4fDecvv2zfxBmpw"
        }
    }

    $.ajax(settings).done(function (response) {

        for(var i=0; i<10;i++) {

            $('#liste').append("<tr><td>"+(i+1)+"</td><td>" + "<a href='' data-id = "+response[i].tag+" >"+response[i].name +"</a></td>" + "<td>" + response[i].trophies + "</td></tr>")
        }
    });

    // var select = document.querySelectorAll('a')
    // select.addEventListener('click',function(){
    //
   

    var settings1 = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.royaleapi.com/players/8RC8UUYP",
        "method": "GET",
        "headers": {
            "auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjY0MSwiaWRlbiI6IjUyMzU0MTIxMjkzMDc2ODkwNyIsIm1kIjp7InVzZXJuYW1lIjoiTWFlZ3JpdGgiLCJrZXlWZXJzaW9uIjozLCJkaXNjcmltaW5hdG9yIjoiMTQ0MiJ9LCJ0cyI6MTU1OTI5MzM1NDY2N30.NcnfY3tw-lKwMmpzqOd5SygmZpgb4fDecvv2zfxBmpw"
        }
    }

    $.ajax(settings1).done(function (response) {
        console.log(response.games)
        console.log('le joueur a '+ response.games.wins +' de victoires')


    });

    // })


})