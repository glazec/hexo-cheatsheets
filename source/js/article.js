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

/* add .-headers to table */
(function () {
  document.querySelectorAll('table').forEach((node) => {
    node.classList.add('-headers');
  });
}());

function handleSection(header) {
  const elements = document.querySelectorAll(header);
  for (let i = 0; i < elements.length; i++) {
    const el = elements[i];
    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', `${header}-section`);
    const parent = el.parentNode;
    const childNode = checkSectionNextSibling(el);
    parent.replaceChild(wrapper, el);
    wrapper.append(elements[i]);
    for (let ei = 0; ei < childNode.length; ei++) {
      wrapper.appendChild(childNode[ei]);
    }
  }
}
function checkSectionNextSibling(el) {
  const sibling = el.nextElementSibling;
  if (sibling && (sibling.nodeName == 'P' || sibling.nodeName == 'PRE'
    || sibling.nodeName == 'TABLE' || sibling.nodeName == 'UL'
    || sibling.nodeName == 'OL' || sibling.nodeName == 'H6')) {
    return [sibling].concat(checkSectionNextSibling(sibling));
  }
  return [];
}

function handleSectionList(header) {
  const elements = document.querySelectorAll(`div .${header}-section`);
  for (let i = 0; i < elements.length; i++) {
    const el = elements[i];
    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'code-section-list');
    const parent = el.parentNode;
    const childNode = checkSectionListNextSibling(el, header);
    parent.replaceChild(wrapper, el);
    wrapper.append(elements[i]);
    for (let ei = 0; ei < childNode.length; ei++) {
      i++;
      wrapper.appendChild(childNode[ei]);
    }
  }
}

function checkSectionListNextSibling(el, header) {
  const sibling = el.nextElementSibling;
  if (sibling && sibling.classList.value.toString().includes(`${header}-section`)) {
    return [sibling].concat(checkSectionListNextSibling(sibling, header));
  }
  return [];
}

/* add .hx-section & hx-section-list */
(function () {
  for (let i = 3; i < 6; i++) {
    handleSection(`h${i}`)
  }
  for (let i = 3; i < 6; i++) {
    handleSectionList(`h${i}`)
  }

}());

// /* add .body */
(function () {
  function wrapperBody(elements) {
    console.log(elements)
    for (let i = 0; i < elements.length; i++) {
      const parent = elements[i];
      const wrapper = document.createElement('div');
      wrapper.setAttribute('class', 'body');
      const childNode = [...parent.childNodes];
      console.log(childNode)
      el = childNode[1];
      parent.replaceChild(wrapper, el);
      for (let ei = 1; ei < childNode.length; ei++) {
        wrapper.appendChild(childNode[ei]);
      }
    }
  }
  for (let i = 3; i < 6; i++) {
    const elements = document.querySelectorAll(`div .h${i}-section`);
    wrapperBody(elements)
  }
}());