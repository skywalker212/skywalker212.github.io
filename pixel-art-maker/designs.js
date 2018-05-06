// Select color input
var color = $('#colorPicker').val();
console.log(color);
// Select size input
var width = $('#inputWidth').val();
var height = $('#inputHeight').val();
console.log(width + ' ' + height);
$('#inputWidth').keyup(function(evt) {
  width = $(this).val();
  console.log(width + ' ' + height);
});
$('#inputHeight').keyup(function(evt) {
  height = $(this).val();
  console.log(width + ' ' + height);
});
// When size is submitted by the user, call makeGrid()

$('#sizePicker').submit(function(event) {
  event.preventDefault();
  $('.help-text').hide();
  makeGrid();
});

function makeGrid() {
  // Your code goes here!
  var canvas = $('#pixelCanvas');
  canvas.html('');
  for (var x = 0; x < height; x++) {
    var row = $('<tr class="row row' + x + '"></tr>');
    canvas.append(row);
    for (var y = 0; y < width; y++) {
      var box = $('<td class="btn btn' + x + y + '"></td>');
      row.append(box);
    }
  }
}

$('#pixelCanvas').on('click', '.btn', function(event) {
  var color = $('#colorPicker').val();
  console.log(color);
  var target = $(event.target);
  target.css('background-color', color);
});
