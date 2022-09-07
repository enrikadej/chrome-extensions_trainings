console.log('popup is working!')

const bgpage = chrome.extension.getBackgroundPage();

console.log(bgpage, 'background page')

const wordTofind = bgpage.word.trim();

const url = `https://api.wordnik.com/v4/word.json/${wordTofind}/definitions?limit=1&includeRelated=false&sourceDictionaries=all&useCanonical=false&includeTags=false&api_key=YOURAPIKEY`;

loadJSON(url, gotData);

function gotData(data) {
  const newPElement = document.createElement('p');
  newPElement.innerText = data[1].text;
}
