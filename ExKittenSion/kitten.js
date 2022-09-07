'use strict'

console.log('Kittens of the world, unite as one!');

const filenames = [
  'cat1.jpg',
  'cat2.jpg',
  'cat3.jpg',
  'cat5.jpg',
];

let imgs = document.querySelectorAll('img');

for (const el of imgs) {
  const r = Math.floor(Math.random() * filenames.length);

  const file = 'images/' + filenames[r];

  // we getting url of our random picture
  const url = chrome.runtime.getURL(file);

  el.src = url;

}