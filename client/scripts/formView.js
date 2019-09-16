var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
    App.fetch();
  },

  handleSubmit: function(event) {
    //var inputVal = document.getElementById("message").value;
    // Stop the browser from submitting the form
    event.preventDefault();
    //console.log(messages.Messages())
    Parse.create(Messages());

    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};