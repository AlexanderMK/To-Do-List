$(document).ready(function() {
  $("#clear").hide();


  $("#add").click(function(){
    var toAdd = $("input[name=checkListItem]").val();

    $('.list').append('<div class="item">' + toAdd + '</div>');
    $('#clear').fadeIn('fast');
    $('input').val("");
  })

  $(document).on('click', 'item', function() {
  $(this).css("color", "#cc0000");
  $(this).css("cursor", "default");
  $(this).wrapInner('<strike class="done"></strike>');
  $(this).append("" + '<span class="glyphicon glyphicon-remove done" aria-hidden="true"></span>')
  $(this).prop('disabled', true);
  });

  $('#clear').click(function(){
  $('.done').remove('.done');
  });
});
