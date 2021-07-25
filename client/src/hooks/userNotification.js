function sendNotification() {
  const text = "Your carrot will expire in 3 days!";
  const title = "Your food is going to waste";
  const options = {
    body: text,
    vibrate: [200, 100, 200],
    tag: "expiring-product",
    actions: [
        { action: "used", title: "I've used it!" },
        { action: "no", title: "Not right now." }
      ]
  };
  (reg => 
    {reg.showNotification(title, options);
  });
}