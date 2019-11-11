
/* add class for code highlight */
(function() {
  document.querySelectorAll("pre>code").forEach(function(node) {
    console.log(node);
    languageClass = node.classList[0];
    node.classList.add("language-" + node.classList);
  });
})();

(function() {
  document.querySelectorAll("h3").forEach(function(node) {
    console.log(node);
    languageClass = node.classList[0];
    node.classList.add("language-" + node.classList);
  });
})();

/* high light prism js */
(function() {
  Prism.highlightAll();
})();

/* add .body */
(function() {
  var elements = document.querySelectorAll("pre");
  for (var i = 0; i < elements.length; i++) {
    var el = elements[i];
    var wrapper = document.createElement("div");
    wrapper.setAttribute("class", "body");

    var parent = el.parentNode;
    // var childNode = checkNextSibling(el);
    parent.replaceChild(wrapper, el);
    wrapper.appendChild(el)
    // for(var j=0;j<childNode.length;j++){
    //   wrapper.append(childNode[i])
    // } 
    // childNode.Each((value)=>{wrapper.append(value)})
    // wrapper.append(childNode);
    // i = i + childNode.length;
  }

  function checkNextSibling(el) {
    console.log(el.nextElementSibling);
    if (el.nextElementSibling) {
      if (el.nextElementSibling.nodeName == "PRE") {
        return [el].concat(checkNextSibling(el.nextElementSibling));
      }
    } else {
      return [el];
    }
  }
})();
