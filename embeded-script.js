let tweetDialog = document.getElementById("Tweetstorm-dialog");

const main =  function() {
  const host = location.hostname;
  const path = location.pathname;

  setInterval(repeat, 5000);
  document.getElementsByClassName("Grid-cell")[0].style.display = "none";
};

const counter = function(str,seq){
  return str.split(seq).length - 1;
}

const tweetNode = function(node) {
  return node.parentNode.parentNode.parentNode.parentNode;
}

const removeSpam = function() {
  [].forEach.call(document.getElementsByClassName("TweetTextSize"),function(e){
    let text = e.innerText;
    if (counter(text, "#") >= 3) {
      tweetNode(e).style.display = "none";
    }
  });
}

const repeat = function(){
  if (window.scrollY === 0 && (tweetDialog.style.display === "" || tweetDialog.style.display === "none") ) {
    var evt = document.createEvent("HTMLEvents");
    evt.initEvent("uiShortcutGotoTopOfScreen", true, true);
    document.dispatchEvent(evt);
  }
  removeSpam();
}

window.onload = function () {
  main();
};

