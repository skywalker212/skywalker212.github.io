let width = $('#inputWidth').val();
let height = $('#inputHeight').val();
let color = $('#colorPicker').val();
let erase = false;

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
  let canvas = $('#pixelCanvas');
  canvas.html('');
  for (let x = 0; x < height; x++) {
    let row = $('<tr class="row row' + x + '"></tr>');
    canvas.append(row);
    for (let y = 0; y < width; y++) {
      let box = $('<td class="btn btn' + x + y + '"></td>');
      row.append(box);
    }
  }
}

$('#pixelCanvas').on('click', '.btn', function(event) {
  let target = $(event.target);
  target.css('background-color', color);
});
