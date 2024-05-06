chrome.omnibox.onInputEntered.addListener((text) => {
  const subdomain = process.env.subdomain;
  const url =
    `https://` +
    subdomain +
    `.atlassian.net/browse/${encodeURIComponent(text)}`;
  chrome.tabs.create({ url });
});
