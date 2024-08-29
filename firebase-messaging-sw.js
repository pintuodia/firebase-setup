// Import Firebase scripts needed for Firebase Messaging
importScripts('https://www.gstatic.com/firebasejs/10.13.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.0/firebase-messaging-compat.js');

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPT8hXlBtVBdAKCmkcWD3OTt1_TrJfUqY",
        authDomain: "test-726e1.firebaseapp.com",
        databaseURL: "https://test-726e1-default-rtdb.firebaseio.com",
        projectId: "test-726e1",
        storageBucket: "test-726e1.appspot.com",
        messagingSenderId: "483206044983",
        appId: "1:483206044983:web:985f44cb9e3df1f73a4eb2",
};

// Initialize Firebase in the service worker
firebase.initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging
const messaging = firebase.messaging();

// Background message handler
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
