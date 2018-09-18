var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    onDeviceReady: function() {
    //  alert('ok');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {

    }
};
app.initialize();
function ref_cadastrar(){
  window.location.assign("cadastro.html");
}
