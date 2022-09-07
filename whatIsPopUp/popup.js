console.log('popup is working!')

const userInput = document.getElementById('userInput');

console.log(userInput);

userInput.oninput = function changeText() {
  console.log('changing text')

  let params = {
    active: true,
    currentWindow: true
  }

  chrome.tabs.query(params, gotTabs);

  function gotTabs(tabs) {
    console.log(tabs);
    console.log('tabs')
    console.log(userInput.value, 'this is userInput value')
    
    const message = userInput.value;
    const msg = {
      txt: message
    }

    chrome.tabs.sendMessage(tabs[0].id, msg)
  }
}
