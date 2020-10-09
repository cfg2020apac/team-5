importScripts('https://www.gstatic.com/firebasejs/3.4.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/3.4.0/firebase-messaging.js')

var config = {
    apiKey: "AIzaSyB_jkxL1W76KmMju0FdH8gT_SscHblxC8o",
    authDomain: "humanitech-65d8d.firebaseapp.com",
    databaseURL: "https://humanitech-65d8d.firebaseio.com",
    storageBucket: "humanitech-65d8d.appspot.com",
    messagingSenderId: "30014619295"
}

firebase.initializeApp(config);

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
    const title = 'Hello World';
    const options = {
        body: payload.data.status
    }
    return self.registration.showNotification(title, options);
});

