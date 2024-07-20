$(document).ready(function() {
  $('#contact-form').on('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission

      // Create a FormData object from the form
      var formData = $(this).serialize(); // Serialize form data

      // Perform the AJAX request
      $.ajax({
          url: 'https://your-api-endpoint.com/submit', // Replace with your API endpoint
          type: 'POST',
          contentType: 'application/json',
          data: JSON.stringify(formData),
          success: function(response) {
              // Show success message
              $('#success-message').addClass('success');
              $('#success-message').text('Your query is submitted and you will get a reply from us.').css('color', 'green');
              
              // Clear the form
              $('#contact-form')[0].reset();
          },
          error: function(xhr, status, error) {
              // Handle errors
              $('#success-message').addClass('error');
              $('#success-message').text('There was an error submitting your query. Please try again.').css('color', 'red');
          }
      });
  });
});
