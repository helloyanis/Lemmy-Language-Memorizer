browser.webNavigation.onHistoryStateUpdated.addListener(async (details) => {
    console.log(details);
    if (details.url.includes("create_post") && !details.url.includes("languageId")) {
      browser.scripting.executeScript({
        target: {tabId: details.tabId},
        files: ["script.js"]
      });
    }
  });
  