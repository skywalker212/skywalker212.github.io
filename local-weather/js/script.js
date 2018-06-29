function getGeolocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(locate, err);
    } else {
        alert("Geolocation is not supported by this browser!!");
    }
}

function locate(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?id=524901&APPID=f2d9f7e154f7df5540781724fc515a2e&lat=" + latitude + "&lon=" + longitude,
        dataType: "json",
        success: function(json) {
            temperature_c = json.main.temp - 272.150;
            temperature_f = 1.8 * temperature_c + 32;
            var city_name = json.name;
            var weather_id = json.weather[0].id;
            var weather_condition = json.weather[0].main;
            var hours = (new Date()).getHours();
            var country = json.sys.country;
            $(".city").html(city_name +", " +country);
            $(".value").html("Temperature: " + temperature_c);
            $(".image").html("<i class=\"owf owf-" + weather_id + "\"></i>");
            $(".sky").html("Weather Condition: " + weather_condition);
            if (String(weather_id).match(/2[0-9][0-9]/g)) {
                $(".status").html("Thunderstorm");
                if (hours >= 7 && hours <= 18) {
                    $("#image").attr("class", "icon wi wi-day-thunderstorm");
                } else {
                    $("#image").attr("class", "icon wi wi-night-thunderstorm");
                }
            } else if (String(weather_id).match(/3[0-9][0-9]/g)) {
                $(".status").html("Drizzle");
                if (hours >= 7 && hours <= 18) {
                    $("#image").attr("class", "icon wi wi-day-rain-mix");
                } else {
                    $("#image").attr("class", "icon wi wi-night-rain-mix");
                }
            } else if (String(weather_id).match(/5[0-9][0-9]/g)) {
                $(".status").html("Rain");
                if (hours >= 7 && hours <= 18) {
                    $("#image").attr("class", "icon wi wi-day-hail");
                } else {
                    $("#image").attr("class", "icon wi wi-night-hail");
                }
            } else if (String(weather_id).match(/6[0-9][0-9]/g)) {
                $(".status").html("Snow");
                if (hours >= 7 && hours <= 18) {
                    $("#image").attr("class", "icon wi wi-day-snow");
                } else {
                    $("#image").attr("class", "icon wi wi-night-alt-snow");
                }
            } else if (String(weather_id).match(/800/g)) {
                $(".status").html("Clear");
                if (hours >= 7 && hours <= 18) {
                    $("#image").attr("class", "icon wi wi-day-sunny");
                } else {
                    $("#image").attr("class", "icon wi wi-night-clear");
                }
            } else if (String(weather_id).match(/80[0-9]/g)) {
                $(".status").html("Clouds");
                if (hours >= 7 && hours <= 18) {
                    $("#image").attr("class", "icon wi wi-day-cloudy");
                } else {
                    $("#image").attr("class", "icon wi wi-night-alt-cloudy");
                }
            } else {
                if (weather_id == "701" || weather_id == "741") {
                    $(".status").html("Mist | Fog");
                    $("#image").attr("class", "icon wi wi-fog");
                } else if (weather_id == "711") {
                    $(".status").html("Smoke");
                    $("#image").attr("class", "icon wi wi-smoke");
                } else if (weather_id == "721") {
                    $(".status").html("Haze");
                    $("#image").attr("class", "icon wi wi-day-haze");
                } else if (weather_id == "731" || weather_id == "761") {
                    $(".status").html("Dust");
                    $("#image").attr("class", "icon wi wi-dust");
                } else if (weather_id == "751") {
                    $(".status").html("Sand");
                    $("#image").attr("class", "icon wi wi-sandstorm");
                } else if (weather_id == "762") {
                    $(".status").html("Volcanic Ash");
                    $("#image").attr("class", "icon wi wi-volcano");
                } else if (weather_id == "771") {
                    $(".status").html("Squalls");
                    $("#image").attr("class", "icon wi wi-strong-wind");
                } else if (weather_id == "781") {
                    $(".status").html("Tornado");
                    $("#image").attr("class", "icon wi wi-tornado");
                } else {
                    $(".status").html("Extreme");
                    $("#image").attr("class", "icon wi wi-na");
                }
            }
        }
    });
}

function err() {
    alert("Something umexpected has happened. Please grant us the location access senpai!!");
    console.error("location acces not Granted!");
}
$(document).ready(function() {
    getGeolocation();
    $(".cfbutton").on("click", function() {
        if ($(".cfbutton").html().indexOf('C') >= 0) {
            $(".cfbutton").html("&deg;F");
            $(".value").html("Temperature: " + temperature_f);
        } else {
            $(".cfbutton").html("&deg;C");
            $(".value").html("Temperature: " + temperature_c);
        }
    })
});
