// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase SDKs before v9.0.0 in service workers.
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker with the same config
const firebaseConfig = {
    apiKey: "AIzaSyCI8CEVsIm04yshvJVAZqQcElE_G-VaduQ",
    authDomain: "odia-games-visitor-counter.firebaseapp.com",
    projectId: "odia-games-visitor-counter",
    storageBucket: "odia-games-visitor-counter.firebasestorage.app",
    messagingSenderId: "485616496841",
    appId: "1:485616496841:web:554cb48f6ec2182caa1d18"
};

firebase.initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging so that it can handle background messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  // Customize the notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon/my.png' // Make sure you have an icon at this path
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
