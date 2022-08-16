function hideSelf() {
  const hideButton = document.querySelector(".hide-self-button");

  hideButton.onclick = function() {
    document.querySelector('button').hidden = true;
  }
}
