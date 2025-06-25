// Give the service worker access to Firebase Messaging.
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyCI8CEVsIm04yshvJVAZqQcElE_G-VaduQ",
    authDomain: "odia-games-visitor-counter.firebaseapp.com",
    projectId: "odia-games-visitor-counter",
    storageBucket: "odia-games-visitor-counter.firebasestorage.app",
    messagingSenderId: "485616496841",
    appId: "1:485616496841:web:554cb48f6ec2182caa1d18"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Function to save a notification to IndexedDB (more reliable than localStorage in SW)
function saveNotificationToStorage(message) {
    const request = indexedDB.open('notificationsDB', 1);

    request.onupgradeneeded = (event) => {
        const db = event.target.result;
        db.createObjectStore('notifications', { keyPath: 'id', autoIncrement: true });
    };

    request.onsuccess = (event) => {
        const db = event.target.result;
        const transaction = db.transaction(['notifications'], 'readwrite');
        const store = transaction.objectStore('notifications');
        store.add(message);
    };
}


messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'https://raw.githubusercontent.com/imsbg/odiagames/refs/heads/main/icon/my.png'
    };

    // Prepare the message to save
    const messageToStore = {
        title: notificationTitle,
        body: notificationOptions.body,
        timestamp: new Date().toISOString(),
        read: false
    };

    // Save the message for the inbox
    saveNotificationToStorage(messageToStore);

    // Show the system notification
    return self.registration.showNotification(notificationTitle, notificationOptions);
});
