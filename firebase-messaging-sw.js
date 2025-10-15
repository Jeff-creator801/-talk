// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBz5OuG2E5-ZQk92GxvB17RPP64VgdJOeY",
  authDomain: "talk-f1ff9.firebaseapp.com",
  projectId: "talk-f1ff9",
  storageBucket: "talk-f1ff9.firebasestorage.app",
  messagingSenderId: "856136352939",
  appId: "1:856136352939:web:87c28128d4951f909f63ee"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notification = payload.notification || {};
  const title = notification.title || 'Новое сообщение';
  const options = {
    body: notification.body || '',
    icon: '/icons/icon-192x192.png'
  };
  self.registration.showNotification(title, options);
});
