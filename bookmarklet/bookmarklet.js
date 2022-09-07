(function() {
  console.log("bookmarklet is starting");

  let paragraphs = document.getElementsByTagName('p');

  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].innerHTML = 'puppy';
  }
})();

