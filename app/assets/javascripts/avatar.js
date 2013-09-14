$(document).ready(function() {
    var options = {
        beforeSubmit:  showRequest,  // pre-submit callback
        success:       showResponse,  // post-submit callback
    };

    $('#new_avatar_uploader').ajaxForm(options);

    $('#new_avatar_uploader').change(function() {
      $('#new_avatar_uploader').submit();
    })

  });

  // pre-submit callback
  function showRequest(formData, jqForm, options) {
    $("#user_key").val("Loading file in the background, please wait...");
    return true;
  }

  // post-submit callback
  function showResponse(responseText, statusText, xhr, $form)  {
      // This Header need to be exposed on the CORS configuration in Amazon.
      var location = xhr.getResponseHeader('Location');
      key_position = location.indexOf("uploads");
      key = location.substring(key_position, location.length);
      key = key.replace(/%2F/g,"/");

      $("#user_key").val(key);
  }
