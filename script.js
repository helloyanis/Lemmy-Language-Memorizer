(async function () {
  // Fetch the stored language preference
  let { languageId } = await browser.storage.local.get("languageId");
  if(!languageId) {
    languageId = 0;
  }

  const observer = new MutationObserver((mutationsList, observer) => {
    // Look for the language select element
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList') {
        for (const node of mutation.addedNodes) {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const selectElementList = node.querySelectorAll('[id*="language-select"]');
            if (selectElementList.length > 0) {
              //Language select was found.
              const selectElement=selectElementList[0];
              //Set the value of the select to the stored language
              selectElement.value = languageId;
              //Trigger the change event to update the language
              selectElement.dispatchEvent(new Event("change"));
              //Add an event listener to the select to save the language preference
              selectElement.addEventListener("change", (event) => {
                //User changed their language from the select
                const newLanguage = event.target.value;
                browser.storage.local.set({ languageId: newLanguage });
              });
              break;
            }
          }
        }
      }
    }
  });

  // Start observing the body for changes
  observer.observe(document.body, { childList: true, subtree: true });
  
})();