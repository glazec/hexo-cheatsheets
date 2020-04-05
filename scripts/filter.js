// add language- to code class
hexo.extend.filter.register('before_post_render', function(data){
    // console.log('filter excute')
    // console.log(data.content)
    data.content  = data.content.replace(/```\w{1,}/g,str=>{
        console.log(typeof str)
        return '```'+'language-'+str.toString().split('```')[1];
    })
    console.log(data.content)
    return data
  });