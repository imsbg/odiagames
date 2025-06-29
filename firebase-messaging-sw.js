// Import the Firebase scripts
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCI8CEVsIm04yshvJVAZqQcElE_G-VaduQ",
    authDomain: "odia-games-visitor-counter.firebaseapp.com",
    projectId: "odia-games-visitor-counter",
    storageBucket: "odia-games-visitor-counter.firebasestorage.app",
    messagingSenderId: "485616496841",
    appId: "1:485616496841:web:554cb48f6ec2182caa1d18"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// ---- NEW: Aggressive Update Logic ----
// This code makes new service workers take over immediately.

self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  // Force the waiting service worker to become the active service worker.
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  // Tell the active service worker to take control of the page immediately.
  event.waitUntil(self.clients.claim());
});

// ---- End of New Logic ----


// Handle incoming messages when the app is in the background or terminated
messaging.onBackgroundMessage(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/icon/my.png' // A default icon
    };

    return self.registration.showNotification(notificationTitle, notificationOptions);
});
