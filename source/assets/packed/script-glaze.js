/* add class for code highlight */
(function () {
    document.querySelectorAll('pre>code').forEach(function (node){
        console.log(node)
        languageClass = node.classList[0]
        node.classList.add("language-"+node.classList)
    })
    }
  )();

  (function () {
    document.querySelectorAll('h3').forEach(function (node){
        console.log(node)
        languageClass = node.classList[0]
        node.classList.add("language-"+node.classList)
    })
    }
  )();


/* high light prism js */
(function () {
    Prism.highlightAll();
    }
  )();