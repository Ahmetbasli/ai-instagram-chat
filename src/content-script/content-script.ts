(async () => {
  const src = chrome.runtime.getURL("assets/content-index.js");
  await import(src);
})();
