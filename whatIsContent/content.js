console.log("In content script");

let paragraphs = document.getElementsByTagName("p")

for (elt of paragraphs) {
  elt.style["background-color"] = "#ff00ff";
}
