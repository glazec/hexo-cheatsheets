/* add class for code highlight */
(function() {
  document.querySelectorAll("pre>code").forEach(function(node) {
    console.log(node);
    languageClass = node.classList[0];
    node.classList.add("language-" + languageClass);
  });
})();

(function() {
  document.querySelectorAll("h3").forEach(function(node) {
    console.log(node);
    languageClass = node.classList[0];
    node.classList.add("language-" + languageClass);
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
    var childNode = checkNextSibling(el);
    parent.replaceChild(wrapper, el);
    wrapper.append(elements[i])
    for (var ei = 0; ei < childNode.length; ei++) {
      wrapper.appendChild(childNode[ei]);
      if(childNode[ei].nodeName=="PRE"){
        i++
      }
    }
  }

  function checkNextSibling(el) {
    var sibling = el.nextElementSibling;
      if (sibling&&(sibling.nodeName == "PRE"||sibling.nodeName=="P")) {
        return [sibling].concat(checkNextSibling(sibling));
    } else {
      return [];
    }
  }
})();

/* add .h3-section */
(function() {
  var elements = document.querySelectorAll("h3");
  for (var i = 0; i < elements.length; i++) {
    var el = elements[i];
    var wrapper = document.createElement("div");
    wrapper.setAttribute("class", "h3-section");
    var parent = el.parentNode;
    var childNode = checkNextSibling(el);
    parent.replaceChild(wrapper, el);
    wrapper.append(elements[i])
    for (var ei = 0; ei < childNode.length; ei++) {
      wrapper.appendChild(childNode[ei]);
    }
  }

  function checkNextSibling(el) {
    var sibling = el.nextElementSibling;
      if (sibling&&(sibling.nodeName != "H3")) {
        return [sibling].concat(checkNextSibling(sibling));
    } else {
      return [];
    }
  }
})();

/* add .h2-section */
(function(){
  var elements = document.querySelectorAll("h2");
  for (var i = 0; i < elements.length; i++) {
    var el = elements[i];
    var wrapper = document.createElement("div");
    wrapper.setAttribute("class", "h2-section");
    var parent = el.parentNode;
    parent.replaceChild(wrapper, el);
    wrapper.append(elements[i])
}})();

/* add .h3-section */
(function() {
  var elements = document.querySelectorAll("div .h3-section");
  for (var i = 0; i < elements.length; i++) {
    var el = elements[i];
    var wrapper = document.createElement("div");
    wrapper.setAttribute("class", "h3-section-list -three-column");
    var parent = el.parentNode;
    var childNode = checkNextSibling(el);
    parent.replaceChild(wrapper, el);
    wrapper.append(elements[i])
    for (var ei = 0; ei < childNode.length; ei++) {
      i++
      wrapper.appendChild(childNode[ei]);
    }
  }

  function checkNextSibling(el) {
    var sibling = el.nextElementSibling;
      if (sibling&&(sibling.classList.value.toString().includes('h3-section'))) {
        return [sibling].concat(checkNextSibling(sibling));
    } else {
      return [];
    }
  }
})();