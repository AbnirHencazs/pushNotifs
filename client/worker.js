console.log("Service Worker Loaded...");

self.addEventListener("push", e => {
  const data = e.data.json();
  console.log("Push Recieved...");
  self.registration.showNotification(data.title, {
    body: "Notificado por Accesa.me",
    icon: "http://accesa.me/img/images/empresa1.png"
  });
});