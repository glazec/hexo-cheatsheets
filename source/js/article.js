/* configure prism plugin */
// (function(){
//   Prism.plugins.autoloader.languages_path = '/prism/prism-grammar/';
// })();

/* add class for code highlight */
(function() {
  document.querySelectorAll("pre>code").forEach(function(node) {
    languageClass = node.classList[0];
    node.classList.add("language-" + languageClass);
  });
})();

(function() {
  document.querySelectorAll("h3").forEach(function(node) {
    languageClass = node.classList[0];
    node.classList.add("language-" + languageClass);
  });
})();

/* high light prism js */
(function() {
  Prism.highlightAll();
})();

/* add .h2-section */
(function() {
  var parent = document.querySelectorAll("main")[0];
  elements = [...parent.childNodes];
  for (var i = 0; i < elements.length; i++) {
    var el = elements[i];
    if (el.nodeName == "H2") {
      var wrapper = document.createElement("div");
      wrapper.setAttribute("class", "h2-section");
      parent.replaceChild(wrapper, el);
      wrapper.appendChild(el);
      i = i + 1;
      while (i < elements.length && elements[i].nodeName != "H2") {
        wrapper.append(elements[i]);
        i++;
      }
      i = i - 1;
    }
  }
})();

/* add # to h2 */
(function() {
  var elements = document.querySelectorAll("h2>a")
  for (var i = 0; i < elements.length; i++) {
    elements[i].text="#"
    elements[i].className = elements[i].className+" local-anchor anchor"
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
    wrapper.append(elements[i]);
    for (var ei = 0; ei < childNode.length; ei++) {
      wrapper.appendChild(childNode[ei]);
    }
  }

  function checkNextSibling(el) {
    var sibling = el.nextElementSibling;
    if (sibling && sibling.nodeName != "H3" && sibling.nodeName != "H2") {
      return [sibling].concat(checkNextSibling(sibling));
    } else {
      return [];
    }
  }
})();

/* add .h3-section list */
(function() {
  var elements = document.querySelectorAll("div .h3-section");
  for (var i = 0; i < elements.length; i++) {
    var el = elements[i];
    var wrapper = document.createElement("div");
    wrapper.setAttribute("class", "h3-section-list -three-column");
    var parent = el.parentNode;
    var childNode = checkNextSibling(el);
    parent.replaceChild(wrapper, el);
    wrapper.append(elements[i]);
    for (var ei = 0; ei < childNode.length; ei++) {
      i++;
      wrapper.appendChild(childNode[ei]);
    }
  }

  function checkNextSibling(el) {
    var sibling = el.nextElementSibling;
    if (sibling && sibling.classList.value.toString().includes("h3-section")) {
      return [sibling].concat(checkNextSibling(sibling));
    } else {
      return [];
    }
  }
})();

/* add .-headers to table */
(function() {
  document.querySelectorAll("table").forEach(function(node) {
    node.classList.add("-headers");
  });
})();

/* add .body */
(function() {
  var elements = document.querySelectorAll("div .h3-section");
  for (var i = 0; i < elements.length; i++) {
    var parent = elements[i];
    var wrapper = document.createElement("div");
    wrapper.setAttribute("class", "body");
    var childNode = [...parent.childNodes];
    el = childNode[1];
    parent.replaceChild(wrapper, el);
    for (var ei = 1; ei < childNode.length; ei++) {
      wrapper.appendChild(childNode[ei]);
    }
  }
})();
