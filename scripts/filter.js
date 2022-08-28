/*
 * @Author: Mahoo12138 mahoo12138@outlook.com
 * @Date: 2022-07-25 14:51:08
 * @LastEditors: Mahoo12138 mahoo12138@outlook.com
 * @LastEditTime: 2022-08-13 13:27:16
 * @FilePath: \cheatsheets-with-hexo\themes\hexo-cheatsheets\scripts\filter.js
 * @Description: adjust the dom structure & adding specific class
 */

const domutils = require('domutils');
const { parseDOM } = require('htmlparser2');
const { Element } = require('domhandler');
const render = require("dom-serializer").default;


hexo.extend.filter.register('before_post_render', (data) => {
  data.content = `## get started\n${data.content}`;
  return data;
});

hexo.extend.filter.register('after_post_render', (data) => {

  let dom = parseDOM(data.content);

  const tables = domutils.findAll((el) => el.name === 'table', dom);
  tables.forEach((node) => {
    const th = domutils.findAll((el) => el.name === 'th', node.children);
    const noHeader = th.filter(item => item.children.length !== 0).length === 0
    if (noHeader) {
      const { attribs } = node
      if (attribs.class) {
        attribs.class.concat('-header-less')
      } else {
        attribs.class = '-header-less'
      }
    }
  });

  // wrapper h2-section
  const h2s = domutils.findAll((el) => el.name === 'h2', dom);
  dom = []
  for (let i = 0; i < h2s.length; i++) {
    const wrapper = new Element('div', { class: 'h2-section' });
    let h2 = h2s[i], h2_section = h2;
    domutils.appendChild(wrapper, h2.cloneNode(true));
    while (h2?.next) {
      h2 = h2.next;
      if (h2.prev?.prev) {
        domutils.removeElement(h2.prev)
      }
      if (h2?.name !== 'h2') {
        domutils.appendChild(wrapper, h2.cloneNode(true));
      } else {
        break;
      }
    }
    dom.push(wrapper)
    domutils.prepend(h2_section, wrapper)
  }
  // wrapper hx-section && wrapper body
  for (let i = 3; i < 6; i++) {
    const sections = domutils.findAll((el) => el.name === `h${i}`, dom);
    for (let j = 0; j < sections.length; j++) {
      const item = sections[j]
      const wrapper = new Element('div', { class: `h${i}-section` });
      const childNode = checkSectionNextSibling(item);
      const body = new Element('div', { class: 'body' });
      domutils.appendChild(wrapper, item.cloneNode(true))
      domutils.replaceElement(item, wrapper)
      for (let e = 0; e < childNode.length; e++) {
        domutils.appendChild(body, childNode[e]);
      }
      domutils.appendChild(wrapper, body);
    }
  }
  // wrapper code-section-list 
  const h2Lists = domutils.findAll(el => el.name === 'div'
    && el.attribs.class === "h2-section", dom);
  for (const h2Section of h2Lists) {
    for (let i = 3; i < 6; i++) {
      const sections = h2Section.children
        .filter(node => node.attribs?.class === `h${i}-section`)
      for (let j = 0; j < sections.length; j++) {
        const item = sections[j]
        const wrapper = new Element('div', { class: 'code-section-list' });
        const childNode = checkSectionListNextSibling(item, `h${i}-section`);
        domutils.appendChild(wrapper, item.cloneNode(true))
        domutils.replaceElement(item, wrapper)
        for (let e = 0; e < childNode.length; e++) {
          j++;
          domutils.appendChild(wrapper, childNode[e]);
        }
      }
    }
  }

  data.content = render(dom)
  return data;
});

function checkSectionNextSibling(node) {
  const sibling = node.next;
  // sibling.data: Text node
  if (sibling && (sibling.data || sibling.name == 'p' || sibling.name == 'pre'
    || sibling.name == 'table' || sibling.name == 'ul'
    || sibling.name == 'ol' || sibling.name == 'h6' || sibling.name == 'blockquote')) {
    return [sibling].concat(checkSectionNextSibling(sibling));
  }
  return [];
}

function checkSectionListNextSibling(node, header) {
  const sibling = node.next;
  if (sibling && sibling.attribs?.class?.includes(header)) {
    return [sibling].concat(checkSectionListNextSibling(sibling, header));
  }
  return [];
}