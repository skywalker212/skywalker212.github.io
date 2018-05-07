var width = $('#inputWidth').val();
var height = $('#inputHeight').val();
var color = $('#colorPicker').val();
var erase = false;

$('#inputWidth').keyup(function(evt) {
  width = $(this).val();
});

$('#inputHeight').keyup(function(evt) {
  height = $(this).val();
});

$('#sizePicker').submit(function(event) {
  event.preventDefault();
  $('.help-text').hide();
  makeGrid();
});

$('#colorPicker').change(function() {
  console.log('color picker changed');
  if (erase) erase = false;
  color = $('#colorPicker').val();
});

function eraser() {
  if (erase) {
    erase = false;
    color = $('#colorPicker').val();
  } else {
    erase = true;
    color = '#ffffff';
  }
}

function makeGrid() {
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
  var target = $(event.target);
  target.css('background-color', color);
});
