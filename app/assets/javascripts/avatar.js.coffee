$ ->
  $("#new_avatar_uploader").submit ->
    valuesToSubmit = $(this).serialize()
    # submits it to the given url of the form
    # you want a difference between normal and ajax-calls, and json is standard
    $.ajax(
      type: 'POST',
      async: false,
      url: $(this).attr("action"),
      dataType: 'binary',
      crossDomain: true,
      #dataType: 'jsonp',
      data: valuesToSubmit,
      mimeType: 'multipart/form-data; boundary=gc0p4Jq0M2Yt08jU534c0p',
    ).success (json) ->
      alert('picture has been loaded in amazon')

    #act on result.
    false # prevents normal behaviour

