let status = false;  

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'showOverlay') {
        console.log("clicking worked")
        status = true
        applyOverlay()
    }
    else if (request.action === 'noOverlay') { 
        console.log("clicked off")
        status = false
        removeOverlay()
    }
  });
  
  function applyOverlay() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        console.log("sending message to content")
        chrome.tabs.sendMessage(tabs[0].id, { action: 'applyOverlay' })
      });
  }

  function removeOverlay() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        console.log("sending message to content to remove")
        chrome.tabs.sendMessage(tabs[0].id, { action: 'removeOverlay' })
      });
  }

// new tab and reloads
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (status) {
        applyOverlay()
    }
    else {
        removeOverlay()
    }
});

