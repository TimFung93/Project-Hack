
var clientId = '114210853994-cccg28iqngk57sgih2omgci2c2fh30r4.apps.googleusercontent.com';
var apiKey = 'AIzaSyBersBFQxX7qFKE2dLFJQ_qPB51_xADCns';
var scopes = 'https://www.googleapis.com/auth/calendar';

function handleClientLoad() {
  gapi.client.setApiKey(apiKey);
  window.setTimeout(checkAuth,1);
  checkAuth();
}

function checkAuth() {
  gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: true},
      handleAuthResult);
}

function handleAuthResult(authResult) {
  var authorizeButton = document.getElementById('authorize-button');
  if (authResult) {
    authorizeButton.style.visibility = 'hidden';
    makeApiCall();
  } else {
    authorizeButton.style.visibility = '';
    authorizeButton.onclick = handleAuthClick;
   }
}

function handleAuthClick(event) {
  gapi.auth.authorize(
      {client_id: clientId, scope: scopes, immediate: false},
      handleAuthResult);
  return false;
}

function makeApiCall() {
  gapi.client.load('calendar', 'v3', function() {
    var request = gapi.client.calendar.events.list({
      'calendarId': 'primary'
    });
          
    request.execute(function(resp) {
      for (var i = 0; i < resp.items.length; i++) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(resp.items[i].summary));
        document.getElementById('events').appendChild(li);
      }
    });
  });
}



var resource = {
  "summary": "Appointment",
  "location": "Somewhere",
  "start": {
    "dateTime": "2011-12-16T10:00:00.000-07:00"
  },
  "end": {
    "dateTime": "2011-12-16T10:25:00.000-07:00"
  }
};
var request = gapi.client.calendar.events.insert({
  'calendarId': 'primary',
  'resource': resource
});
request.execute(function(resp) {
  console.log(resp);
});