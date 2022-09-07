console.log("In content script");

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(request, sender, sendResponse) {

  let paragraphs = document.querySelectorAll("p")

  for (const elt of paragraphs) {
    elt.innerHTML = request.txt;
    elt.style["background-color"] = "#ff00ff";
  }

}