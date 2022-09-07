console.log('background is going');

chrome.runtime.onMessage.addListener(receiver);

window.word = '';

function receiver(request, sender, sendResponse) {
  console.log(request);
  word = request.text;
}