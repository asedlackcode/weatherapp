$(document).ready(function() {
    $("#searchBtn").click(function() {
        $("#container1").empty();

        var city = $("#searchCity").val();
        
        var queryURL ="http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=987e9a9cecb8c841e2f724d39823d991";

        if(city != "") {

            $.ajax({
                url: queryURL,
                type: "GET",
                dataType: "jsonp",
                success: function(data) {
                    console.log(data);
                   


                    var cityName = (data.name);
                    //Svar date = (data.list.dt);           
                    var temp = (data.main.temp);
                    var humidity = (data.main.humidity);
                    var windSpeed = (data.wind.speed);
                    var img = $("<img>").attr("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
                    
                    $("#container1").append("<h2>" + cityName + "</h2>");
                    $("#container1").append("<li>Temperature: " + temp + "°F</li>");
                    $("#container1").append("<li>Humidity: " + humidity + "%</li>");
                    $("#container1").append("<li>Wind Speed: " + windSpeed + "MPH</li>");
                    $(cityName).append(img);
                    //$("#container1").append(img);
                    $("#searchCity").val('');
                    
                   
                    $("#wrapper").append("<li class='history'>" + cityName + "</li>");
                }
            })

        }else{
            prompt("Search cannot be empty");
        }
    });

});


