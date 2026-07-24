importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

// Aceleași credențiale ca în aplicația principală
firebase.initializeApp({
    apiKey: "AIzaSyBtphQCRQRkBA6gcb4nqTKhmf8ti1XH2w",
    authDomain: "lacentral-b79a9.firebaseapp.com",
    databaseURL: "https://lacentral-b79a9-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "lacentral-b79a9",
    storageBucket: "lacentral-b79a9.appspot.com",
    messagingSenderId: "187334069854",
    appId: "1:187334069854:web:1892c8a3fb826341c52ecf"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const notificationTitle = payload.notification.title || "Nouvelle Alarme";
  const notificationOptions = {
    body: payload.notification.body || "Vérifiez l'application La Centrale.",
    icon: 'https://cdn-icons-png.flaticon.com/512/2919/2919740.png',
    badge: 'https://cdn-icons-png.flaticon.com/512/2919/2919740.png',
    requireInteraction: true
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
