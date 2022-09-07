console.log("In content script");

window.addEventListener('mouseup', wordSelected);

function wordSelected() {
  let selectedText = window.getSelection().toString().trim();

  console.log(selectedText);

  if (selectedText.length > 0) {
    const message = {
      text: selectedText
    }

    chrome.runtime.sendMessage(message);
  }

}