$(function () {
    console.log('bonjour');




/*

$.ajax({
    url: "getData.php",
    data:{
        format:"json"
        },
    error:function(){
        $('#liste').html('<p>an error has occured</p>')
    },
    dataType : "jsonp",
    success: function(data){
        $('#liste').append(( "<li id='" + key + "'>" + val.id + "</li>" ))
    },
    type:"GET"
})

*/
$.getJSON("",function(data){
   /*  $('#liste').append(( "<td>" + data.items[0].id +' '+ data.items[0].name + "</td>" ))*/
    console.log(data)

    });






})

