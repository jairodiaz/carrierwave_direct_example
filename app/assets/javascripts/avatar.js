$(document).ready(function() {
    var options = {
        target:        '#output1',   // target element(s) to be updated with server response
        //beforeSubmit:  showRequest,  // pre-submit callback
        success:       showResponse  // post-submit callback

        // other available options:
        //url:       url         // override for form's 'action' attribute
        //type:      type        // 'get' or 'post', override for form's 'method' attribute
        //dataType:  null        // 'xml', 'script', or 'json' (expected server response type)
        //clearForm: true        // clear all form fields after successful submit
        //resetForm: true        // reset the form after successful submit

        // $.ajax options can be used here too, for example:
        //timeout:   3000
    };


      // bind form using 'ajaxForm'
      // bind 'myForm' and provide a simple callback function
      $('#new_avatar_uploader').ajaxForm(options);

  });

  // post-submit callback
  function showResponse(responseText, statusText, xhr, $form)  {
      alert ('here');
      //window.location.href = data.redirect
      //http://stackoverflow.com/questions/199099/how-to-manage-a-redirect-request-after-a-jquery-ajax-call

      // for normal html responses, the first argument to the success callback
      // is the XMLHttpRequest object's responseText property

      // if the ajaxForm method was passed an Options Object with the dataType
      // property set to 'xml' then the first argument to the success callback
      // is the XMLHttpRequest object's responseXML property

      // if the ajaxForm method was passed an Options Object with the dataType
      // property set to 'json' then the first argument to the success callback
      // is the json data object returned by the server

      alert('status: ' + statusText + '\n\nresponseText: \n' + responseText +
          '\n\nThe output div should have already been updated with the responseText.');
  }
