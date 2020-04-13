/* configure prism plugin */
// (function(){
//   Prism.plugins.autoloader.languages_path = '/prism/prism-grammar/';
// })();

/* add class for code highlight */
// (function() {
//   document.querySelectorAll("pre>code").forEach(function(node) {
//     languageClass = node.classList[0];
//     node.classList.add("language-" + languageClass);
//   });
// })();

// (function() {
//   document.querySelectorAll("h3").forEach(function(node) {
//     languageClass = node.classList[0];
//     node.classList.add("language-" + languageClass);
//   });
// })();

/* high light prism js */
(function () {
  Prism.highlightAll();
}());

/* add .h2-section */
(function () {
  const parent = document.querySelectorAll('main')[0];
  elements = [...parent.childNodes];
  for (let i = 0; i < elements.length; i++) {
    const el = elements[i];
    if (el.nodeName == 'H2') {
      const wrapper = document.createElement('div');
      wrapper.setAttribute('class', 'h2-section');
      parent.replaceChild(wrapper, el);
      wrapper.appendChild(el);
      i += 1;
      while (i < elements.length && elements[i].nodeName != 'H2') {
        wrapper.append(elements[i]);
        i++;
      }
      i -= 1;
    }
  }
}());

/* add # to h2 */
(function () {
  const elements = document.querySelectorAll('h2>a');
  for (let i = 0; i < elements.length; i++) {
    elements[i].text = '#';
    elements[i].className = `${elements[i].className} local-anchor anchor`;
  }
}());

/* add .h3-section */
(function () {
  const elements = document.querySelectorAll('h3');
  for (let i = 0; i < elements.length; i++) {
    const el = elements[i];
    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'h3-section');
    const parent = el.parentNode;
    const childNode = checkNextSibling(el);
    parent.replaceChild(wrapper, el);
    wrapper.append(elements[i]);
    for (let ei = 0; ei < childNode.length; ei++) {
      wrapper.appendChild(childNode[ei]);
    }
  }

  function checkNextSibling(el) {
    const sibling = el.nextElementSibling;
    if (sibling && sibling.nodeName != 'H3' && sibling.nodeName != 'H2') {
      return [sibling].concat(checkNextSibling(sibling));
    }
    return [];
  }
}());

/* add .h3-section list */
(function () {
  const elements = document.querySelectorAll('div .h3-section');
  for (let i = 0; i < elements.length; i++) {
    const el = elements[i];
    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'h3-section-list -three-column');
    const parent = el.parentNode;
    const childNode = checkNextSibling(el);
    parent.replaceChild(wrapper, el);
    wrapper.append(elements[i]);
    for (let ei = 0; ei < childNode.length; ei++) {
      i++;
      wrapper.appendChild(childNode[ei]);
    }
  }

  function checkNextSibling(el) {
    const sibling = el.nextElementSibling;
    if (sibling && sibling.classList.value.toString().includes('h3-section')) {
      return [sibling].concat(checkNextSibling(sibling));
    }
    return [];
  }
}());

/* add .-headers to table */
(function () {
  document.querySelectorAll('table').forEach((node) => {
    node.classList.add('-headers');
  });
}());

/* add .body */
(function () {
  const elements = document.querySelectorAll('div .h3-section');
  for (let i = 0; i < elements.length; i++) {
    const parent = elements[i];
    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'body');
    const childNode = [...parent.childNodes];
    el = childNode[1];
    parent.replaceChild(wrapper, el);
    for (let ei = 1; ei < childNode.length; ei++) {
      wrapper.appendChild(childNode[ei]);
    }
  }
}());
