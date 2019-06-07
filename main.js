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

    $('#container').hide(999)
    $('#toHide').hide(999)

    $.ajax(settings).done(function (response) {

        for(var i=0; i<10;i++) {
            $('#liste').append("<tr><td>" + (i+1)+ "</td><td>" + "<a href='#'  data-tag= "+response[i].tag+" >"+response[i].name +"</a></td>" + "<td>" + response[i].trophies + "</td></tr>")
        }
        $('td:nth-child(1)').addClass('animation')



        $('a').on('click',function(){

            $("#consigne").addClass('hide')
            $(this).addClass('change')
            $('a').removeClass('red')
            $(this).addClass('red')
            $('#name').append("<div id='test'><p>Wait<br>Please</p></div>").hide(999)


            var data = $(this).attr("data-tag");
            console.log(data)
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


                $('#toHide').show(999)
                $('#container').show(999)
                $('#name').empty().append(response.name + '<br>').fadeIn(999)
                console.log(response.name)
                $('#liste1').empty().append("<tr><td>" + response.games.winsPercent + "</td><td>" + response.games.wins + "</td><td>"+ response.games.total + "</td></tr>").fadeIn(999);


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

            $('#myChart').hide(999)
            var settings2 = {
                "async": true,
                "crossDomain": true,
                "url": "https://api.royaleapi.com/popular/players",
                "method": "GET",
                "headers": {
                    "auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjY0MSwiaWRlbiI6IjUyMzU0MTIxMjkzMDc2ODkwNyIsIm1kIjp7InVzZXJuYW1lIjoiTWFlZ3JpdGgiLCJrZXlWZXJzaW9uIjozLCJkaXNjcmltaW5hdG9yIjoiMTQ0MiJ9LCJ0cyI6MTU1OTI5MzM1NDY2N30.NcnfY3tw-lKwMmpzqOd5SygmZpgb4fDecvv2zfxBmpw"
                }
            };
            $.ajax(settings2).done(function (response){
                $('#myChart').show(999)
                var result = []
                var nom = []

                for(i=0;i<8;i++){
                    result.push(response[i].popularity.hits)
                    nom.push(response[i].name)

                }
                console.log(nom)

                var ctx = document.getElementById('myChart').getContext('2d');
                var myChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: nom,
                        datasets: [{
                            label: '# of Hits',
                            data: result,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }
            });
    });
});