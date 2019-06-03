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
    };

    $.ajax(settings).done(function (response) {

        for(var i=0; i<10;i++) {
            $('#liste').append("<tr><td>"+(i+1)+"</td><td>" + "<a href='#'  data-tag= "+response[i].tag+" >"+response[i].name +"</a></td>" + "<td>" + response[i].trophies + "</td></tr>")
        }


        $('a').on('click',function(){
            $(this).addClass('change')

            
            $('#name').hide(999)
            $('#deck').hide(999)
            $('#liste1').hide(999)


            var data = $(this).attr("data-tag");
            var settings1 = {
                "async": true,
                "crossDomain": true,
                "url": "https://api.royaleapi.com/players/"+ data,
                "method": "GET",
                "headers": {
                    "auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjY0MSwiaWRlbiI6IjUyMzU0MTIxMjkzMDc2ODkwNyIsIm1kIjp7InVzZXJuYW1lIjoiTWFlZ3JpdGgiLCJrZXlWZXJzaW9uIjozLCJkaXNjcmltaW5hdG9yIjoiMTQ0MiJ9LCJ0cyI6MTU1OTI5MzM1NDY2N30.NcnfY3tw-lKwMmpzqOd5SygmZpgb4fDecvv2zfxBmpw"
                }
            };

            $.ajax(settings1).done(function (response) {

                console.log(response.currentDeck)

                $('#liste1').empty().append("<tr><td>" + response.games.winsPercent + "</td><td>" + response.games.wins + "</td><td>"+ response.games.total + "</td></tr>").fadeIn(999);
                $('#name').empty().append(response.name + '<br>').fadeIn(999)

                $('#deck').empty().append("<img src='" + response.currentDeck[0].icon + " '/>" +
                    "<img src='" + response.currentDeck[1].icon + " '/>" +
                    "<img src='" + response.currentDeck[2].icon + " '/>" +
                    "<img src='" + response.currentDeck[3].icon + " '/>" +
                    "<img src='" + response.currentDeck[4].icon + " '/>" +
                    "<img src='" + response.currentDeck[5].icon + " '/>" +
                    "<img src='" + response.currentDeck[6].icon + " '/>" +
                    "<img src='" + response.currentDeck[7].icon + " '/>" ).fadeIn(999)

                $('a.change').removeClass('change')
            })
        });

    })





});

