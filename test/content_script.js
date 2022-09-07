const text = document.querySelectorAll('input, [contenteditable="true"], textarea');

// browser.action.onClicked.addListener(async (tab) => {
//   try {
//     await browser.scripting.executeScript({
//       target: {
//         tabId: tab.id,
//       },
//       func: () => {
//         document.body.style.border = "5px solid green";
//       },
//     });
//   } catch (err) {
//     console.error(`failed to execute script: ${err}`);
//   }
// });

// for (let i = 0; i < text.length; i++) {
//   const input = text[i];
//   const str = text[i].innerHTML;

//   input.addEventListener('change', (e) => {  
//     console.log(e.target.value, 'target'); 
//     console.log(str, 'str');
//     e.target.value.innerHTML.replace('cat', 'dog')
//   });
// }

// const select = document.querySelector('select');  
// const log = document.getElementById('value-log');
// const updateValue = (e) => {  
//   log.textContent = e.target.value;  
// }
// select.oninput = updateValue;


// HTMLInputElementObject.addEventListener('input', function (evt) {
//   if (this.value.innerHTML.includes('cat')) {
//     this.value.innerHTML.replace('cat', 'dog')
//   };
// });

// for (let i = 0; i < text.length; i++) {
//   if (text[i].innerHTML.includes('cat')) {
//     text[i].innerHTML = text[i].innerHTML.replace('cat', 'dog')
//   } else if (text[i].innerHTML.includes('helo')) {
//     text[i].innerHTML = text[i].innerHTML.replace('helo', 'help')
//   }
// }

for (let i = 0; i < text.length; i++) {
  text[i].addEventListener('')
}