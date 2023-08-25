/**
*
* -----------------------------------------------------------------------------
*
* Template : Sasco - SaaS Landing Pages HTML Template
* Author : rs-theme
  Author URI : http://www.rstheme.com/  
*
* -----------------------------------------------------------------------------
*
**/

(function($) {
    'use strict';

    //thank you for downloading popup
    const form = document.getElementById("contact-form");
    const formMessages = document.getElementById("form-messages");
    const thankYouMessage = document.getElementById('thankYouMessage');
    
    form.addEventListener("submit", function(event) {
      event.preventDefault();
    
      const formData = new FormData(form);
    
      const xhr = new XMLHttpRequest();
      xhr.open("POST", form.action);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            // Make sure that the formMessages div has the 'success' class.
            $(formMessages).removeClass('error');
            $(formMessages).addClass('success');
            thankYouMessage.setAttribute('aria-hidden', 'false');
            formMessages.innerHTML = thankYouMessage.innerHTML;
            // Clear the form.
            $('#name, #lastName, #email').val('');
          } else {
            formMessages.innerHTML = `<div class="alert alert-danger">Oops! An error occurred and your message could not be sent. Error code: ${xhr.status}</div>`;
          }
        }
      };
      xhr.onerror = function() {
        $(formMessages).removeClass('success');
        $(formMessages).addClass('error');
        formMessages.innerHTML = `<div class="alert alert-danger">Oops! An error occurred and your message could not be sent. Please try again later.</div>`;
      };
      xhr.send(new URLSearchParams(formData).toString());
    });

})(jQuery);