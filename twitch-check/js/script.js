var strms = localStorage.getItem('streamers');
var streamers = [];
if (strms) streamers = JSON.parse(strms);
else {
  streamers = ["OgamingSC2", "cretetion", "freecodecamp", "storbeck", "brunofinX", "habathcx", "RobotCaleb", "noobs2ninjas", "MedryBW", "comster404"];
  localStorage.setItem('streamers', JSON.stringify(streamers));
}


function getStreamers() {
  if(streamers.length==0) $('.mainresults').append('there are currently no streamers, add some!');
  else $('.mainresults').empty();
  streamers.forEach(function (strm) {
    var status;
    var logo;
    var onoff;
    var html;
    $.getJSON("https://wind-bow.glitch.me/twitch-api/channels/" + strm + "?callback=?", function (data) {
      status = data.status;
      logo = data.logo;
      if (status == 404) {
        status = "Channel has been Closed";
        onoff = "Account Closed";
      } else if (status == null) status = "Details not Available";
      $.getJSON("https://wind-bow.glitch.me/twitch-api/streams/" + strm + "?callback=?", function (data) {
        if (onoff == "Account Closed") onoff = "N/A"
        if (data.stream == null) onoff = "offline";
        else onoff = "online";
        link = "https://www.twitch.tv/" + strm;
        if (status.indexOf("Closed") != -1) {
          status = "N/A";
          logo = "https://dummyimage.com/100x100/686cf0/000000.png&text=N/A";
        } else if (onoff == "offline") status = "offline";
        if (logo == null) logo = "https://dummyimage.com/100x100/000/fff.png&text=LOGO";
        html = "<div class = 'row " +strm +" result " +
          onoff + " " + strm + "'><div class='col-3 ver-cen divimg'><img class='image img-circle img-responsive' src='" +
          logo + "' alt='Image not Available' ></div><a style='text-decoration:none' class = 'col-3 link' target = '_blank' href = '" +
          link + "'>" + strm + "</a><span class='col-3 description hidden-xs'>" +
          status + "</span><div class='delete-wrap col-3'><button type='button' onClick='btnClick(\"" +strm +"\")' class='remove btn btn-outline-danger'>remove</button></div></div>";
          $(".mainresults").append(html);
      });

    });
  });
}

function btnClick(name){
  streamers = streamers.filter(ele=>{
    return ele!=name
  });
  $('.'+name).remove();
  localStorage.setItem('streamers', JSON.stringify(streamers));
}

function addStreamer(strm) {
  var status;
  var logo;
  var onoff;
  var html;
  $.getJSON("https://wind-bow.glitch.me/twitch-api/channels/" + strm + "?callback=?", function (data) {
    status = data.status;
    logo = data.logo;
    if (status == 404) {
      status = "Channel has been Closed";
      onoff = "Account Closed";
    } else if (status == null) status = "Details not Available";
    $.getJSON("https://wind-bow.glitch.me/twitch-api/streams/" + strm + "?callback=?", function (data) {
      if (onoff == "Account Closed") onoff = "N/A"
      if (data.stream == null) onoff = "offline";
      else onoff = "online";
      link = "https://www.twitch.tv/" + strm;
      if (status.indexOf("Closed") != -1) {
        status = "N/A";
        logo = "https://dummyimage.com/100x100/686cf0/000000.png&text=N/A";
      } else if (onoff == "offline") status = "offline";
      if (logo == null) logo = "https://dummyimage.com/100x100/000/fff.png&text=LOGO";
      html = "<div class = 'row result " +
        onoff + " " + strm + "'><div class='col-3 ver-cen divimg'><img class='image img-circle img-responsive' src='" +
        logo + "' alt='Image not Available' ></div><a style='text-decoration:none' class = 'col-3 link' target = '_blank' href = '" +
        link + "'>" + strm + "</a><span class='col-3 description hidden-xs'>" +
        status + "</span><div class='delete-wrap col-3'><button onClick='btnClick(\"" +strm +"\")' type='button' class='remove btn btn-outline-danger'>remove</button></div></div>";
      $(".mainresults").append(html);
    });
  });
}

getStreamers();

$('form').submit((e) => {
  e.preventDefault();
  const name = $('form input').val();
  $('form input').val('');
  if(streamers.length==0) $('.mainresults').empty();
  if (streamers.indexOf(name) == -1) {
    streamers.push(name);
    localStorage.setItem('streamers', JSON.stringify(streamers));
    addStreamer(name);
  } else alert('streamer already exists in the list!');
});

$(".selector").hover(function () {
  $(".selector").removeClass("active");
  $(this).addClass("active");
  var status = $(this).attr('id');
  if (status === "all") {
    $(".online, .offline").removeClass("d-none");
  } else if (status === "online") {
    $(".online").removeClass("d-none");
    $(".offline").addClass("d-none");
  } else {
    $(".offline").removeClass("d-none");
    $(".online").addClass("d-none");
  }
});