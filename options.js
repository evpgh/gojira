function setDomainInput(subdomain) {
  document.getElementById("subdomain").value = subdomain;
}

document.addEventListener("DOMContentLoaded", function () {
  chrome.storage.local.get(["userSubdomain"], function (result) {
    if (result.userSubdomain) {
      setDomainInput(result.userSubdomain);
    }
  });
});

document
  .getElementById("subdomainForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var subdomain = document.getElementById("subdomain").value;
    chrome.storage.local.set({ userSubdomain: subdomain }, function () {
      console.log("Subdomain is saved in local storage.");

      var notification = document.getElementById("saveNotification");
      notification.className = "notification show";

      setTimeout(function () {
        notification.className = "notification";
      }, 3000);
    });
  });
