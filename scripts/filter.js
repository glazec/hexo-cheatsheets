// // add language- to code class
// hexo.extend.filter.register('before_post_render', (data) => {
//   // console.log('filter excute')
//   // console.log(data.content)
//   data.content = data.content.replace(/```\w{1,}/g, (str) => `${'```' + 'language-'}${str.toString().split('```')[1]}`);
//   console.log(data.content);
//   return data;
// });
