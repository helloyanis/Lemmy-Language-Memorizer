(async function () {
  // Fetch the stored language preference
  let { languageId } = await browser.storage.local.get("languageId");
  if(!languageId) {
    languageId = 0;
  }
  // Define a function to set the language select value
  function setLanguageSelect() {
    const selectElement = document.querySelector(".language-select select");
    if (selectElement) {
      selectElement.value = languageId;
      selectElement.dispatchEvent(new Event("change"));
    }
  }

  // Run the function to set the select value if on the correct URL
  setLanguageSelect();

  // Observe changes to the URL and the language select element
  let currentURL = location.pathname;

  // Observe changes to the URL in a seamless navigation setup
  const observer = new MutationObserver(() => {
    if (location.href !== currentURL) {
      currentURL = location.href;
      if (currentURL==="/create_post") {
        setLanguageSelect();
      }
    }
  });

  // Start observing changes in the body to catch seamless navigation
  observer.observe(document.body, { childList: true, subtree: true });

  // Observe changes to the select element for manual updates
  document.querySelector(".language-select select")?.addEventListener("change", (event) => {
    const newLanguage = event.target.value;
    browser.storage.local.set({ languageId: newLanguage });
  });
  console.log("Script loaded with language "+languageId);
})();