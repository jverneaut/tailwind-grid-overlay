chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.insertCSS({ target: { tabId: tab.id }, files: ['src/grid.css'] });
  chrome.scripting.executeScript({ target: { tabId: tab.id }, files: ['src/content.js'] });
});
