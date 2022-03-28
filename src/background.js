chrome.browserAction.onClicked.addListener(() => {
  chrome.tabs.insertCSS(null, { file: 'src/grid.css' });
  chrome.tabs.executeScript(null, { file: 'src/content.js' });
});
