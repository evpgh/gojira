function getDomainAndGo() {
  chrome.omnibox.onInputEntered.addListener((text) => {
    chrome.storage.local.get("userSubdomain", function (result) {
      if (result.userSubdomain) {
        var subdomain = result.userSubdomain;
        console.log("Subdomain retrieved:", subdomain);
        const url =
          `https://` +
          subdomain +
          `.atlassian.net/browse/${encodeURIComponent(text)}`;
        chrome.tabs.create({ url });
      } else {
        console.log("No subdomain set. Set it in GoJira extension options!");
      }
    });
  });
}

getDomainAndGo();

chrome.runtime.onInstalled.addListener(function (details) {
  if (details.reason === "install") {
    chrome.runtime.openOptionsPage();
  }
});
