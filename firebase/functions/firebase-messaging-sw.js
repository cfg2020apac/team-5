importScripts("https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.23.0/firebase-messaging.js");

firebase.initializeApp({
  'messagingSenderId': '30014619295'
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  // customising notification
  var obj = JSON.parse(payload.data.notification);
  var notification = obj.title;
  var notificationOptions = {
    body: obj.body,
    icon: obj.icon
  };

  return self.ServiceWorkerRegistration.showNotification(notificationTitle, notificationOptions);

})
