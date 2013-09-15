
$(document).ready(function() {
  var bar = $('.bar');
  var percent = $('.percent');
  var status = $('#status');

  function uploadStart() {
      status.empty();
      var percentVal = '0%';
      bar.width(percentVal)
      percent.html(percentVal);
  }

  function uploadProgress(event, position, total, percentComplete) {
    var percentVal = percentComplete + '%';
    bar.width(percentVal)
    percent.html(percentVal);
  }

  function uploadEnd() {
    var percentVal = '100%';
    bar.width(percentVal)
    percent.html(percentVal);
  }

  // pre-submit callback
  function showRequest(formData, jqForm, options) {
    $("#user_key").val("Loading file in the background, please wait...");
    uploadStart();
    return true;
  }

  // post-submit callback
  function showResponse(responseText, statusText, xhr, $form)  {
      // This Header need to be exposed on the CORS configuration in Amazon.
      var location = xhr.getResponseHeader('Location');
      key_position = location.indexOf("uploads");
      key = location.substring(key_position, location.length);
      key = key.replace(/%2F/g,"/");

      uploadEnd();

      $("#user_key").val(key);
  }

//Documentation at:
//http://malsup.com/jquery/form/#ajaxForm

  var options = {
    beforeSubmit:  showRequest,  // pre-submit callback
    success:       showResponse,  // post-submit callback
    uploadProgress: uploadProgress,
    type:'post'
  };

  $('#new_avatar_uploader').ajaxForm(options);

  $('#new_avatar_uploader').change(function() {
    $('#new_avatar_uploader').submit();
  })

});
