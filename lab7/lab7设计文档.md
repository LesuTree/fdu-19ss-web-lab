#Lab7设计文档

##使用到的JSDOM 
 
       首先分析JS DOM 如何写入html中,利用document.querySelector(".flex-container");
       首先document.createElement(tagName)方法用来创建元素
       .className=来进行赋值
      .innerText用于内容节点的赋值
      .appendChild()用于添加子节点


##分析html结构
    
     创建class为item item的div后，添加h3的Gene;
     Item item中的div后添加inner-box的div
     由于author和liftime大小不相等并且在一同一行，所以应该设置display为inline(css中没有) 并且其margin-left为1em;
     Item item中的div后添加inner-box的div
     其中放置一行介绍为
     h3的popular pictures;
     然后利用for循环添加进入works中的不同图片；循环次数为图片数组的长度


