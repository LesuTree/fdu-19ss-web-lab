##练习7
  lab10-exercise7-pdo.php代码解释
    通过require_once定义变量，利用setAttribute方法抛出异常，利用while定义查询语句，并列出所有的查询结果；最后catch处理异常
  lab10-exercise7-mysqli.php代码解释
   通过require_once定义变量，利用mysqli_connect建立与数据库的联系，如果建立联系异常，那么就抛出异常，如果正常，定义查询语句，并将查询结果的每一列转化为数组的属性值，最后释放内存。

##练习8
  三个函数的代码解释
  outputArtists解释
  通过pdo与数据库建立联系查询结果通过lastname进行排列，行数限制在30行以内，而后用超链接显示出来
  outputPaintings解释
  判断是否传入id，且id>0则与数据库建立连接，从数据库中依据“artistid=id”进行查询并将查询结果转化为数组传入outputSingePainting($row)函数
  outputSinglePaintings:
  利用传来的数组，将至以HTML格式展现在浏览器中

##练习9
  三个方法
  1、exec（）方法，返回执行语句后收其影响的行数
  2、query（）方法，返回执行后的结果的集合
  3、预处理语句：prepare（）语句做准备工作，execute执行查询操作
  无需修改查询语句，直接改变绑定参数的值，更为方便